import { css } from "styled-components";

const sizes = {
  sm: 640,
  md: 768,
  lg: 1024,
};

export const bk =
  (size) =>
  (...args) => css`
    @media (max-width: ${typeof size === "number" ? size : sizes[size]}px) {
      ${css(...args)}
    }
  `;

Object.keys(sizes).forEach((label) => {
  bk[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
});
