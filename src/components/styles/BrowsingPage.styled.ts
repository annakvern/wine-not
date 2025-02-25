import styled from "styled-components";

export const StyledBrowsingPage = styled.div`
  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      height: 2rem;
      width: 100%;
      margin-top: 1rem;
      border: 0.5px solid ${({ theme }) => theme.colors.blueText};
      border-radius: 0.5rem;
      padding: 0.5rem;
    }

    div {
      display: flex;
      margin-top: 0.5rem;

      input {
        margin: 0 1rem 0 0;
        align-self: center;
      }

      label {
        font-size: 1rem;
        align-self: center;
      }
    }

    button {
      background-color: ${({ theme }) => theme.colors.blueText};
      color: white;
      border: none;
      border-radius: 0.5rem;
      padding: 0.5rem;
      margin: 1rem 0;
      width: 100px;

      &:hover {
        border: 2px;
        border-style: solid;
        background-color: ${({ theme }) => theme.colors.green};

        border-color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;
