/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
