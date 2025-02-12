import * as React from 'react';
import type {SVGProps} from 'react';
const CloudSlash = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.364 4.424 1.97 3.03a.75.75 0 0 1 1.06-1.06l11 11a.75.75 0 1 1-1.06 1.06l-.612-.612a4.5 4.5 0 0 1-.858.082H3.75a3.75 3.75 0 0 1-.747-7.426 4.7 4.7 0 0 1 .36-1.65M10.939 12H3.751a2.25 2.25 0 0 1-.003-4.5h.03a.75.75 0 0 0 .747-.843 3.3 3.3 0 0 1 .036-1.036zm-.388-7.4a4.5 4.5 0 0 0-1.863.886l1.07 1.07a3 3 0 0 1 1.842-.554 3 3 0 0 1 2.343 4.74l1.07 1.07a4.5 4.5 0 0 0-2.826-7.26A4.75 4.75 0 0 0 5.351 2.15l1.115 1.115A3.25 3.25 0 0 1 10.55 4.6"
            clipRule="evenodd"
        />
    </svg>
);
export default CloudSlash;
