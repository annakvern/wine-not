import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>Wine Not?</h1>
        <span>Wine Tasting for Winies</span>
      </div>

      <img src="../public/images/logo.png" alt="logo"></img>
    </StyledHeader>
  );
}
