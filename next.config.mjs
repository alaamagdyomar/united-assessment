/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*', // Matches all API requests
                destination: 'http://localhost:5000/api/:path*' // Redirects them to localhost:5000
            }
        ];
    }
};

export default nextConfig;
