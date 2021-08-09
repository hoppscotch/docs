
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
![TailwindCSS][tailwind-shield]
![Nuxt][nuxt-shield]
![HoppscotchDocs](/static/HoppscotchDocs.png)

# Docs

Hoppscotch documentation https://docs.hoppscotch.io

Documentation site for [Hoppscotch](https://www.hoppscotch.io)



## Setup

Install dependencies:

```bash
npm run install
```

## Development

```bash
npm run dev
```

## Static Generation

This will create the `dist/` directory for publishing to static hosting:

```bash
npm run generate
```

To preview the static generated app, run `npm run start`

## Contributors Guide

We are looking for translators to help us with translations of Docs. [docs.hoppscotch](https://docs.hoppscotch.io) is built with nuxt-conent.
For detailed explanation on how things work, checkout [nuxt/content](https://content.nuxtjs.org) and [@nuxt/content theme docs](https://content.nuxtjs.org/themes-docs).

### Steps 

1. Follow the Setup Guide 
2. To add your language to the dropdown menu, go to `nuxt.config.js`, add code,iso,file and name of the language.

    ```bash
        {
            code: 'fr',
            iso: 'fr-FR',
            file: 'fr-FR.js',
            name: 'Français'
            }
    ```
3. To add translated content , naviagate to `\content` ,add a folder with langauge code as the name and add `.md` files.
    ```bash
       content
       |
       |- en
       |  |- article.md
       |- fr
           |-article.md <----translated
     ```
4. Make sure that the file names for translated content are the same as that of the english document.
5. Add screenshots to `\static\Resources\<your lang>\` or re-use screenshots of the english version.


[nuxt-shield]: https://img.shields.io/badge/nuxt.js-00C58E?style=flat-sqaure&logo=nuxtdotjs&logoColor=white
[tailwind-shield]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white
[forks-shield]: https://img.shields.io/github/forks/hoppscotch/docs?style=flat-square
[forks-url]: https://github.com/hoppscotch/docs/network/members
[stars-shield]: https://img.shields.io/github/stars/hoppscotch/docs?style=flat-square
[stars-url]: https://github.com/hoppscotch/docs/stargazers
[issues-shield]: https://img.shields.io/github/issues/hoppscotch/docs?style=flat-square
[issues-url]:  https://github.com/hoppscotch/docs/issues
[license-shield]: https://img.shields.io/github/license/hoppscotch/docs?style=flat-square
[license-url]: https://github.com/hoppscotch/docs/blob/main/LICENSE
