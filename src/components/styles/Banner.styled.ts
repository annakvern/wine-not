import styled from "styled-components";

export const StyledBanner = styled.div`
  display: flex;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.colors.creme};
  padding: 2rem;
  width: 980px;
  border-radius: 3rem;
  img {
    height: 200px;
    border-radius: 1rem;
  }

  h3 {
    padding: 2rem;
    margin: 0;
    font-family: "Abril fatface", serif;
    font-size: 3rem;
  }

  span {
    padding: 0 2rem;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;
