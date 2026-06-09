const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function generateSEO({
  title,
  description,
  keywords = [],
  url = "",
  image = "/images/favicon.ico",
}) {
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const fullImage = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return {
    title,
    description,
    keywords,

    metadataBase: new URL(SITE_URL),

    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Rajib Hasan",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImage],
    },

    alternates: {
      canonical: fullUrl,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}