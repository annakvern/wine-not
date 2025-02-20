import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  padding: 1rem 4rem;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.colors.blueText};
  border: none;
  border-radius: 1rem;
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.header};
  }
`;
