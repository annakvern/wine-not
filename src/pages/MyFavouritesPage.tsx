import WineCard from "../components/WineCard";
import { StyledMyFavouritesPage } from "../components/styles/MyFavouritesPage.styled";
import { Container } from "../components/styles/Container.styled";

export default function MyFavouritesPage() {
  return (
    <StyledMyFavouritesPage>
      <section>
        <h2> My favourite whites</h2>
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
      <section>
        <h2>My favourite reds</h2>
        <Container>
          <WineCard
            imageUrl="https://product-cdn.systembolaget.se/productimages/28073432/28073432_800.webp"
            title="Montebruna Barbera d'Asti"
            year={2022}
            origin="Italy"
            price={229}
            size={750}
            volume={15}
            id={94152}
          />
          <WineCard
            imageUrl="https://product-cdn.systembolaget.se/productimages/23458751/23458751_800.webp"
            title="Three Finger Jack"
            year={2022}
            origin="USA, California"
            price={154}
            size={750}
            volume={14.5}
            id={3528}
          />
          <WineCard
            imageUrl="https://product-cdn.systembolaget.se/productimages/16864/16864_800.webp"
            title="Masi Costasera"
            year={2019}
            origin="Italy"
            price={349}
            size={750}
            volume={15}
            id={2345}
          />
        </Container>
      </section>
    </StyledMyFavouritesPage>
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
