---
title: Running Hopscotch locally or on docker
menuTitle: Local Setup
description: "Work with hoppscotch in your local environment"
position: 9
category: Community
---

## **Developing**

Update [`.env.example`](https://github.com/hoppscotch/hoppscotch/blob/main/.env.example) file found in repository's root directory with your own keys and rename it to `.env`.

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
