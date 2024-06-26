import * as React from 'react';
import type {SVGProps} from 'react';
const Calculator = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12M5 15a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zm.5-11a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            clipRule="evenodd"
        />
    </svg>
);
export default Calculator;
