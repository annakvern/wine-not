import { PropsWithChildren } from "react";
import { StyledButton } from "./styles/Button.styled";
import { Link } from "react-router";

export default function Button(props: PropsWithChildren) {
  return (
    <Link to="/">
      <StyledButton>{props.children}</StyledButton>
    </Link>
  );
}
