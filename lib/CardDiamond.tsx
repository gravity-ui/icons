import * as React from 'react';
import {SVGProps} from 'react';
const CardDiamond = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4ZM11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h6ZM5 8.25v-.5A5.564 5.564 0 0 0 7.75 4h.5A5.564 5.564 0 0 0 11 7.75v.5A5.564 5.564 0 0 0 8.25 12h-.5A5.564 5.564 0 0 0 5 8.25Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CardDiamond;
