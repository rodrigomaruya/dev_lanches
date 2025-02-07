import { getAbout } from "../../services/action/get-data";
import { AboutProps } from "../../services/type/about";

export async function About() {
  const data: AboutProps = await getAbout();

  return (
    <section className="flex flex-col py-2">
      <div className="md:flex-1 px-2 h-full">
        <h2 className="text-center py-2 text-2xl md:text-4xl leading-8 md:leading-normal font-semibold">
          {data.object.metadata.about.title}
        </h2>

        <p
          className="leading-relaxed "
          dangerouslySetInnerHTML={{
            __html: data.object.metadata.about.description.replace(
              /\n/g,
              "<br />"
            ),
          }}
        ></p>
      </div>
      <section className="flex flex-col items-center justify-center py-4">
        <p className="text-red-500">
          {data.object.metadata.opening_hours.date}
        </p>
        <p className="text-red-500">
          {data.object.metadata.opening_hours.time}
        </p>
      </section>
      <section className="w-full rounded-md">
        <iframe
          src={data.object.metadata.opening_hours.map}
          width={600}
          height={450}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin"
          className="w-full rounded-md"
        ></iframe>
      </section>
    </section>
  );
}
