import type { NextConfig } from "next";
/** @type {import ('next').nextConfig}  */
const withStyledComponents = require('styled-components');

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiter: {
    styledComponents:true
  }
};


module.exports = nextConfig;
