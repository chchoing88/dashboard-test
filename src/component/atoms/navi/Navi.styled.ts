export const styleNaviLink = {
  // alignSelf: "stretch",
  bg: "#282c34",
  a: {
    display: "flex",
    height: "100%",
    px: 3,
    alignItems: "center",
    fontSize: 2,
    color: "#aaa",
    boxSizing: "border-box"
  }
};

// type StyleLinkProps = {
//   isActive: boolean;
// };

// const StyleLink = ({ isActive }: StyleLinkProps) => css`
//   color: ${isActive ? "red" : "black"};
// `;

// export const WrappedLink = styled.span<StyleLinkProps>`
//   a {
//     ${StyleLink}
//   }
// `;

// const StyleLink = system({
//   naviColor: {
//     property: "color",
//     scale: "naviColor",
//     transform: (value: boolean, scale) => {
//       if (scale instanceof Array) {
//         return value ? scale[1] : scale[0];
//       }
//     },
//     defaultScale: ["black", "red"]
//   }
// });

// export const WrappedLink = styled.span<StyleLinkProps>`
//   a {
//     ${StyleLink}
//   }
// `;
