# Arnau Vilardebò v3

1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Deploy](#deploy)
5. [Exluding pages from sitemap and robots](#exluding-pages-from-sitemap-and-robots)
6. [Debugging](#debugging)

## Overview

This site has been created using [Hugo](https://gohugo.io/), [GitHub ](https://github.com/) and [GitHub Pages](https://pages.github.com/).

- **Hugo** is one of the most popular open-source static site generators.
- **GitHub** is a development platform where you can host and review code.
- **GitHub Pages** is a static site hosting service designed to host your
  personal, organization, or project pages directly from a GitHub repository.

## Installation

From [Hugo > Getting Started](https://gohugo.io/getting-started/quick-start/) docs.

1. Install [Hugo](https://gohugo.io/):

```
$ brew install hugo
```

2. Verify your install:

```
$ hugo version
```

3. Clone GitHub repo:

```
$ git clone git@github.com:nadalsol/arnauvilardebo-v3
```

Is [VS Code](https://code.visualstudio.com/) your editor of choice? Consider installing [Hugo Language and Syntax Support](https://marketplace.visualstudio.com/items?itemName=budparr.language-hugo-vscode) for syntax highlighting and other goodies.

## Usage

1. Change into your new directory:

```
$ cd arnauvilardebo-v3
```

2. Start the Hugo server (with drafts enabled):

```
$ hugo server -D // or use `$ npm start` instead
```

3. Navigate to your new site at http://localhost:1313/

## Deploy

Merging `development` branch into `master` branch will trigger GitHub Actions, generating a new build and deploying it to Prod:

```bash
$ git co master
$ git pull --rebase origin master
$ git merge development
```

Alternatively, you can create a GitHub Pull Request (PR) that will trigger the build proceess only, without deploying your changes yet (useful to detect possible build errors, before deploying). Once your build is generated without any errors, you can go ahead and merge your PR into `master` to trigger the deployment.

Check "arnauvilardebo-v3/.github/workflows/gh-pages.yml" for further details.

## Exluding pages from sitemap and robots

Any new page/post gets programatically added to "sitemap.xml", in order to provide some information to search engines.

If you want to exclude a particular page/post form the Sitemap, just add the following metadata `sitemap_exclude: true`, at the beginning of your page/post (markdown) file.

Example:

```
---
title: "Pattern Library"
date: 2020-07-22T17:26:02+02:00
draft: false
type: "page"
layout: "pattern-library"
sitemap_exclude: true
---
```

Alternatively, you can add the page/post to your "layouts/robots.txt", to prevent search engines from indexing it.

Example:

```
User-agent: *
{{/* robotstxt.org - if ENV production variable is false robots will be disallowed */}}
{{ if hugo.IsProduction }}
Disallow: /pattern-library/
{{ else }}
Disallow: /
{{ end }}
```

## Debugging

- [Hugo docs > Template Debugging](https://gohugo.io/templates/template-debugging/)
- [Debugging Hugo Site Data and Page Variables](https://rimdev.io/debugging-hugo-site-data/)

You can also use this for debugging `Params`:

```
{{ with .Params }}
  {{ . }}
{{ end }}
```

Or even better…

```
{{ with .Params | jsonify }}
  {{ . }}
{{ end }}
```
