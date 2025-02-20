import { StyledBanner } from "./styles/Banner.styled";
import { StyledLink } from "./styles/Banner.styled";

interface Props {
  headline: string;
  imageUrl: string;
  fineprint: string;
  linkTo: string;
}

export default function Banner(props: Props) {
  return (
    <StyledLink to={props.linkTo}>
      <StyledBanner>
        <img src={props.imageUrl} alt={props.headline}></img>
        <div>
          <h3>{props.headline}</h3>
          <span>{props.fineprint}</span>
        </div>
      </StyledBanner>
    </StyledLink>
  );
}
