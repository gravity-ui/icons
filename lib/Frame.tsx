import * as React from 'react';
import type {SVGProps} from 'react';
const Frame = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.25 1a.75.75 0 0 1 .75.75V3h1.25a.75.75 0 0 1 0 1.5H13v7h1.25a.75.75 0 0 1 0 1.5H13v1.25a.75.75 0 0 1-1.5 0V13h-7v1.25a.75.75 0 0 1-1.5 0V13H1.75a.75.75 0 0 1 0-1.5H3v-7H1.75a.75.75 0 0 1 0-1.5H3V1.75a.75.75 0 0 1 1.5 0V3h7V1.75a.75.75 0 0 1 .75-.75M4.5 4.5v7h7v-7z"
            clipRule="evenodd"
        />
    </svg>
);
export default Frame;
