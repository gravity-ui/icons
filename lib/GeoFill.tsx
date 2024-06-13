import * as React from 'react';
import type {SVGProps} from 'react';
const GeoFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.247 1.5H4.5a3 3 0 0 0-2.69 1.672l5.96 3.793zM1.5 4.753V11.5a3 3 0 0 0 1.672 2.69l3.793-5.96zM4.753 14.5H11.5a3 3 0 0 0 3-3v-7a3 3 0 0 0-1.671-2.69L8.633 8.402z"
            clipRule="evenodd"
        />
    </svg>
);
export default GeoFill;
