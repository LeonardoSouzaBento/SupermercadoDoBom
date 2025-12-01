import { ButtonLoginStyled, DivSpanPStyled, PLoginStyled, DivSpanStyled, SpanButtonStyled } from "../StylizedTags";

const ButtonLoginEmail = ({ setSeeEmailForm }) => {
  return (
    <ButtonLoginStyled
      onClick={() => {
        setSeeEmailForm(true);
      }}
    >
      <DivSpanPStyled>
        <PLoginStyled>Login com E-mail</PLoginStyled>
        <DivSpanStyled>
          <SpanButtonStyled className="material-symbols-rounded">mail</SpanButtonStyled>
        </DivSpanStyled>
      </DivSpanPStyled>
    </ButtonLoginStyled>
  );
};

export default ButtonLoginEmail;
