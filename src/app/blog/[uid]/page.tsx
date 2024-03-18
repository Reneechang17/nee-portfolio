import { Metadata } from "next";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";
import ContentBody from "@/component/ContentBody"



type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return <ContentBody page={page} />

  // return (
  //   <Bounded as="article">
  //     <div className="rounded-2xl border-2 border-slate-300 px-4 py-10 md:px-8">
  //       <Heading as="h1" className="text-7xl">{page.data.title}</Heading>
  //       <div className="flex gap-4 text-yellow-400 text-xl font-bold">
  //         {page.tags.map((tag) => (
  //           <span key={tag}>{tag}</span>
  //         ))}
  //       </div>
  //       <p className="mt-4 border-b border-slate-600" />
  //       <div className="prose prose-lg prose-invert w-full max-w-none">
  //         <SliceZone slices={page.data.slices} components={components} />
  //       </div>
  //     </div>
  //   </Bounded>
  // );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
