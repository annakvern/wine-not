import styled from "styled-components";

export const StyledBanner = styled.div`
  display: flex;
  margin: 4rem 0;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 3rem;
  width: 980px;
  border-radius: 3rem;
  img {
    height: 300px;
    border-radius: 1rem;
  }

  h3 {
    padding: 2rem;
    margin: 0;
    font-family: "Abril fatface", serif;
    font-size: 4rem;
  }

  span {
    padding: 0 2rem;
    font-size: 2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;
