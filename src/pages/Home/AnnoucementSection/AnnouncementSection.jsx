import {
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";
import {
  ContainerStyled,
  DivStyled,
  DivFundoImgStyled,
  ImgStyled,
  DivPaginationStyled,
  SpanStyled,
} from "./StylizedTags";
import ProductItem from "../../../components/Product/ProductItem&List/ProductItem";
import { CartContext } from "../../../contexts/CartContext";
import { useScrollX } from "../../../hooks/useScrollX";

const AnnouncementProducts = [
  {
    id: 105,
    discount: 10,
    url: "https://lojavirtual.urizun.com.br/image/cache/data/eftr/Img_ftr_rp_136501-580x580.JPG?version=20230512211921",
    url2: "https://i.pinimg.com/736x/99/9b/e7/999be7d41a28a1781a49dc5c7ab2a963.jpg",
    weight: "69 g",
    name: "Nissin cup nodles galinha caipira",
    price: "9,90",
  },
  {
    id: 108,
    discount: 17,
    url: "https://zaffari.vtexassets.com/arquivos/ids/246321/1078471-00.jpg?v=638422175350930000",
    url2: "https://i.pinimg.com/736x/91/98/39/919839cad01f2cd3cfe201d8332d98b5.jpg",
    weight: "1 kg",
    name: "Linguiça de frango aurora p/ churraco",
    price: "15,99",
  },
  {
    id: 104,
    discount: 12,
    url: "https://ibassets.com.br/ib.item.image.big/b-a8b9f3aba4e141b7b5afbc1eadd69e62.jpeg",
    url2: "https://i.pinimg.com/736x/63/3b/16/633b16299e2fa1f2223d6bd6ff6cf1eb.jpg",
    weight: "400 g",
    name: "Mistura para bolos finna sabor chocolate",
    price: "7,99",
  },
  {
    id: 106,
    discount: 20,
    url: "https://tiojorge.com.br/wp-content/uploads/2021/05/Arroz-branco-300x300.png",
    url2: "https://i.pinimg.com/736x/69/f1/d3/69f1d3cf3946afdab4edcd4fd98f1597.jpg",
    weight: "5 kg",
    name: "arroz branco tio jorge",
    price: "19,00",
  },
  {
    id: 109,
    discount: 18,
    url: "https://cortedeourocarnes.com.br/wp-content/uploads/2020/05/bife-ancho-1-600x450.jpg",
    url2: "https://i.pinimg.com/736x/f6/49/ea/f649ea6e0f7b6ad1ed26d25fa5ff0bf6.jpg",
    weight: "1kg",
    name: "Bife Bovino Ancho",
    price: "78,00",
  },
  {
    id: 107,
    discount: 30,
    url: "https://images.tcdn.com.br/img/img_prod/887622/refrigerante_fanta_laranja_lt_350ml_333_1_20201110145812.jpg",
    url2: "https://i.pinimg.com/736x/03/a4/75/03a475aaf5e64c564e7906a14c11a477.jpg",
    weight: "350 ml",
    name: "Refrigerante fanta laranja",
    price: "1,55",
  },
];

function AnnouncementSection({ wasResize }) {
  const { setLimitAdvertisements, advertisementsRef } =
    useContext(CartContext);

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

      let img_center = Math.ceil(AnnouncementProducts.length / 2);

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
        AnnouncementProducts.length * fundoWidth +
        gap * AnnouncementProducts.length +
        24; //largura de tdos os anuncios
      let limite = ContainerWidth - widtAllAds;
      setLimitAdvertisements(limite); //Limite de rolagem para anuncios
      let Initialcenter = 0;
      function obterLimites() {
        //numero impar de imagens
        if (AnnouncementProducts.length % 2 !== 0) {
          Initialcenter = (ContainerWidth - widtAllAds) / 2;
          if (window.innerWidth < 1370) {
            advertisementsRef.current.scrollLeft = Initialcenter * -1;
          } else {
            advertisementsRef.current.scrollLeft = 0;
          }
        } else {
          Initialcenter =
            (ContainerWidth - widtAllAds) / 2 - (fundoWidth / 2 + gap / 2);
          if (window.innerWidth < 1370) {
            advertisementsRef.current.scrollLeft = Initialcenter * -1;
          } else {
            advertisementsRef.current.scrollLeft = Initialcenter * -1 - 110;
          }
        }
      }
      obterLimites();
    }
  }, [advertisementsRef, setLimitAdvertisements]);

  //atualizar paginação
  const updatePagination = useCallback(() => {
    const images = AnnouncementProducts.map((_, i) =>
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

    el.addEventListener("touchmove", handleMove);
    el.addEventListener("mousemove", handleMove);

    return () => {
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("mousemove", handleMove);
    };
  }, [updatePagination, advertisementsRef]);

  return (
    <ContainerStyled ref={divRef}>
      <DivStyled ref={advertisementsRef}>
        {AnnouncementProducts.map((object, index) => (
          <DivFundoImgStyled
            key={index}
            ref={(el) => (fundoRefs.current[index] = el)}
          >
            <ImgStyled
              src={object.url2}
              alt={`Imagem de anúncio ${index + 1}`}
              id={`anun ${index}`}
            />
            <ProductItem
              variant={"announcement"}
              key={`${object.id}-${object.cat_id}`}
              product={object}
            />
          </DivFundoImgStyled>
        ))}
      </DivStyled>
      <DivPaginationStyled>
        {AnnouncementProducts.map((_, i) => (
          <SpanStyled key={i} $atual={centralIndices.includes(i)}></SpanStyled>
        ))}
      </DivPaginationStyled>
    </ContainerStyled>
  );
}

export default AnnouncementSection;
