import { notFound } from "next/navigation";

type Props = {
  searchParams?: Article;
};

export default function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {searchParams.image && (
          <img
            src={searchParams.image}
            alt={searchParams.title}
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {searchParams.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              By:{" "}
              {searchParams.author === "null" || null
                ? "unknwon"
                : searchParams.author}
            </h2>
            <h2 className="font-bold pl-4">Source: {searchParams.source}</h2>
            <p className="pl-4">{searchParams.published_at}</p>
          </div>

          <p className="pt-4">{searchParams.description}</p>
        </div>
      </section>
    </article>
  );
}
