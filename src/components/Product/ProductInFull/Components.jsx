import {
  DivSpanCloseStyled,
  SpanDropDownStyled,
  DivImgStyled,
  ImgStyled,
  DivWeightStyled,
  PWeightStyled,
  DivDiscountStyled,
  DivNameProdStyled,
  PNameProdStyled,
  DivPriceStyled,
  PPriceStyled,
  DivQuantFullStyled,
  DivButtonsStyled,
  PQuantFullStyled,
  PAddStyled,
  DivSubStyled,
  DivCoverSubStyled,
  PSubStyled,
} from "./StylizedTags";
import { PButtonBase } from "../../GenericStylizedTags";

export const ButtonClose = ({ seeSpanClose, handleClickClose }) => {
  return (
    <DivSpanCloseStyled
      onPointerUp={handleClickClose}
      style={{ display: seeSpanClose ? "flex" : "none" }}
    >
      <span className="material-symbols-rounded">
        close
      </span>

      <SpanDropDownStyled />
    </DivSpanCloseStyled>
  );
};

export const ProductData = ({ dataProductFull }) => {
  return (
    <>
      <DivImgStyled>
        <ImgStyled src={dataProductFull.url} alt="Imagem do Produto" />

        {dataProductFull.weight != "" && dataProductFull.weight != null && (
          <DivWeightStyled>
            <PWeightStyled>{dataProductFull.weight}</PWeightStyled>
          </DivWeightStyled>
        )}

        {dataProductFull.discount != "" && dataProductFull.discount != null && (
          <DivDiscountStyled>
            <PWeightStyled style={{ color: "white" }}>
              -{dataProductFull.discount}%
            </PWeightStyled>
          </DivDiscountStyled>
        )}
      </DivImgStyled>

      <DivNameProdStyled>
        <PNameProdStyled>{dataProductFull.name}</PNameProdStyled>
      </DivNameProdStyled>

      <DivPriceStyled>
        <PPriceStyled>R$ {dataProductFull.price}</PPriceStyled>
      </DivPriceStyled>
    </>
  );
};

export const ButtonAdd = ({
  quantity,
  handlePointerDownDiv,
  handlePointerMoveDiv,
  handlePointerUpAdd,
  handlePointerUpButtons,
}) => {
  return (
    <DivQuantFullStyled
      onPointerDown={handlePointerDownDiv}
      onPointerMove={handlePointerMoveDiv}
    >
      {quantity > 0 && (
        <>
          <DivButtonsStyled
            onPointerUp={(e) => {
              handlePointerUpButtons(e, "fewer");
            }}
          >
            <span className="material-symbols-rounded">
              remove
            </span>
          </DivButtonsStyled>

          <DivButtonsStyled>
            <PQuantFullStyled>{quantity}</PQuantFullStyled>
          </DivButtonsStyled>

          <DivButtonsStyled onPointerUp={handlePointerUpButtons}>
            <span className="material-symbols-rounded">
              add
            </span>
          </DivButtonsStyled>
        </>
      )}
      {quantity == 0 && (
        <DivButtonsStyled
          style={{ width: "100%" }}
          onPointerUp={handlePointerUpAdd}
        >
          <PButtonBase>Adicionar</PButtonBase>
        </DivButtonsStyled>
      )}
    </DivQuantFullStyled>
  );
};

export const Subtotal = ({ subtotal }) => {
  return (
    <DivSubStyled>
      {subtotal == "0,00" && (
        <DivCoverSubStyled>
          <PSubStyled>Subtotal:</PSubStyled>
        </DivCoverSubStyled>
      )}
      <PSubStyled>Subtotal:</PSubStyled>
      <PSubStyled>R$ {subtotal}</PSubStyled>
    </DivSubStyled>
  );
};

