/** @type {import('next').NextConfig} */

const path = require('path');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['three'])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withPlugins([withTM, withMDX, withBundleAnalyzer],{
  // Append the default value with md extensions
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config, options) => {
    config.module.rules.push(
      // Shaders
      {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          type: 'asset/source',
          generator:
          {
              filename: 'assets/images/[hash][ext]'
          }
      }
    )

    return config
  }
})