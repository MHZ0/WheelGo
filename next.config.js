/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },

    typeScript: {
        ignoreBuildErrors: true,
    }
    
}

module.exports = nextConfig
