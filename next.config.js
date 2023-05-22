/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

//export default nextConfig;
// module.exports = nextConfig;
module.exports ={
  reactStrictMode : false,
  webpack5:true,
  webpack: (config)=>{
    config.resolve.fallback= {fs:false};
    return config;
  },
};
