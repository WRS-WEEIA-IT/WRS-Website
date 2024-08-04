/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['firebasestorage.googleapis.com', 'scontent-lhr6-1.xx.fbcdn.net', 'scontent.xx.fbcdn.net'],
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.vercel.com',
                port: '',
                pathname: '/image/upload/**',
            },
            {
                protocol: 'https',
                hostname: '**.fbcdn.net',
            },
        ],
    },
};
