import * as React from 'react';
import type {SVGProps} from 'react';
const CardHeart = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4M11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zM4.75 7.333c0-1.148.734-2.084 1.846-2.084.613 0 1.253.595 1.404 1.501.15-.915.791-1.5 1.404-1.5 1.112 0 1.846.935 1.846 2.083 0 1.895-1.69 3.1-3.1 3.878a.31.31 0 0 1-.3-.001c-1.412-.786-3.1-1.973-3.1-3.877"
            clipRule="evenodd"
        />
    </svg>
);
export default CardHeart;
