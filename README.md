# React + TypeScript + Vite

<div align="center">
  <br />
  <img src="./src/git_image/git_image.png" />
  <h3 align="center">ReactJS - TailwindCSS - Vite - TypeScript</h3>
  <div align="center">

  </div>
</div>


## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [Future Upgrade](#future-upgrade)

## 🚨 Learning Point

This repository contains the code corresponding to an in-depth learning from  <a href="https://github.com/MichaelBoitmann/Muebles-ReactJS/tree/main" target="_blank"></a>. 

Like learning this coding exercise by walking thru [Tailwind CSS](https://tailwindcss.com/blog/tailwindcss-v3-4) and [ReactJS](https://react.dev/blog/2023/03/16/introducing-react-dev) online documentation.

## <a name="introduction">🤖 Introduction</a>

Understand Tailwind CSS in applying on ReactJS in two parts by first learning fundamentals, advanced techniques, and theming. Then, build a stunning landing page, applying learned skills to create a visually impressive website.

Thru the process of this website, bugs and unexpected error arises which is good as part of my learning skills set. JS Mastery and Stackoverflow Community definitely serves a big help 

Join JSMastery @ Discord Apps 

## <a name="tech-stack">⚙️ Tech Stack</a>

- Tailwind CSS
- React.JS
- Vite
- Typescript

## <a name="features">🔋 Features</a>

👉 **Maximizing Tailwind CSS**: Discover tips and tricks to make the most out of Tailwind CSS.

👉 **Understanding Tailwind Internals**: Dive into the inner workings of Tailwind, gaining insights into its structure and optimizations.

👉 **Best Practices**: Learn Tailwind's best practices for efficient and maintainable code.

👉 **Theming**: Explore techniques to add different themes to your website using Tailwind CSS.

👉 **JavaScript-like Tasks with Tailwind**: Discover how Tailwind CSS can be used to achieve tasks that typically require JavaScript code

## While creating a simple furniture website a,

👉 **Complex Header Section**: A visually appealing hero section showcasing key elements.

👉 **WHy Choosing Us**: A section highlighting popular Nike products

👉 **About Us Section**: An informative "About Us" section with a unique design.

👉 **Materials Section**: Showcase special offers in an eye-catching manner

👉 **Client Reviews**: A review section for a captivating user experience

👉 **Services**: A services section with Tailwind styling, encouraging user engagement

👉 **Footer**: A comprehensive footer section containing various links

👉 **Mobile Responsive**: The entire website is responsive across various devices, emphasizing Tailwind's mobile-friendly capabilities.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

**Cloning the Repository**

```bash
git clone https://github.com/MichaelBoitmann/Dynato-ReactJS-TailwindCSS.git
cd dynato
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```


**Running the Project**

```bash
npm start
```

##🎨 My VS Code Theme And Extensions : 
- ##Auto Import
- ##Glasslt-VSC
- ##Material Icon theme
- ##Simple React Snippets
- ##One Dark Palenight
- ##Prettier Code Formatter
- ##Tailwind CSS IntelliSense

Commands to initial setup

- npm create vite@latest
- yarn add tailwindcss autoprefixer postcss
- npx tailwindcss init -p

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>.eslintrc.cjs</code></summary>

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": 0
  },
}
```

</details>

<details>
<summary><code>constants.index.js</code></summary>

```javascript
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
```

</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Palanquin:wght@100;200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Palanquin:wght@100;200;300;400;500;600;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

@layer components {
  .max-container {
    max-width: 1440px;
    margin: 0 auto;
  }

  .input {
    @apply sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full;
  }
}

@layer utilities {
  .padding {
    @apply sm:px-16 px-8 sm:py-24 py-12;
  }

  .padding-x {
    @apply sm:px-16 px-8;
  }

  .padding-y {
    @apply sm:py-24 py-12;
  }

  .padding-l {
    @apply sm:pl-16 pl-8;
  }

  .padding-r {
    @apply sm:pr-16 pr-8;
  }

  .padding-t {
    @apply sm:pt-24 pt-12;
  }

  .padding-b {
    @apply sm:pb-24 pb-12;
  }

  .info-text {
    @apply font-montserrat text-slate-gray text-lg leading-7;
  }
}
```

</details>

<details>
<summary><code>script.js</code></summary>

```javascript
// To showcase the demo of dark theme. Copy paste :)
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById('toggleDark')
    toggleDark.addEventListener('click', function() {
      if(document.documentElement.classList.includes('dark')) {
        document.documentElement.classList.remove('dark')
      }
      else {
        document.documentElement.classList.add('dark')
      }
      alert("click!")
    });
  });
</script>
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
```

## <a name="links">🕸️ Links</a>

## <a name="future-upgrade">🕸️ Future Upgrade</a>

1. Routing of each Nav Bar with working page
2. Working Login and Logout
3. Improvement on Responsive Screen sizes
4. Adding Stripe technology to be able to purchase the items
5. Additional items other than shoes
6. Working on some animation on each page
7. Working Bar line when page is on smaller screen


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
