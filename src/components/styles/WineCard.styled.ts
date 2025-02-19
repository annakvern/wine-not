import styled from "styled-components";

export const StyledWineCard = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.creme};
  padding: 1rem;
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
`;
