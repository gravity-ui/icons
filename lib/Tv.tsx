import * as React from 'react';
import type {SVGProps} from 'react';
const Tv = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3 3.5h10A1.5 1.5 0 0 1 14.5 5v5a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 10V5A1.5 1.5 0 0 1 3 3.5Zm-.21 9.493A3 3 0 0 1 0 10V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5a3 3 0 0 1-2.79 2.993l.46.922a.75.75 0 1 1-1.34.67L11.536 13H4.463l-.793 1.585a.75.75 0 1 1-1.342-.67l.461-.922Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Tv;
