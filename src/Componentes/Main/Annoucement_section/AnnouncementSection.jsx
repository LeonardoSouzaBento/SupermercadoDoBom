import React, { useRef, useEffect, useState, useCallback, useContext } from 'react';
import { Div, P, Img,Advertisements, Span, Fundo, Pagination} from './ComponentesAnuncios';
import { CartContext } from '../../CartContext';
import { useScroll2 } from '../../../useScroll2';

let imageUrls = [
  "https://i.pinimg.com/736x/63/3b/16/633b16299e2fa1f2223d6bd6ff6cf1eb.jpg", //farinha
  "https://i.pinimg.com/736x/f6/49/ea/f649ea6e0f7b6ad1ed26d25fa5ff0bf6.jpg", //carne
  "https://i.pinimg.com/736x/91/98/39/919839cad01f2cd3cfe201d8332d98b5.jpg", //linguica
  "https://i.pinimg.com/736x/99/9b/e7/999be7d41a28a1781a49dc5c7ab2a963.jpg", //cup
  'https://i.pinimg.com/736x/03/a4/75/03a475aaf5e64c564e7906a14c11a477.jpg', //fanta
  "https://i.pinimg.com/736x/69/f1/d3/69f1d3cf3946afdab4edcd4fd98f1597.jpg" //arroz
];

function AnnouncementSection() {
  useScroll2();
  const {setLimitAdvertisements, setTranslateX1, translateX1, advertisementsRef}= useContext(CartContext);
  //Caucular os índices centrais
  const divRef = useRef(null);
  const fundoRefs = useRef([]);
  const [indicesCentrais, setIndices] = useState([]);

  //calcular centro/ obter o limite/ iniciar a paginação
  const recalcularCenter = useCallback(() => {
    //centro e limite
    if (divRef.current && fundoRefs.current.length > 0 && advertisementsRef.current) {
      const divWidth = divRef.current.offsetWidth; //largura container pai
      const fundoWidth = fundoRefs.current[0]?.offsetWidth || 0;//largura da imagem
      const gap = parseFloat(getComputedStyle(advertisementsRef.current).gap);

      let img_center = Math.ceil((imageUrls.length) / 2);

      const visibleRatio = divWidth / (fundoWidth + gap);
      const anun_visible = visibleRatio > 2.6 ? 3 : 1;

      let indices = [img_center];
      if (anun_visible === 3) {
        indices = [img_center - 1, img_center, img_center + 1];
        setIndices(indices)
      }else{setIndices(indices)};
 
      let widtAllAds = imageUrls.length * fundoWidth + gap * (imageUrls.length - 1);//largura de tdos os anuncios
      let limite = divWidth-widtAllAds;
      setLimitAdvertisements(limite); //Limite de rolagem para anuncios
      let Initialcenter = 0;
      function obterLimites() {
        if ((imageUrls.length) % 2 === 0) {
          Initialcenter = ((divWidth - widtAllAds)/2) - (fundoWidth/2 + gap/2)
        } else {
          Initialcenter = (divWidth - widtAllAds) / 2;
        }
      }
      obterLimites();
      setTranslateX1(Initialcenter);
    }
  }, [imageUrls]);

  //evento de resize
  const handleResize = useCallback(() => {
    let timeoutId;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(recalcularCenter, 300);
    };
  }, [recalcularCenter]);

  useEffect(() => {
    const debouncedResizeHandler = handleResize();
    window.addEventListener('resize', debouncedResizeHandler);

    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
    };
  }, [recalcularCenter]);

  // Cálculo inicial na montagem
  useEffect(() => {
    recalcularCenter(); 
  }, [recalcularCenter]);

  // //atualizar paginação
  // const updatePagination = useCallback(() => {
  //   if (fundoRefs.current.length > 0 && divRef.current) {
  //     const novosIndices = [];

  //     fundoRefs.current.forEach((fundoRef, index) => {
  //       if (fundoRef) {
  //         const rect = fundoRef.getBoundingClientRect();
  //         const larguraFundo = fundoRef.offsetWidth;
  //         const larguraVisivel = Math.min(rect.right, divRef.current.getBoundingClientRect().right) - Math.max(rect.left, divRef.current.getBoundingClientRect().left);
  //         const porcentagemVisivel = (larguraVisivel / larguraFundo) * 100;

  //         if (porcentagemVisivel >= 70) {
  //           novosIndices.push(index);
  //         }
  //       }
  //     });
  //     setIndices(novosIndices);
  //   }
  // }, []);


  return (
    <Div ref={divRef}>
      <P>Temos novidades!</P>
      <Advertisements ref={advertisementsRef}>
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