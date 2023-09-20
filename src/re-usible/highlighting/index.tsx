import { SpanDumb } from '@/re-usible/highlighting/Dumb'
import React from 'react'

export function highlightSearchTerm(searchTerm: string, text: string) {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const words = text.split(/\s+/);

    const highlightedText = words.map((word, index) => {
        const wordLowerCase = word.toLowerCase();
        const highlightedWord = [];

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            const charLowerCase = char.toLowerCase();

            if (charLowerCase === searchTermLowerCase[0]) {
                let match = true;

                for (let j = 1; j < searchTermLowerCase.length; j++) {
                    if (i + j >= word.length || wordLowerCase[i + j] !== searchTermLowerCase[j]) {
                        match = false;
                        break;
                    }
                }

                if (match) {
                    highlightedWord.push(
                        <React.Fragment key={i}>
                            <SpanDumb>{char}</SpanDumb>
                        </React.Fragment>
                    );
                    for (let k = 1; k < searchTermLowerCase.length; k++) {
                        i++;
                        highlightedWord.push(
                            <React.Fragment key={i}>
                                <SpanDumb>{word[i]}</SpanDumb>
                            </React.Fragment>
                        );
                    }
                    continue;
                }
            }

            highlightedWord.push(char);
        }

        return <React.Fragment key={index}>{highlightedWord} </React.Fragment>;
    });

    return <span>{highlightedText}</span>;
}


