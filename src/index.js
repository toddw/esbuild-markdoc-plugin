import fs from 'fs';
import Markdoc from '@markdoc/markdoc';

export default function markdocPlugin() {
  return {
    name: 'markdoc',
    setup(build) {
      build.onLoad({filter: /\.md$/}, async args => {
        const data = await fs.promises.readFile(args.path, 'utf8');
        const ast = Markdoc.parse(data);
        const content = Markdoc.transform(ast);
        return {
          contents: JSON.stringify(content),
          loader: 'json',
        };
      });
    },
  };
}
