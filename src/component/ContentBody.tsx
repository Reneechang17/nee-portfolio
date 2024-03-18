
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Bounded from "@/component/Bounded"
import Heading from "@/component/Heading"
import { Content } from "@prismicio/client";



export default function ContentBody({ page }: {
  page: Content.BlogPostDocument | Content.ProjectDocument
}) {

  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-300 px-4 py-10 md:px-8">
        <Heading as="h1" className="text-7xl">{page.data.title}</Heading>
        <div className="flex gap-4 text-yellow-400 text-xl font-bold">
          {page.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="mt-4 border-b border-slate-600" />
        <div className="prose prose-lg prose-invert w-full max-w-none">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}



