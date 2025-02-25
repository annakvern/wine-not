import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body, #root {
  font-family: 'Lato', 'sans-serif';
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.blueText};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
}

main {
  flex-grow: 1;
  display: flex;
  justify-content: center; 
  align-items: flex-start;

  
 
}
`;
