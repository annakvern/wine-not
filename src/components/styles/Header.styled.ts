import styled from "styled-components";

export const StyledHeader = styled.header`
  font-family: "Abril fatface", "serif";
  background-color: ${({ theme }) => theme.colors.header};
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #3c6ca8;
    font-size: 5rem;
    margin: 0;
  }
  img {
    width: 100px;
    height: 150px;
  }
  span {
    font-family: "Lato", "sans-serif";
    font-size: 1.5rem;
    font-weight: bold;
    color: #efe7dd;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 2.8rem;
    }
    span {
      font-size: 1rem;
    }
    img {
      width: 75px;
      height: 100px;
    }
  }
`;
