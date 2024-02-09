import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

export default async function HomePage() {
  //const news: NewsResponse = await fetchNews(categories.join(","));
  const news: NewsResponse = response;

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
