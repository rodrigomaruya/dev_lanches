import { getHero } from "../../services/action/get-data";
import { HeroProps } from "../../services/type/heroType";
import Image from "next/image";
import Link from "next/link";

export async function Hero() {
  const data: HeroProps = await getHero();

  return (
    <section className="pt-20">
      <div className="relative w-full h-96 bg-black">
        <Image
          src={data.object.metadata.hero.banner.url}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          alt={data.object.title}
          fill={true}
          quality={100}
          className="object-cover opacity-60"
        />
        <div className="absolute text-white top-1/3 right-1/2 translate-x-1/2 flex flex-col justify-center items-center gap-2 w-full">
          <h1 className="font-bold text-3xl md:text-5xl text-slate-50">
            {data.object.metadata.hero.title}
          </h1>
          <Link
            href={data.object.metadata.hero.btn_url}
            className=" bg-green-500 px-4 py-2 rounded-md flex gap-2 items-center text-sm font-bold"
          >
            {data.object.metadata.hero.btn_title}
          </Link>
        </div>
      </div>
    </section>
  );
}
