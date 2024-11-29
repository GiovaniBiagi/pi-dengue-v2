import { Card } from "./components/card";
import { breedingSites } from "./constants";

export const BreedingSitesSection = () => {
  return (
    <section className="p-4" id="breeding-sites">
      <h2 className="my-2 text-2xl font-bold">Como evitar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {breedingSites.map((site) => (
          <Card key={site.title} title={site.title} image={site.image} />
        ))}
      </div>
    </section>
  );
};
