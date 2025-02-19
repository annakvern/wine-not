import WineCard from "../components/WineCard";

export default function ExploreWinesPage() {
  return (
    <div>
      <section>
        <h2> My favourite wines right now</h2>
        <div>
          <WineCard
            imageUrl="https://product-cdn.systembolaget.se/productimages/42953831/42953831_800.png"
            title="Nanit Orange"
            type="Organic"
            year={2023}
            origin="Spain"
            price={119}
            size={750}
            volume={13.5}
            id={2408}
          />
        </div>
      </section>
    </div>
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
