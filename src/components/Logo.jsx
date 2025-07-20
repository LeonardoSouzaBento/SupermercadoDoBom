import styled, { css } from "styled-components";

export const DivLogo = styled.div`
  height: 40px;
  width: 40px;
  background-color: #d5343a;
  border-radius: 6px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 0.9;
  ${(props) =>
    (props.$local === "cart" || props.$local === "boxAddress") &&
    css`
      top: 8px;
      left: 8px;
    `};
`;

export const SpanLogo = styled.span`
  color: white;
  font-weight: 400;
  font-size: 28px;
  padding-top: 1px;
`;

const Logo = ({ local }) => {
  return (
    <DivLogo $local={local}>
      <SpanLogo className="material-symbols-rounded">handshake</SpanLogo>
    </DivLogo>
  );
};

export default Logo;
