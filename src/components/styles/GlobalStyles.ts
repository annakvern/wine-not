import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', 'sans-serif';
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.blueText};
}
`;
