import { SpanDumb } from '@/re-usible/highlighting/Dumb'

export function highlightSearchTerm(searchTerm: string, text: string) {
  const searchTermLowerCase = searchTerm.toLowerCase();

  // @ts-ignore
    const highlightedText = [...text].map((char, index) => {
    const charLowerCase = char.toLowerCase();
    if (charLowerCase === searchTermLowerCase) {
      return <SpanDumb key={index} >{char}</SpanDumb>;
    }
    return char;
  });

  return <span>{highlightedText}</span>;
}
