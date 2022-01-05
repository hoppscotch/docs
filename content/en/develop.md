---
title: Contribute to Hoppscotch
menuTitle: Contribute
description: "Contribute to Hoppscotch"
position: 3
category: Community
features:
  - "Reporting a bug"
  - "Discussing the current state of the code"
  - "Submitting a fix"
  - "Proposing new features"
---

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

<list :items="features"></list>

## We Develop with GitHub

We use GitHub to host code, track issues and feature requests, as well as accept pull requests.

#### We Use [GitHub Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [GitHub Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests.

## **Developing**

Update [`.env.example`](https://github.com/hoppscotch/hoppscotch/blob/main/packages/hoppscotch-app/.env.example) file found in repository's root directory with your own keys and rename it to `.env`.

_Sample keys only work with the [production build](https://hoppscotch.io)._

### Browser based development environment

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hoppscotch/hoppscotch)

### Local development environment

1. [Clone this repo](https://github.com/hoppscotch/hoppscotch.git) with git.
2. Install dependencies by running `npm install` within the directory that you cloned (probably `hoppscotch`).
3. Start the development server with `npm run dev`.
4. Open development site by going to [`http://localhost:3000`](http://localhost:3000) in your browser.

### Docker compose

1. [Clone this repo](https://github.com/hoppscotch/hoppscotch.git) with git.
2. Run `docker-compose up`
3. Open development site by going to [`http://localhost:3000`](http://localhost:3000) in your browser.

## **Docker**

**Official container** &nbsp; [![hoppscotch/hoppscotch](https://img.shields.io/docker/pulls/hoppscotch/hoppscotch?style=social)](https://hub.docker.com/r/hoppscotch/hoppscotch)

```bash
docker run --rm --name hoppscotch -p 3000:3000 hoppscotch/hoppscotch:latest
```

## **Releasing**

1. [Clone this repo](https://github.com/hoppscotch/hoppscotch.git) with git.
2. Install dependencies by running `npm install` within the directory that you cloned (probably `hoppscotch`).
3. Build the release files with `npm run generate`.
4. Find the built project in `./dist`.

#### Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

#### Report bugs using GitHub's [issues](https://github.com/hoppscotch/hoppscotch/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/hoppscotch/hoppscotch/issues); it's that easy!

#### Write bug reports with detail, background, and sample code

[This is an example](http://stackoverflow.com/q/12088905/180626) of a bug report I wrote, and I think it's not a bad model. Here's [another example](http://www.openradar.me/11905408).

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People _love_ thorough bug reports. I'm not even kidding.

#### Use a Consistent Coding Style

I'm again borrowing these from [Facebook's Guidelines](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)

- 2 spaces for indentation rather than tabs
- You can try using Eslint code extensions in vs code or something similar.

## Recommended VS Code extensions

- WindiCSS IntelliSense

  [Install](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) • [Repository](https://github.com/windicss/windicss-intellisense)

- Vue Language Features (Volar)

  [Install](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) • [Repository](https://github.com/johnsoncodehk/volar)

- Stylelint

  [Install](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) • [Repository](https://github.com/stylelint/vscode-stylelint)

- SCSS IntelliSense

  [Install](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss) • [Repository](https://github.com/mrmlnc/vscode-scss)

- SCSS Formatter

  [Install](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter) • [Repository](https://github.com/sibiraj-s/vscode-scss-formatter)

- PostCSS Language Support

  [Install](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) • [Repository](https://github.com/csstools/postcss-language)

- npm Intellisense

  [Install](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) • [Repository](https://github.com/ChristianKohler/NpmIntellisense)

- JavaScript and TypeScript Nightly

  [Install](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next) • [Repository](https://github.com/microsoft/vscode-typescript-next)

- GraphQL

  [Install](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) • [Repository](https://github.com/graphql/vscode-graphql)

- ESLint

  [Install](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) • [Repository](https://github.com/Microsoft/vscode-eslint)

- EditorConfig for VS Code

  [Install](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) • [Repository](https://github.com/editorconfig/editorconfig-vscode)

- npm

  [Install](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) • [Repository](https://github.com/Microsoft/vscode-npm-scripts)

## License

By contributing, you agree that your contributions will be licensed under MIT License.
