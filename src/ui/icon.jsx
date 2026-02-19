const iconSizes = {
  xs: "0.937em",
  sm: "0.968em",
  md: "1em",
  lg: "1.033em",
  h6: "1.067em",
  h5: "1.138em",
  h4: "1.215em",
  h3: "1.296em",
  xl: "1.067em", // h6
  "2xl": "1.138em", // h5
  "3xl": "1.215em", // h4
  "4xl": "1.383em", // h3
};

const weights = {
  thin: 2.2,
  light: 2.4,
  regular: 2.8,
  medium: 3,
  semiBold: 3.2,
  bold: 3.4,
};

export const Icon = ({
  size,
  Icon,
  strokeWidth,
  marginValue = "0",
  color,
  fill = "none",
  filledIcon = false,
  ...props
}) => {
  return (
    <div
      {...props}
      style={{
        backgroundColor: "transparent",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 3,
        overflow: "visible",
        width: "max-content",
        ...props.style,
      }}
    >
      <Icon
        size={iconSizes[size] || size || "1em"}
        {...(!filledIcon && {
          fill: fill == "true" ? "currentColor" : fill == "transparent" ? "var(--icon-fill)" : fill,
        })}
        strokeWidth={weights[strokeWidth] || strokeWidth || (filledIcon ? 0 : 2.8)}
        color={color || "currentColor"}
        style={{ margin: marginValue }}
      />
    </div>
  );
};
