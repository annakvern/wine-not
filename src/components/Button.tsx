import { PropsWithChildren } from "react";
import { StyledButton } from "./styles/Button.styled";
import { Link, useNavigate } from "react-router";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (children === "Back to home") {
    return (
      <Link to="/">
        <StyledButton>{children}</StyledButton>
      </Link>
    );
  }
  if (children === "Go back") {
    return <StyledButton onClick={goBack}>{children}</StyledButton>;
  }

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
