import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";
import {
  ContainerStyled,
  PStyled,
  DivStyled,
  DivFundoImgStyled,
  ImgStyled,
  DivPaginationStyled,
  SpanStyled
} from "./ComponentsAnnouncements";
import { CartContext } from "../../CartContext";
import { useScrollX } from "../../../hooks/useScrollX";

let imageUrls = [
  "https://i.pinimg.com/736x/99/9b/e7/999be7d41a28a1781a49dc5c7ab2a963.jpg", //cup
  "https://i.pinimg.com/736x/91/98/39/919839cad01f2cd3cfe201d8332d98b5.jpg", //linguica
  "https://i.pinimg.com/736x/63/3b/16/633b16299e2fa1f2223d6bd6ff6cf1eb.jpg", //farinha
  "https://i.pinimg.com/736x/69/f1/d3/69f1d3cf3946afdab4edcd4fd98f1597.jpg", //arroz
  "https://i.pinimg.com/736x/f6/49/ea/f649ea6e0f7b6ad1ed26d25fa5ff0bf6.jpg", //carne
  "https://i.pinimg.com/736x/03/a4/75/03a475aaf5e64c564e7906a14c11a477.jpg", //fanta
];

function AnnouncementSection({wasResize}) {
  const { setLimitAdvertisements, advertisementsRef } = useContext(CartContext);

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
    if (
      divRef.current &&
      fundoRefs.current.length > 0 &&
      advertisementsRef.current
    ) {
      const ContainerWidth = divRef.current.offsetWidth; //largura container pai
      const fundoWidth = fundoRefs.current[0]?.offsetWidth || 0; //largura da imagem
      const gap = parseFloat(getComputedStyle(advertisementsRef.current).gap);
      
      let img_center = Math.ceil(imageUrls.length / 2);

      const visibleRatio = ContainerWidth / (fundoWidth + gap);
      const anun_visible = visibleRatio > 2.6 ? 3 : 1;

      let indices = [img_center];
      if (anun_visible === 3) {
        indices = [img_center - 1, img_center, img_center + 1];
        setCentralIndices(indices);
      } else {
        setCentralIndices(indices);
      }

      let widtAllAds =
        imageUrls.length * fundoWidth + gap * (imageUrls.length) + 24; //largura de tdos os anuncios
      let limite = ContainerWidth - widtAllAds;
      setLimitAdvertisements(limite); //Limite de rolagem para anuncios
      let Initialcenter = 0;
      function obterLimites() {
        if (imageUrls.length % 2 === 0) {
          Initialcenter =
            (ContainerWidth - widtAllAds) / 2 - (fundoWidth / 2 + gap / 2);
        } else {
          Initialcenter = (ContainerWidth - widtAllAds) / 2;
        }
      }
      obterLimites();
      advertisementsRef.current.scrollLeft = Initialcenter * -1;
    }
  }, []);

  useEffect(() => {
    recalcularCenter();
    updatePagination();
  }, []);

  useEffect(() => {
    recalcularCenter();
    updatePagination();
  }, [wasResize]);

  //atualizar paginação
  const updatePagination = useCallback(() => {
    const images = imageUrls.map((_, i) =>
      document.getElementById(`anun ${i}`)
    );
    let with_img = images[0].offsetWidth;
    let visible_indices = [];

    images.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      const visible_widths =
        Math.min(rect.right, windowWidthRef.current) - Math.max(rect.left, 0);
      const visible_percentage = (visible_widths / with_img) * 100;

      if (visible_percentage >= 66) {
        visible_indices.push(index);
      }
    });
    setCentralIndices(visible_indices);
  }, []);

  //evento de toque para detectar paginação
  useEffect(() => {
    const el = advertisementsRef.current;
    if (!el) return;

    const handleMove = () => {
      updatePagination();
    };

    el.addEventListener("touchmove", handleMove);
    el.addEventListener("mousemove", handleMove);

    return () => {
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("mousemove", handleMove);
    };
  }, [updatePagination]);

  return (
    <ContainerStyled ref={divRef}>
      <PStyled>Maiores ofertas!</PStyled>
      <DivStyled ref={advertisementsRef}>
        {imageUrls.map((url, index) => (
          <DivFundoImgStyled
            key={index}
            $bg={url}
            ref={(el) => (fundoRefs.current[index] = el)}
          >
            <ImgStyled
              src={url}
              alt={`Imagem de anúncio ${index + 1}`}
              id={`anun ${index}`}
            />
          </DivFundoImgStyled>
        ))}
      </DivStyled>
      <DivPaginationStyled>
        {imageUrls.map((_, i) => (
          <SpanStyled key={i} $atual={centralIndices.includes(i)}></SpanStyled>
        ))}
      </DivPaginationStyled>
    </ContainerStyled>
  );
}

export default AnnouncementSection;
