import { getCollection } from "astro:content";
import { title, subtitle } from "../settings/settings.json";

// Generates /llms.txt following the https://llmstxt.org convention, kept in
// sync with the posts collection automatically.
export const GET = async ({ site }) => {
  const base = site ? site.toString().replace(/\/$/, "") : "";

  let posts = await getCollection("posts");
  posts = posts.sort(
    (a, b) =>
      new Date(b.data.updated || b.data.added).valueOf() -
      new Date(a.data.updated || a.data.added).valueOf(),
  );

  const postLines = posts.map((post) => {
    const url = `${base}/post/${post.data.slug}/`;
    const desc = (post.data.description || "").replace(/\s+/g, " ").trim();
    return `- [${post.data.title}](${url})${desc ? `: ${desc}` : ""}`;
  });

  const body = `# ${title}

> ${subtitle}

Personal website and blog of ${title}. Writing on software engineering, developer relations, AI/ML, and the occasional travel story.

## Blog Posts

${postLines.join("\n")}

## Pages

- [Home](${base}/): About ${title}, recent blog posts, and speaking history.
- [All posts](${base}/posts/): The full list of blog posts.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
