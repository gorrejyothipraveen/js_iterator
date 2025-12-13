// - Iterate over lines of text
//   "this\nis\ngood" => ['this','is','good']

export function* lineIterator(text ) {
  let i = 0
  while(i < text.length) {
    const indexOfLine = text.indexOf('\n', i) === -1 ? text.length : text.indexOf('\n', i);
    yield text.slice(i, indexOfLine);
    i = indexOfLine + 1;
  }
}

