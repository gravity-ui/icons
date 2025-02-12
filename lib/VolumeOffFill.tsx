import * as React from 'react';
import type {SVGProps} from 'react';
const VolumeOffFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.5 11h-3A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h3l2.586-2.586a1.414 1.414 0 0 1 2.414 1v9.172a1.414 1.414 0 0 1-2.414 1z"
            clipRule="evenodd"
        />
    </svg>
);
export default VolumeOffFill;
