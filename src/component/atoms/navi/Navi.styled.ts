export const styleNaviLink = { a: { color: "inherit" } };

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
