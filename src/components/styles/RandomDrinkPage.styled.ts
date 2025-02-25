import styled from "styled-components";

export const StyledRandomDrinkPage = styled.div`
  background-color: ${({ theme }) => theme.colors.creme};
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 70%;
  width: auto;
  height: auto;
  margin: 1rem 0 2rem 0;
  flex-grow: 0;

  p {
    max-width: 500px;
  }

  img {
    margin-top: 1rem;
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 1rem;
  }
`;
