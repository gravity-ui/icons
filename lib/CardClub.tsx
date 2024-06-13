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
            d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4M11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zM9.5 6q-.001.265-.086.502L9.5 6.5a1.5 1.5 0 1 1-1.228 2.361c.08.667.382 1.293.862 1.773L9.5 11v.5h-3V11l.366-.366c.48-.48.782-1.106.862-1.773a1.5 1.5 0 1 1-1.142-2.359A1.5 1.5 0 1 1 9.5 6"
            clipRule="evenodd"
        />
    </svg>
);
export default CardClub;
