/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const glob = require('glob');
const fse = require('fs-extra');
/* eslint-enable @typescript-eslint/no-var-requires */

const srcDir = path.join('./src');
const distDir = path.join('./dist/js');
const ignore = [
  "react-app-env.d.ts"
];
const files = glob.sync('**/*.d.ts', {
  cwd: srcDir,
  ignore: ignore
});

files.forEach(file => {
  const from = path.join(srcDir, file);
  const to = path.join(distDir, file);
  fse.copySync(from, to);
});
