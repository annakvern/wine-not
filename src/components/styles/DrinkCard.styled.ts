import styled from "styled-components";

export const StyledDrinkCard = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.creme};
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 21rem;

  img {
    height: 20rem;
    padding-right: 2rem;
  }

  span {
    padding-right: 1rem;
    font-size: 0.8rem;
  }

  &:hover {
    border: 3px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.green};
  }
`;
