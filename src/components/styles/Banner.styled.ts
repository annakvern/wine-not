import styled from "styled-components";
import { Link } from "react-router";

export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.colors.creme};
  padding: 1rem;
  width: 100%;
  height: auto;
  border-radius: 3rem;

  img {
    max-height: 200px;
    width: 100%;
    max-width: 300px;
    border-radius: 1rem;
  }

  h3 {
    padding: 2rem;
    margin: 0;
    font-family: "Abril fatface", serif;
    font-size: 2.5rem;
  }

  span {
    padding: 0 2rem;
    font-size: 1.2rem;
  }

  &:hover {
    border: 3px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.green};
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 2.5rem;
    }
    span {
      font-size: 0.9rem;
    }
    img {
      width: 150px;
      height: auto;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;
