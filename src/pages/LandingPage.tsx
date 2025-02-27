import Banner from "../components/Banner";
import { StyledLandingPage } from "../components/styles/LandingPage.styled";

export default function LandingPage() {
  return (
    <StyledLandingPage>
      <Banner
        imageUrl="/images/taste.png"
        headline="Need sparkles!"
        fineprint="Twinkle twinkle little star"
        linkTo="/sparkles"
      />
      <Banner
        imageUrl="/images/fav.png"
        headline="Can't decide?"
        fineprint="Let me decide for you..."
        linkTo="/random-drink"
      />
      <Banner
        imageUrl="/images/browse.png"
        headline="Browse drinks"
        fineprint="Find your favourite!"
        linkTo="/browse"
      />
    </StyledLandingPage>
  );
}
