import WineCard from "../components/WineCard";
import { StyledExploreWinesPage } from "../components/styles/ExploreWinesPage.styled";
import { Container } from "../components/styles/Container.styled";

export default function ExploreWinesPage() {
  return (
    <StyledExploreWinesPage>
      <section>
        <h2> My favourite wines right now</h2>
        <Container>
          <WineCard
            imageUrl="https://product-cdn.systembolaget.se/productimages/42953831/42953831_800.png"
            title="Nanit Orange"
            year={2023}
            origin="Spain"
            price={119}
            size={750}
            volume={13.5}
            id={2408}
          />
          <WineCard
            imageUrl="https://product-cdn.systembolaget.se/productimages/24504505/24504505_800.png"
            title="Bread & Butter"
            year={2022}
            origin="USA, California"
            price={169}
            size={750}
            volume={13.5}
            id={79280}
          />
          <WineCard
            imageUrl="https://product-cdn.systembolaget.se/productimages/24625063/24625063_800.png"
            title="YOKO"
            year={2023}
            origin="Spain"
            price={135}
            size={750}
            volume={12}
            id={52967}
          />
        </Container>
      </section>
    </StyledExploreWinesPage>
  );
}

// imageUrl: string;
// title: string;
// type: string;
// year: number;
// country: string;
// price: number;
// size: number;
// volume: number;
// id: number;
