import Banner from "../components/Banner";

export default function LandingPage() {
  return (
    <div>
      <Banner
        imageUrl="images/bubbles.jpg"
        headline="Bubbly Wine Tasting"
        fineprint="Invite your friends!"
      />
      <Banner
        imageUrl="images/red-white.jpg"
        headline="My favourite wines"
        fineprint="Enjoy!"
      />
    </div>
  );
}
