import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query myQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        keywords: $keywords
        countries: "de"
        sort: "published_desc"
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function with Next.js 13 chaching
  const res = await fetch(
    "https://luorong.stepzen.net/api/next-news/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query: query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log("Loading new data from api for category ->", category, keywords);

  const newsResponse = await res.json();

  // Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  // return
  return news;
};

export default fetchNews;

// Example import for StepZen
// stepzen import curl http://api.mediastack.com/v1/news?access_key={api_key}&countries=us%2Cgb&limit=100&offset=0&sort=published_desc
