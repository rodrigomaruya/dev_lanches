import { Container } from "../../../components/container";
import { getItemBySlug } from "../../../services/action/get-data";
import { SlugProps } from "../../../services/type/slugType";
import { Card } from "../components/card";

export default async function PratoFeito({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolveParams = await params;
  const { slug } = resolveParams;

  const { objects }: SlugProps = await getItemBySlug(slug);

  return (
    <main className="pt-40 w-full bg-gray-50 min-h-screen">
      <Container>
        <h1 className=" text-black font-bold text-center text-2xl py-3">
          {objects[0].title}
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 w-full my-8 gap-4">
          {objects[0].metadata.products.map((item) => (
            <Card
              key={item.product_title}
              url={item.productbanner.url}
              price={item.price}
              product_title={item.product_title}
              description={item.description}
              takeout={item.takeout}
            />
          ))}
        </section>
      </Container>
    </main>
  );
}
