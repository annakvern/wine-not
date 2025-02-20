import Banner from "../components/Banner";

export default function LandingPage() {
  return (
    <div>
      <Banner
        imageUrl="images/taste.png"
        headline="Bubbly Wine Tasting"
        fineprint="Invite your friends!"
        linkTo="/"
      />
      <Banner
        imageUrl="images/fav.png"
        headline="My favourite wines"
        fineprint="Enjoy!"
        linkTo="/my-favourites"
      />
      <Banner
        imageUrl="images/browse.png"
        headline="Browse nice wines"
        fineprint="Find your favourite!"
        linkTo="/browse"
      />
    </div>
  );
}
