import * as React from 'react';
import type {SVGProps} from 'react';
const PauseFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5 1.5A1.5 1.5 0 0 1 6.5 3v10A1.5 1.5 0 0 1 5 14.5H3A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5zm8 0A1.5 1.5 0 0 1 14.5 3v10a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 13V3A1.5 1.5 0 0 1 11 1.5z"
        />
    </svg>
);
export default PauseFill;
