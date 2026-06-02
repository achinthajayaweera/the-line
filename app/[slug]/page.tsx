import SlugPage from "./SlugPage";

export function generateStaticParams() {
  return [
    { slug: "work" },
    { slug: "entertainment" },
    { slug: "about" },
    { slug: "feed" },
    { slug: "podcast" },
    { slug: "contact" },
    { slug: "shop" },
  ];
}

export default function Page() {
  return <SlugPage />;
}