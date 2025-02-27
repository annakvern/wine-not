import styled from "styled-components";

export const StyledDrinkDetailsPage = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-family: "Abril fatface", "serif";
    font-size: 2rem;
  }
  img {
    max-width: 500px;
    border-radius: 1rem;
  }
  .detail-container {
    background-color: ${({ theme }) => theme.colors.creme};
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .drink-details {
    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      max-width: 300px;
    }
  }
`;
