// - Iterate over lines of text
//   "this\nis\ngood" => ['this','is','good']

export function* lineIterator(text ) {
  let i = 0
  while(i < text.length) {
    const indexOfNewLine = text.indexOf('\n', i)
    const indexOfLine = indexOfNewLine === -1 ? text.length : indexOfNewLine;
    yield text.slice(i, indexOfLine);
    i = indexOfLine + 1;
  }
}

