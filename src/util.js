import fs from 'fs-extra';

export function resolvePath(name, nextName) {
  const path = require.resolve(name);
  if (!fs.existsSync(path)) return resolvePath(nextName);
  return path;
}
