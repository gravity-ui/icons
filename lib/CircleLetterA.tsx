import * as React from 'react';
import type {SVGProps} from 'react';
const CircleLetterA = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.791 5.338a1.291 1.291 0 0 1 2.418 0l1.743 4.649a.75.75 0 1 1-1.404.526L9.168 9.5H6.832l-.38 1.013a.75.75 0 1 1-1.404-.526zM8 6.386 8.605 8h-1.21z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleLetterA;
