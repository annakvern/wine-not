import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-family: "Lato", "sans-serif";
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem 0;
  width: 100%;

  color: ${({ theme }) => theme.colors.creme};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
