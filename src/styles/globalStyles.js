import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Montserrat', sans-serif;
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: hidden;
  font-size: 16px;
  font-weight: 400;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

}
body {
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  margin: 0;
  padding: 0;
}
#root, #__next {
  isolation: isolate;
}
a {
     text-decoration: none;
}
button {
     outline: none;
     cursor: pointer;
}
`;
