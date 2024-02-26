import * as React from 'react';
import type {SVGProps} from 'react';
const LogoMermaid = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.5 12.5A1.5 1.5 0 0 1 10 14H6a1.5 1.5 0 0 1-1.5-1.5v-.823a3.114 3.114 0 0 0-1.35-2.566A6.114 6.114 0 0 1 .5 4.073V3A1.5 1.5 0 0 1 2 1.5h.666A6.425 6.425 0 0 1 8 4.343 6.425 6.425 0 0 1 13.334 1.5H14A1.5 1.5 0 0 1 15.5 3v1.073a6.114 6.114 0 0 1-2.65 5.038 3.114 3.114 0 0 0-1.35 2.566v.823Zm-8-9.43a4.924 4.924 0 0 1 3.738 3.025c.275.688 1.249.688 1.524 0A4.924 4.924 0 0 1 13.334 3H14v1.073a4.614 4.614 0 0 1-2 3.802c-1.252.86-2 2.283-2 3.802v.823H6v-.823c0-1.52-.748-2.941-2-3.802a4.614 4.614 0 0 1-2-3.802V3h.666c.283 0 .562.024.834.07Z"
            clipRule="evenodd"
        />
    </svg>
);
export default LogoMermaid;
