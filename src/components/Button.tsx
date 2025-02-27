import { PropsWithChildren } from "react";
import { StyledButton } from "./styles/Button.styled";
import { Link, useNavigate } from "react-router";

export default function Button(props: PropsWithChildren) {
  const reloadPage = () => {
    window.location.reload();
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (props.children === "Back to home") {
    return (
      <Link to="/">
        <StyledButton>{props.children}</StyledButton>
      </Link>
    );
  }
  if (props.children === "Go back") {
    return <StyledButton onClick={goBack}>{props.children}</StyledButton>;
  }

  return <StyledButton onClick={reloadPage}>{props.children}</StyledButton>;
}
