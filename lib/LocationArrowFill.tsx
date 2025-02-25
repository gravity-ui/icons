import * as React from 'react';
import type {SVGProps} from 'react';
const LocationArrowFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="m10.924 13.894 3.95-10.316a1.9 1.9 0 0 0-2.452-2.452L2.106 5.076a1.722 1.722 0 0 0 .163 3.27L6.5 9.5l1.154 4.231a1.722 1.722 0 0 0 3.27.163"
        />
    </svg>
);
export default LocationArrowFill;
