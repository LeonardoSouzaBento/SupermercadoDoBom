import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Div, P, Img,Advertisements, Span, Fundo, Pagination} from './ComponentesAnuncios';


let imageUrls = [
  "https://i.pinimg.com/736x/63/3b/16/633b16299e2fa1f2223d6bd6ff6cf1eb.jpg", //farinha
  "https://i.pinimg.com/736x/f6/49/ea/f649ea6e0f7b6ad1ed26d25fa5ff0bf6.jpg", //carne
  "https://i.pinimg.com/736x/91/98/39/919839cad01f2cd3cfe201d8332d98b5.jpg", //linguica
  "https://i.pinimg.com/736x/99/9b/e7/999be7d41a28a1781a49dc5c7ab2a963.jpg", //cup
  'https://i.pinimg.com/736x/03/a4/75/03a475aaf5e64c564e7906a14c11a477.jpg', //fanta
  "https://i.pinimg.com/736x/69/f1/d3/69f1d3cf3946afdab4edcd4fd98f1597.jpg" //arroz
];

function AnnouncementSection() {
  //Caucular os índices centrais
  const divRef = useRef(null);
  const fundoRefs = useRef([]);
  const advertisementsRef = useRef(null);
  const [indicesCentrais, setIndices] = useState([]);
  const [center, setCenter] = useState(0);


  const recalcularCenter = useCallback(() => {
    if (divRef.current && fundoRefs.current.length > 0 && advertisementsRef.current) {
      const divWidth = divRef.current.offsetWidth;
      const fundoWidth = fundoRefs.current[0]?.offsetWidth || 0;;
      const advertisementsStyle = getComputedStyle(advertisementsRef.current);
      const gap = parseFloat(advertisementsStyle.gap);

      let img_center = Math.ceil((imageUrls.length) / 2);

      const visibleRatio = divWidth / (fundoWidth + gap);
      const anun_visible = visibleRatio > 2.6 ? 3 : 1;

      let indices = [img_center];
      if (anun_visible === 3) {
        indices = [img_center - 1, img_center, img_center + 1];
      }
 
      let widtAllAds = imageUrls.length * fundoWidth + gap * (imageUrls.length - 1);
      let Initialcenter = 0;
      function obterLimites() {
        if ((imageUrls.length) % 2 === 0) {
          Initialcenter = ((divWidth - widtAllAds)/2) - (fundoWidth/2 + gap/2)
        } else {
          Initialcenter = (divWidth - widtAllAds) / 2;
        }
      }
      obterLimites();
      setCenter(Initialcenter);
    }
  }, [imageUrls]);

  useEffect(() => {
    recalcularCenter();

    const handleResize = () => {
      let timeoutId;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(recalcularCenter, 300); // 300ms de delay após o redimensionamento parar
      };
    };

    const debouncedResizeHandler = handleResize();

    window.addEventListener('resize', debouncedResizeHandler);

    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
    };
  }, [recalcularCenter]);
 
  //Atualizaer a paginação
  useEffect(() => {
    if (fundoRefs.current.length > 0 && divRef.current) {
      const divWidth = divRef.current.offsetWidth;
      const novosIndices = [];

      fundoRefs.current.forEach((fundoRef, index) => {
        if (fundoRef) {
          const rect = fundoRef.getBoundingClientRect();
          const larguraFundo = fundoRef.offsetWidth;
          const larguraVisivel = Math.min(rect.right, divRef.current.getBoundingClientRect().right) - Math.max(rect.left, divRef.current.getBoundingClientRect().left);
          const porcentagemVisivel = (larguraVisivel / larguraFundo) * 100;

          if (porcentagemVisivel >= 70) {
            novosIndices.push(index);
          }
        }
      });
      setIndices(novosIndices);
    }
  }, [center]);

  return (
    <Div ref={divRef}>
      <P>Temos novidades!</P>
      <Advertisements ref={advertisementsRef} $center={center}>
        {imageUrls.map((url, index) => (
          <Fundo key={index} $bg={url} ref={(el) => (fundoRefs.current[index] = el)
          }>
            <Img src={url} alt={`Imagem de anúncio ${index + 1}`} id={`anun ${index + 1}`} />
          </Fundo>
        ))}
      </Advertisements>
      <Pagination>
        {imageUrls.map((_, i) => (
          <Span key={i} $atual={indicesCentrais.includes(i)}></Span>
        ))}
      </Pagination>
    </Div>
  );
}

export default AnnouncementSection;