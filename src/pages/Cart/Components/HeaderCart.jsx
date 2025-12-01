import {
  HeaderH2Styled,
  DivSpanDeleteStyled,
  H2Styled
} from "../StylizedTags.jsx";
import {Package} from "lucide-react"

const HeaderCart = ({ setSeeCancelDialog }) => {
  return (
    <>
      <HeaderH2Styled $cart={true}>
        {/* <SpanH2Styled className="material-symbols-rounded" $cart={true}>
          package_2
        </SpanH2Styled> */}
        <Package size={20} strokeWidth={2.6} color="var(--purple)"/>
        <H2Styled $products={true}>Produtos</H2Styled>
      </HeaderH2Styled>

      <DivSpanDeleteStyled
        onClick={() => {
          setSeeCancelDialog(true);
        }}
      >
        <span className="material-symbols-rounded">delete</span>
      </DivSpanDeleteStyled>
    </>
  );
};

export default HeaderCart;

