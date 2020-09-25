module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    "postcss-import",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
        browsers: ["> 1%", "last 2 versions", "Firefox ESR"],
      },
    ],
  ],
};
