import * as React from 'react';
import {SVGProps} from 'react';
const TriangleRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.005 7.134 4.5 2.217a1 1 0 0 0-1.5.866v9.834a1 1 0 0 0 1.5.866l8.505-4.917a1 1 0 0 0 0-1.732Zm.751 3.03c1.665-.962 1.665-3.366 0-4.329L5.251.918C3.584-.045 1.5 1.158 1.5 3.083v9.834c0 1.925 2.084 3.128 3.751 2.164l8.505-4.917Z"
            clipRule="evenodd"
        />
    </svg>
);
export default TriangleRight;
