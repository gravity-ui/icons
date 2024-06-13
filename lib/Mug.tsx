import * as React from 'react';
import type {SVGProps} from 'react';
const Mug = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.123 5.357c.712-.37.877-.75.877-1.107s-.165-.736-.877-1.107C9.373 2.752 8.2 2.5 6.75 2.5s-2.622.252-3.373.643c-.712.37-.877.75-.877 1.107s.165.736.877 1.107C4.127 5.748 5.3 6 6.75 6s2.622-.252 3.373-.643M6.75 7.5c1.684 0 3.198-.305 4.25-.914v5.164c0 .357-.165.736-.877 1.107-.75.391-1.924.643-3.373.643s-2.622-.252-3.373-.643c-.712-.37-.877-.75-.877-1.107V6.586c1.052.61 2.566.914 4.25.914m5.75-3.25C12.5 2.083 9.926 1 6.75 1S1 2.083 1 4.25v7.5C1 13.917 3.574 15 6.75 15s5.75-1.083 5.75-3.25v-1.182l.2-.08c.616-.256 1.27-.613 1.791-1.112.534-.512 1.01-1.256 1.01-2.218 0-.437-.097-.89-.345-1.304a2.4 2.4 0 0 0-.956-.89c-.562-.292-1.185-.358-1.7-.352zm0 1.862v2.82c.86-.425 1.501-1.016 1.501-1.774 0-.806-.652-1.058-1.501-1.046"
            clipRule="evenodd"
        />
    </svg>
);
export default Mug;
