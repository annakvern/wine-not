import { StyledWineCard } from "./styles/WineCard.styled";

interface Props {
  imageUrl: string;
  title: string;
  type: string;
  year: number;
  origin: string;
  price: number;
  size: number;
  volume: number;
  id: number;
}
export default function WineCard(props: Props) {
  return (
    <StyledWineCard>
      <img src={props.imageUrl} alt={props.title}></img>
      <div>
        <h3>{props.title}</h3>
        <p>
          {props.type}, {props.year}
        </p>
        <p>{props.origin}</p>
        <div>
          <span>{props.price}:-</span>
          <span>{props.size}ml</span>
          <span>{props.volume} % vol.</span>
          <span>Nr {props.id}</span>
        </div>
      </div>
    </StyledWineCard>
  );
}
