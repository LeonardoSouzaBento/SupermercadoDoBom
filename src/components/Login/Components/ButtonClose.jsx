import { DivSpanCloseStyled, SpanCloseStyled } from "../StylizedTags";

const ButtonClose = ({ setSeeLogin }) => {
  return (
    <DivSpanCloseStyled
      onClick={() => {
        setSeeLogin(false);
      }}
    >
      <SpanCloseStyled className="material-symbols-rounded">close</SpanCloseStyled>
    </DivSpanCloseStyled>
  );
};

export default ButtonClose;