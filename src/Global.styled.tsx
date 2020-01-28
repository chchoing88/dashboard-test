import { css } from "@emotion/core";

export const GlobalStyle = css`
  body,
  html {
    height: 100%;
  }
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  textarea,
  p,
  blockquote,
  th,
  td,
  input,
  select,
  button {
    margin: 0;
    padding: 0;
  }
  fieldset,
  img {
    border: 0 none;
  }
  dl,
  ul,
  ol,
  menu,
  li {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  input,
  select,
  textarea,
  button {
    vertical-align: middle;
    font-size: 100%;
  }
  button {
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    -webkit-text-size-adjust: none;
  } /* 뷰포트 변환시 폰트크기 자동확대 방지. */
  input:checked[type="checkbox"] {
    background-color: #666;
    -webkit-appearance: checkbox;
  }
  input[type="text"],
  input[type="password"],
  input[type="submit"],
  input[type="search"],
  input[type="tel"],
  input[type="email"],
  html input[type="button"],
  input[type="reset"] {
    -webkit-appearance: none;
    border-radius: 0;
  }
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  body {
    background: #fff;
  }
  body,
  th,
  td,
  input,
  select,
  textarea,
  button {
    font-size: 14px;
    line-height: 1.5;
    font-family: "Malgun Gothic", "맑은 고딕", sans-serif;
    color: #333;
  } /* color값은 디자인가이드에 맞게사용 */
  a {
    color: #333;
    text-decoration: none;
  }
  a:active,
  a:hover {
    text-decoration: none;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }
  #root {
    height: 100%;
  }
`;
