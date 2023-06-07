import * as React from 'react';
import {SVGProps} from 'react';
const SquareBarsVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3Zm-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7Zm8.5 6.251a.75.75 0 1 0 1.5 0V5.249a.75.75 0 0 0-1.5 0v5.502Zm-2 .75a.75.75 0 0 1-.75-.75V5.249a.75.75 0 0 1 1.5 0v5.502a.75.75 0 0 1-.75.75Zm-3.497-.75a.75.75 0 0 0 1.5 0V5.249a.75.75 0 1 0-1.5 0v5.502Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SquareBarsVertical;
