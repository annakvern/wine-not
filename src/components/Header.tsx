import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>Sip Happens!</h1>
        <span>Sip happens, just sip it.</span>
      </div>

      <img src="/images/logo.png" alt="logo"></img>
    </StyledHeader>
  );
}
