import * as React from 'react';
import type {SVGProps} from 'react';
const LifeRing = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 13.5c1.248 0 2.4-.416 3.323-1.117l-1.436-1.435A3.483 3.483 0 0 1 8 11.5a3.483 3.483 0 0 1-1.887-.552l-1.436 1.435A5.476 5.476 0 0 0 8 13.5ZM5.052 9.887A3.484 3.484 0 0 1 4.5 8c0-.695.203-1.343.552-1.887L3.617 4.677A5.476 5.476 0 0 0 2.5 8c0 1.248.416 2.4 1.117 3.323l1.435-1.436Zm1.06-4.835L4.678 3.617A5.476 5.476 0 0 1 8 2.5c1.248 0 2.4.416 3.323 1.117L9.887 5.052A3.484 3.484 0 0 0 8 4.5c-.695 0-1.343.203-1.887.552Zm4.836 1.06c.35.545.552 1.193.552 1.888 0 .695-.203 1.343-.552 1.887l1.435 1.436A5.476 5.476 0 0 0 13.5 8c0-1.248-.416-2.4-1.117-3.323l-1.435 1.436ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default LifeRing;
