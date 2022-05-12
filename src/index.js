const fs = require('fs');
const Markdoc = require('@markdoc/markdoc');

function markdocPlugin(config = {}) {
  return {
    name: 'markdoc',
    setup(build) {
      build.onLoad({filter: /\.md$/}, async args => {
        const data = await fs.promises.readFile(args.path, 'utf8');
        const ast = Markdoc.parse(data);
        const content = Markdoc.transform(ast, config);
        return {
          contents: JSON.stringify(content),
          loader: 'json',
        };
      });
    },
  };
}

module.exports = markdocPlugin;
