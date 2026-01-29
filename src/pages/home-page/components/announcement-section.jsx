import ProductItem from '@components/product-list/product-item';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import { announcements } from '@data/announcements';
import { useScrollX } from '@hooks/useScrollX';
import { ContainerStyled, AnnouncementStyled } from '@pages/home-page/ui/annoucement-section/index';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';

function AnnouncementSection({ wasResize }) {
  const { setLimitAdvertisements, advertisementsRef } = useContext(HomeDivsContext);

  useScrollX();

  //Caucular os índices centrais
  const divRef = useRef(null);
  const fundoRefs = useRef([]);
  // const timeoutId = useRef(null);
  const [centralIndices, setCentralIndices] = useState([]);
  const windowWidthRef = useRef(null);

  //calcular centro com resize obter o limite / iniciar a paginação
  const recalcularCenter = useCallback(() => {
    //centro e limite
    windowWidthRef.current = window.innerWidth;
    if (divRef.current && fundoRefs.current.length > 0 && advertisementsRef.current) {
      const containerWidth = divRef.current.offsetWidth; //largura container pai
      const marginContainer = parseFloat(getComputedStyle(divRef.current).marginLeft) * 2;

      const fundoWidth = fundoRefs.current[0]?.offsetWidth || 0; //largura da imagem
      const gap = parseFloat(getComputedStyle(advertisementsRef.current).gap);

      let img_center = Math.ceil(announcements.length / 2);

      const visibleRatio = containerWidth / (fundoWidth + gap);
      const anun_visible = visibleRatio > 2.6 ? 3 : 1;

      let indices = [img_center];
      if (anun_visible === 3) {
        indices = [img_center - 1, img_center, img_center + 1];
        setCentralIndices(indices);
      } else {
        setCentralIndices(indices);
      }

      let widtAllAds =
        announcements.length * fundoWidth + gap * (announcements.length - 1) + 24 + marginContainer; // 24 de paddings laterais da div rolavel

      let limite = containerWidth - widtAllAds;
      setLimitAdvertisements(limite); //Limite de rolagem para anuncios
      let initialcenter = 0;
      function centralize() {
        //numero impar de imagens
        if (announcements.length % 2 !== 0) {
          initialcenter = (widtAllAds - containerWidth) / 2;
          if (window.innerWidth < 1201) {
            //imagens ainda escondidas
            advertisementsRef.current.scrollLeft = initialcenter;
          } else {
            advertisementsRef.current.scrollLeft = 0;
          }
        }
        //numero par de imagens
        else {
          initialcenter = (containerWidth - widtAllAds) / 2 - (fundoWidth / 2 + gap / 2);
          if (window.innerWidth < 1201) {
            advertisementsRef.current.scrollLeft = initialcenter;
          } else {
            advertisementsRef.current.scrollLeft = initialcenter - fundoWidth; //metade da imagem
          }
        }
      }
      centralize();
    }
  }, [advertisementsRef, setLimitAdvertisements]);

  //atualizar paginação
  const updatePagination = useCallback(() => {
    const images = announcements.map((_, i) => document.getElementById(`anun ${i}`));
    let with_img = images[0].offsetWidth;
    let visible_indices = [];

    images.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      const visible_widths = Math.min(rect.right, windowWidthRef.current) - Math.max(rect.left, 0);
      const visible_percentage = (visible_widths / with_img) * 100;

      if (visible_percentage >= 66) {
        visible_indices.push(index);
      }
    });
    setCentralIndices(visible_indices);
  }, []);

  useEffect(() => {
    recalcularCenter();
    updatePagination();
  }, [recalcularCenter, updatePagination]);

  useEffect(() => {
    recalcularCenter();
    updatePagination();
  }, [wasResize, recalcularCenter, updatePagination]);

  //evento de toque para detectar paginação
  useEffect(() => {
    const el = advertisementsRef.current;
    if (!el) return;

    const handleMove = () => {
      updatePagination();
    };

    el.addEventListener('touchmove', handleMove);
    el.addEventListener('mousemove', handleMove);

    return () => {
      el.removeEventListener('touchmove', handleMove);
      el.removeEventListener('mousemove', handleMove);
    };
  }, [updatePagination, advertisementsRef]);

  return (
    <ContainerStyled ref={divRef}>
      <div>
        <h3>Maiores promoções!</h3>
      </div>
      <AnnouncementStyled ref={advertisementsRef} $odd={announcements.length % 2 !== 0}>
        {announcements.map((object, index) => (
          <div key={index} ref={(el) => (fundoRefs.current[index] = el)}>
            <img src={object.url2} alt={`Imagem de anúncio ${index + 1}`} id={`anun ${index}`} />
            <ProductItem
              variant={'announcement'}
              key={`${object.id}-${object.cat_id}`}
              product={object}
            />
          </div>
        ))}
      </AnnouncementStyled>
      <div>
        {announcements.map((_, i) => (
          <span
            key={i}
            style={{
              backgroundColor: centralIndices.includes(i)
                ? 'hsla(232, 15%, 42%, 1.00)'
                : 'hsla(231, 16%, 61%, 1)',
            }}
          />
        ))}
      </div>
    </ContainerStyled>
  );
}

export default AnnouncementSection;

