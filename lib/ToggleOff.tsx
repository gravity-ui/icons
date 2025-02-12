import * as React from 'react';
import type {SVGProps} from 'react';
const ToggleOff = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m3.775 0A5.5 5.5 0 0 0 11 8a5.5 5.5 0 0 0-1.725-4H10.5a4 4 0 0 1 0 8zM0 8a5.5 5.5 0 0 1 5.5-5.5h5a5.5 5.5 0 1 1 0 11h-5A5.5 5.5 0 0 1 0 8"
            clipRule="evenodd"
        />
    </svg>
);
export default ToggleOff;
