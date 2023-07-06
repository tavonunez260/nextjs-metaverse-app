/** @type {import("next").NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/public',
	reactStrictMode: true,
	experimental: {
		appDir: true
	}
}

module.exports = nextConfig
