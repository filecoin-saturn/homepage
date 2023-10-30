# Saturn-website

The distribution website for Filecoin Saturn

## Developer notes

The code in this repository was optimized to deliver a pleasant experience to both content editors and developers.

### Styling prose blocks

We utilize the tailwind prose class to style prose / text blocks in this repository.
The CustomProse component includes all necessary style customizations from our design system.
Just wrap the according markup with CustomProse to style it.

Design deviations can be supplied with the `overrides` prop. E.g. to style h1 blocks differently, we could write `overrides="prose-h1:bg-black"`.

### Where does stuff go?

We differentiate between layout + functionality and content

**Content:**

Content is everything that is or has to be translatable or is language dependent. Content can be:

- Prose / Text (Placed in `*.mdx` files)
- Language dependent component props / Translations to components (Placed in `*.tsx` files)

Content belongs in the `/content` directory, with a file structure as follows:

```txt
content

    en
        [Global component like NavBar].tsx
        [...].tsx

        index
            intro.mdx
            intro.tsx
            [section name].mdx
            [section name].tsx
            [...].mdx
            [...].tsx

    [lang]
        ...
```

As you can see, global components like NavBar or Footer go directly in the `en` or `[lang]` folder, while page scoped components and prose has it's own folder named after the page they will be placed in. Within the page folder all files are named after the page section they belong to.

Files mostly come in pairs, one or more `*.mdx` file for prose (and seldomly components that belong to prose blocks) and one `.tsx` file where components are injected with content and exported for use.

**Layout + functionality:**

Layout + functionality is everything else that is not language dependent. I.e. content is what differs in a layout depending on the language.

The file structure here is commonly split into a `components` and `pages` folder, as commonly know in the nextjs ecosystem.

We recommend to place most of the code within pages or components, leaving only the necessary parts to content.

### Guidelines for writing code

- Assemble content in pages.
- Components used should be content-agnostic. That means there should be a prop for every content blob.
- Inject and translate contents for components in `/content/[lang]/[page]/[section].tsx`. Then export the translated components and use them in pages.

### Guidelines for deployment

- The homepage is deployed on [Fleek](https://fleek.co/).
- Before pushing the branch make sure to run `npm run build` & `npm run export`. Fix errors in case there are any.
- To update the homepage, push the proper branch.
  - Pushing the `main` branch will update the staging site <https://saturn-test.network>
  - Pushing the `release` branch will update the production site <https://saturn.tech>
- Fleek will detect changes to the branch and automatically deploy.

## License

Dual-licensed under MIT + Apache 2.0
