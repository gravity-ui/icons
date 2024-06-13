import * as React from 'react';
import type {SVGProps} from 'react';
const CircleLink = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.221 7.298a.707.707 0 0 0-1 0A2.461 2.461 0 1 0 8.7 10.78a.707.707 0 0 0 0-1l-.06-.06a.707.707 0 0 0-1 0 .961.961 0 0 1-1.36-1.36.707.707 0 0 0 0-1zm3.497 1.344a.707.707 0 0 1 0-1.001.961.961 0 0 0-1.359-1.36.707.707 0 0 1-1 0l-.06-.06a.707.707 0 0 1 0-1 2.461 2.461 0 1 1 3.48 3.48.707.707 0 0 1-1 0zm-.781-.518a.75.75 0 0 0-1.061-1.06l-.813.812a.75.75 0 0 0 1.061 1.06z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleLink;
