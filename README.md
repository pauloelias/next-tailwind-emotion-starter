[![Netlify Status](https://api.netlify.com/api/v1/badges/bcf342c2-53d1-421e-ba6f-fafb0f4cdf84/deploy-status)](https://app.netlify.com/sites/next-tailwind-emotion-starter/deploys)

<p align="center">
  <a href="https://nextjs.org">
    <img alt="Next.js" src="./assets/images/nextjs.svg" width="100" />
  </a>
  <a href="https://tailwindcss.com">
    <img alt="Gatsby" src="./assets/images/tailwind.svg" width="60" />
  </a>
  <a href="https://emotion.sh">
    <img alt="Gatsby" src="./assets/images/emotion.png" width="60" />
  </a>
</p>
<h1 align="center">
  Tailwind CSS ➕ Emotion Starter for Next.js
</h1>

Kick off your project with this bare-bones Tailwind CSS + Emotion starter for Next.js. This starter ships with the packages and configuration files you need to get hit the ground running on your next Tailwind CSS project.

## 💄 Demo

You can see a demo of the frontend [over yonder](https://next-tailwind-emotion-starter.netlify.app/).

## 🚀 Quick start

1.  **Create a Next.js project.**

    Use `create-next-app` to create a new application specifying the `next-tailwind-emotion-starter` starter.

    ```sh
    yarn create next-app my-next-tailwind-emotion-starter -e https://github.com/pauloelias/next-tailwind-emotion-starter
    # or
    npx create-next-app my-next-tailwind-emotion-starter -e https://github.com/pauloelias/next-tailwind-emotion-starter
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-next-tailwind-emotion-starter/
    yarn run dev
    ```

3.  **Open the source code and start editing!**

    Your site is now running at [http://localhost:3000!](http://localhost:3000)

    Open the `my-next-tailwind-emotion-starter` directory in your code editor of choice and edit `./pages/index.js`.Save your changes and the browser will update in real time!

## ✨ Features?

This starter contains has the following features enabled by default:

- **Tailwind CSS**: The full power of Tailwind is at your fingertips. Style your components using [twin.macro](https://github.com/ben-rogerson/twin.macro) to add Tailwind classes to your project.
- **Emotion**: Best-in-class CSS-in-JS support with [Emotion](https://emotion.sh). Write your own custom styled components with Emotion or use `twin.macro` inside your styled components to add Tailwind CSS classes alongside your custom styling.
- **PostCSS**: Use the flexibility of [PostCSS](https://postcss.org/) to extend Tailwind's CSS or write your own CSS. [Postcss-Preset-Env](https://preset-env.cssdb.org/) is enabled out-of-the box allowing you to write tomorrow's CSS today!

The rest of the Starter is based off of the Next.js default starter.

## 📦 Example Components

To use Tailwind CSS classes inside of your components you use the `twin.macro` package. You can also create richer styled components using a combination of both Tailwind's classes and your own custom CSS with Emotion. Laslty, if needed, you can use PostCSS to write your own custom CSS as well.

### Standalone Tailwind Classes

```js
import tw from "twin.macro"

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

export default () => (
  <div>
    <Heading>Hello, world!</Heading>
  </div>
)
```

### Styled Components with Emotion

```js
import tw, { styled } from "twin.macro"

import pattern from "../images/pattern.png"

const Container = styled.div`
    ${tw`bg-gray-100 w-full`}
    background-image: url(${background});
    padding: 15px;
`

export default () => (
  <Container>
    <h1>Hello, world!</h1>
  </Container>
)
```

### Combined Standalone + Styled Components Example

```js
import tw, { styled } from "twin.macro"
import pattern from "../assets/images/pattern.png"

const Container = styled.div`
    ${tw`bg-gray-100 w-full`}
    background-image: url(${pattern});
    padding: 15px;
`

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

export default () => (
  <Container>
    <Heading>Hello, world!</Heading>
  </Container>
)
```

### CSS Prop to inline Tailwind Classes

```js
import tw, { css } from "twin.macro"

export default () => (
  <div
    css={css`
      ${tw`flex items-center justify-between px-4 py-3`}
    `}
  >
    <h1>Hello, world!</h1>
    <h2>I'm a flex item too!</h2>
  </div>
)
```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see inside this project.

    .
    ├── .babelrc
    ├── .eslintignore
    ├── .gitignore
    ├── .nvmrc
    ├── .prettierignore
    ├── .prettierrc
    ├── .stylelint.config.js
    ├── .vscode/
    ├── LICENSE
    ├── README.md
    ├── assets/
    ├── babel-plugin-macros.config.js
    ├── components/
    ├── next.config.js
    ├── package.json
    ├── pages/
    ├── postcss.config.js
    ├── public/
    └── tailwind.config.js

1.  **`.babelrc`**: This configuration file allows us to fine-tune [Babel's configuration settings](https://babeljs.io/docs/en/configuration). In this starter we are adding the [`babel-preset-gatsby`](https://github.com/gatsbyjs/gatsby/tree/master/packages/babel-preset-gatsby) preset to allow us to customize Babel as needed.

1. **`.eslintignore`**: This file specifies files and folders that we want to exclude from linting with Eslint.

1. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1. **`.nvmrc`**: The `.nvmrc` allows you to lock down a project's node version when using [nvm.](https://github.com/nvm-sh/nvm)

1.  **`.prettierignore`**: This file allows us to specifiy files that we want to exclude from formatting with Prettier.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1. **`.stylelint.config.js`**: [Stylelint](https://stylelint.io/) configuration file to customize stylelint rules in the project. Styleline is enabled to tame CSS errors displayed in some editors due to TailwindCSS's syntaxt inside CSS files.

1. **`.vscode/`**: Base [VS Code](https://code.visualstudio.com/) settings and extensions are provided to help make your life easier.

1. **`LICENSE`**: Next.js is licensed under the MIT license.

1. **`README.md`**: A text file containing useful reference information about this project.

1. **`assets/`**: This directory contains assets that can be compiled with your project.

1.  **`babel-plugin-macros.config.js`**: This file helps us configure Tailwind CSS macros to be used with [Emotion](https://emotion.sh), our CSS-in-JS tool of choice.

1. **`components/`**: *Add this directory to your project*. You will save your React component files inside this directory.

1. **`next.config.js`**: This file allows you to customize advanced features of Next.js. We use this to configure the Next.js server and build phases. It's not included in the browser build.

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`pages/`**: Your page components live inside here. [Next.js pages](https://nextjs.org/docs/basic-features/pages) are associated with routes based on the file name.

1. **`postcss.config.js`**: This configuration file allows us to customize our [PostCSS](https://postcss.org/) settings. PostCSS is used to compile the custom css we write outside of Emotion.

1. **`public/`**: You can place static assets that do not need to be compiled in this directory.

1. **`tailwind.config.js`**: This is the default [Tailwind CSS configuration](https://tailwindcss.com/docs/configuration/) file.

## 💫 Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/pauloelias/next-tailwind-emotion-starter)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pauloelias/gatsby-tailwind-emotion-starter)

## ✅ To Do

- [ ] [Pass Server Data Directly to a Next.js Page during SSR](https://github.com/vercel/next.js/tree/master/examples/with-emotion)

## 📚 Learn More About Next.js

To learn more about Next.js, use the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
