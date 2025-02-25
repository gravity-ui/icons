import * as React from 'react';
import type {SVGProps} from 'react';
const CircleLetterU = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.74 5.75a.74.74 0 1 0-1.48 0v2.556c0 .927.227 1.732.728 2.316.515.598 1.236.869 2.013.869.78 0 1.5-.272 2.014-.871.5-.585.726-1.39.726-2.314V5.75a.74.74 0 1 0-1.482 0v2.556c0 .702-.172 1.119-.37 1.35-.184.216-.463.353-.888.353-.424 0-.703-.137-.889-.353-.198-.23-.371-.648-.371-1.35z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleLetterU;
