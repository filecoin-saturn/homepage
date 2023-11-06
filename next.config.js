/** @type {import('next').NextConfig} */

const path = require('path');

// Don't use nextjs default env system as it doesn't support staging
require('dotenv').config({ path: `env/.env.${process.env.APP_ENV || 'development'}` });
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['three'])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

function execute(value, process, callback) {
  const splittedFile = value.split(/{[\n\t ]*\/\*\s*c:[\w.\-\\[\d\]]+\s*\*\/[\n\t ]*}/)
  splittedFile.shift()
  const matchingComments = value.match(/(?<={[\n\t ]*\/\*\s*c:)[\w.\-\\[\d\]]+(?=\s*\*\/[\n\t ]*})/g)

  if(splittedFile.length) {
    Promise.all(splittedFile.map(async (v, i) => {
      const file = await process({value: v, path: this.resourcePath})
      return file
    })).then((arr) => {
        const objElements = arr.map((file, i) => {
          return `"${matchingComments[i]}": function() {
            ${file.value}
          },`
        })
        const result = `
          const res = {
            ${objElements.join("")}
          };
          export default res;
        `
        callback(null, result, arr[0].map)
        return result
    }, callback)
  } else {
    process({value, path: this.resourcePath}).then((file) => {
      const result = `
        export default function() {
          ${file.value}
        }
      `
      callback(null, result, file.map)
      return result
    }, callback)
  }
}

module.exports = withPlugins([withTM, withBundleAnalyzer],{
  // Append the default value with md extensions
  reactStrictMode: true,
  env: {
    PORTAL_ORIGIN : process.env?.PORTAL_ORIGIN
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
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
      },
      {
        test: /\.mdx$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loaders/mdx-extended-loader/index.cjs'),
            options: {
              execute: execute,
              outputFormat: "function-body"
            }
          }
        ],
      }
    )

    return config
  }
})
