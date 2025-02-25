import Banner from "../components/Banner";

export default function LandingPage() {
  return (
    <div>
      <Banner
        imageUrl="images/taste.png"
        headline="Drinks with sparkle!"
        fineprint="Twinkle twinkle little star"
        linkTo="/my-favourites"
      />
      <Banner
        imageUrl="images/fav.png"
        headline="Can't decide?"
        fineprint="Let me decide for you..."
        linkTo="/random-drink"
      />
      <Banner
        imageUrl="images/browse.png"
        headline="Browse drinks"
        fineprint="Find your favourite!"
        linkTo="/browse"
      />
    </div>
  );
}
