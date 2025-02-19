import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-family: "Lato", "sans-serif";
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100vw;
  color: ${({ theme }) => theme.colors.cremeText};
`;
