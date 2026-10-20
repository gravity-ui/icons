import * as React from 'react';
import type {SVGProps} from 'react';
const Magnifier = (props: SVGProps<SVGSVGElement>) => (
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
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M5.054 12.411a5.66 5.66 0 0 0 2.848.268 5.66 5.66 0 0 0 2.625-1.136q.174-.135.33.02l2.79 2.79.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-2.79-2.79q-.155-.156-.02-.33a5.66 5.66 0 0 0 1.136-2.625 5.66 5.66 0 0 0-.268-2.848 5.66 5.66 0 0 0-1.607-2.366A5.66 5.66 0 0 0 8.256 1.39a5.66 5.66 0 0 0-2.86.09 5.66 5.66 0 0 0-2.461 1.456 5.66 5.66 0 0 0-1.456 2.462 5.66 5.66 0 0 0-.09 2.859q.322 1.44 1.3 2.548a5.66 5.66 0 0 0 2.365 1.607ZM7 11.75a4.7 4.7 0 0 1-1.748-.334 4.7 4.7 0 0 1-1.61-1.057q-.697-.696-1.058-1.61A4.7 4.7 0 0 1 2.25 7q0-.906.334-1.748a4.7 4.7 0 0 1 1.057-1.61q.696-.697 1.61-1.058A4.7 4.7 0 0 1 7 2.25q.906 0 1.748.334.915.36 1.61 1.057.696.696 1.058 1.61.334.843.334 1.749t-.334 1.748a4.7 4.7 0 0 1-1.057 1.61q-.696.697-1.61 1.058A4.7 4.7 0 0 1 7 11.75Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Magnifier;
