import {
  DivSpanCloseStyled,
  SpanCloseStyled,
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
  SpanButtonsStyled,
  PQuantFullStyled,
  PAddStyled,
  DivSubStyled,
  DivCoverSubStyled,
  PSubStyled,
} from "./StylizedTags";

export const ButtonClose = ({ seeSpanClose, handleClickClose }) => {
  return (
    <DivSpanCloseStyled
      onPointerUp={handleClickClose}
      style={{ display: seeSpanClose ? "flex" : "none" }}
    >
      <SpanCloseStyled className="material-symbols-rounded">
        close
      </SpanCloseStyled>

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
            <SpanButtonsStyled className="material-symbols-rounded">
              remove
            </SpanButtonsStyled>
          </DivButtonsStyled>

          <DivButtonsStyled>
            <PQuantFullStyled>{quantity}</PQuantFullStyled>
          </DivButtonsStyled>

          <DivButtonsStyled onPointerUp={handlePointerUpButtons}>
            <SpanButtonsStyled className="material-symbols-rounded">
              add
            </SpanButtonsStyled>
          </DivButtonsStyled>
        </>
      )}
      {quantity == 0 && (
        <DivButtonsStyled
          style={{ width: "100%" }}
          onPointerUp={handlePointerUpAdd}
        >
          <PAddStyled>Adicionar</PAddStyled>
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
