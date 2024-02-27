import * as React from 'react';
import type {SVGProps} from 'react';
const PersonSpeaker = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-9 8c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10c1.68 0 3.162.44 4.18 1.041 1.1.65 1.32 1.255 1.32 1.459a1 1 0 0 1-1 1h-.25a.75.75 0 0 0 0 1.5h.25a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4s-7 2-7 4A2.5 2.5 0 0 0 3.5 15h.25a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1-1-1Zm3.335-.92a.75.75 0 0 0-.68 1.336l.02.012c.022.013.06.038.11.074.098.074.237.195.38.373.193.242.404.604.512 1.125H5.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-.427c.108-.52.319-.883.513-1.125.142-.178.281-.299.38-.373a1.416 1.416 0 0 1 .128-.086.75.75 0 0 0-.68-1.337l.336.671a61.14 61.14 0 0 0-.336-.67h-.003l-.004.003-.01.005a1.686 1.686 0 0 0-.1.058 2.9 2.9 0 0 0-.231.156 3.629 3.629 0 0 0-.652.636c-.377.471-.733 1.146-.863 2.062H7.7c-.13-.916-.486-1.59-.863-2.062a3.629 3.629 0 0 0-.652-.636 2.9 2.9 0 0 0-.331-.214l-.01-.005-.004-.002-.002-.001c-.001 0-.002 0-.337.67l.335-.67Z"
            clipRule="evenodd"
        />
    </svg>
);
export default PersonSpeaker;