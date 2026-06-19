import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.riseit.com",
          },
        ],
        destination: "https://riseit.com/:path*",
        permanent: true,
      },

      // Old URLs → New URLs
      {
        source: "/strategy",
        destination: "/services/growth-marketing-strategy",
        permanent: true,
      },
      {
        source: "/clients",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/contactus",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/email-marketing",
        destination: "/services/email-marketing",
        permanent: true,
      },
      {
        source: "/corporate-videos",
        destination: "/services/content-production",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/",
        permanent: true,
      },
      {
        source: "/work/google-ads/2",
        destination: "/work/google-ads",
        permanent: true,
      },
      {
        source: "/social-media-marketing",
        destination: "/services/social-media-marketing",
        permanent: true,
      },
      {
        source: "/search-engine-optimization",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/website-design-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/analytics-conversion-rate-optimization",
        destination: "/services/conversion-rate-optimization",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
