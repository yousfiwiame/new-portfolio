import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const MetaTags = ({
  title = "Wiame Yousfi - Software Engineer",
  description = "Software Engineer specializing in Full Stack Development and DevOps. Explore my projects and experience.",
  image = "/og-image.jpg",
  url = "https://wiameyousfi.com",
}: MetaTagsProps) => {
  const { language } = useLanguage();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="language" content={language} />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Wiame Yousfi Portfolio" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="author" content="Wiame Yousfi" />
      <meta name="keywords" content="Software Engineer, Full Stack Developer, DevOps Engineer, React, TypeScript, Node.js, AWS, Docker, Kubernetes" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default MetaTags; 