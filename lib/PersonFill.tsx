import * as React from 'react';
import type {SVGProps} from 'react';
const PersonFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 9c3.85 0 7 2.5 7 4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5C1 11.5 4.15 9 8 9m0-8a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
        />
    </svg>
);
export default PersonFill;
