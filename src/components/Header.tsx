import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>Wine Not?</h1>
        <span>Wine Tasting for Darlings</span>
      </div>

      <img src="./images/logo.png" alt="logo"></img>
    </StyledHeader>
  );
}
