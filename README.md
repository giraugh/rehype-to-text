# Rehype-to-text

Rehype plugin that compiles a hast tree to string using [`hast-util-to-text`](https://github.com/syntax-tree/hast-util-to-text)


## Usage

Install plugin with

```bash
npm i rehype-to-text
```

Then use `rehypeToText` as the last plugin in your `unified` chain.

```ts
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeToText from "rehype-to-text";

const plainText = (
    await unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeToText, { whitespace: "pre" })
        .process(myHtml)
).toString();
```
