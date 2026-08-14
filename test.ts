import fs from 'node:fs';
import path from 'node:path';

import { MOCK_BOOKS } from './src/data/mockBooks';

const outputDir = path.resolve(
  process.cwd(),
  './books/data/books-json'
);

fs.mkdirSync(outputDir, { recursive: true });

for (const book of MOCK_BOOKS) {
  const outputPath = path.join(
    outputDir,
    `${book.slug}.json`
  );

  fs.writeFileSync(
    outputPath,
    JSON.stringify(book, null, 2),
    'utf-8'
  );

  console.log(`Generated: ${outputPath}`);
}