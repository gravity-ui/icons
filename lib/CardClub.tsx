import * as React from 'react';
import type {SVGProps} from 'react';
const CardClub = (props: SVGProps<SVGSVGElement>) => (
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
            strokeWidth={0}
            d="M14 4a2.9 2.9 0 0 0-.879-2.121A2.9 2.9 0 0 0 11 1H5a2.9 2.9 0 0 0-2.121.879A2.9 2.9 0 0 0 2 4v8q0 1.243.879 2.121A2.9 2.9 0 0 0 5 15h6a2.9 2.9 0 0 0 2.121-.879A2.9 2.9 0 0 0 14 12zm-1.5 8q0 .621-.44 1.06-.438.44-1.06.44H5q-.621 0-1.06-.44A1.45 1.45 0 0 1 3.5 12V4q0-.621.44-1.06Q4.377 2.5 5 2.5h6q.621 0 1.06.44.44.438.44 1.06zM9.501 6.5H9.5l-.085.002Q9.499 6.265 9.5 6q0-.697-.534-1.146-.534-.45-1.22-.33a1.43 1.43 0 0 0-1.04.72q-.353.6-.12 1.258-.857-.05-1.334.665-.476.714-.102 1.486.375.773 1.23.842.856.069 1.348-.634a2.94 2.94 0 0 1-.862 1.773L6.5 11v.5h3V11l-.366-.366a2.94 2.94 0 0 1-.862-1.773q.484.69 1.327.636.842-.055 1.232-.805t-.049-1.47q-.437-.722-1.28-.722Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1.5)*1px))',
            }}
        />
    </svg>
);
export default CardClub;
