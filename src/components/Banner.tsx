import { StyledBanner } from "./styles/Banner.styled";

interface Props {
  headline: string;
  imageUrl: string;
  fineprint: string;
}
export default function Banner(props: Props) {
  return (
    <StyledBanner>
      <img src={props.imageUrl} alt={props.headline}></img>
      <div>
        <h3>{props.headline}</h3>
        <span>{props.fineprint}</span>
      </div>
    </StyledBanner>
  );
}
