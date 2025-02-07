import { Container } from "../../../components/container";
import { getSlug } from "../../../services/action/get-data";
import { SlugProps } from "../../../services/type/type";
import Link from "next/link";

export async function CardapioHeader() {
  const data: SlugProps = await getSlug();
  return (
    <header className="py-4 w-full fixed bg-white z-[999]">
      <Container>
        <div className="pt-20 flex justify-center gap-2 md:gap-5 text-white font-medium overflow-x-auto ">
          {data.objects.map((item) => (
            <Link
              key={item.slug}
              href={`/cardapio/${item.slug}`}
              className="bg-yellow-400 px-4 py-2 rounded text-sm md:text-base text-nowrap font-semibold"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}
