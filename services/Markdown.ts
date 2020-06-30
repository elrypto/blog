import matter from 'gray-matter';
import marked from 'marked';
import fs from 'fs';
import path from 'path';


export const fileToMarkdown = (slug: string) => {
  const markdownWithMetadata = fs.readFileSync(path.join('posts', `${slug}.md`)).toString();
  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);

  return {
    htmlString,
    data: parsedMarkdown.data,
    slug
  }
}