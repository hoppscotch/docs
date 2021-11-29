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

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

#### We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## **Developing**

Update [`.env.example`](https://github.com/hoppscotch/hoppscotch/blob/main/packages/hoppscotch-app/.env.example) file found in repository's root directory with your own keys and rename it to `.env`.

_Sample keys only works with the [production build](https://hoppscotch.io)._

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

#### Report bugs using Github's [issues](https://github.com/hoppscotch/hoppscotch/issues)

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

## License

By contributing, you agree that your contributions will be licensed under MIT License.
