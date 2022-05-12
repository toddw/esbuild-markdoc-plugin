# esbuild-markdoc-plugin

esbuild plugin for markdown files using [Markdoc](https://markdoc.io/).

## How to use the plugin

The goal of this plugin is to convert .md files into the content object expected by [Markdoc render functions](https://markdoc.io/docs/render#render).

1. Add to your esbuild plugins array.

```javascript
import markdocPlugin from "esbuild-markdoc-plugin";

config = {
  ...,
  plugins: [
    markdocPlugin(),
  ],
  ...,
}
```

2. All files with `.md` extention will be parsed with Markdoc, and transformed into the content json object for Markdoc renderers.

```javascript
import Markdoc from '@markdoc/markdoc';
import content from './my-markdown.md';

const html = Markdoc.renderers.html(content);
```

## Custom Config

You can pass a custom [config](https://markdoc.io/docs/syntax#config) object to `markdocPlugin(config)`.

## Contributing

I wanted this for my own project so I built this plugin. I figured other people might want to use it as well so here it is.

Please file issues or open PRs and I will try to address them quickly.
