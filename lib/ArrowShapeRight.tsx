import * as React from 'react';
import {SVGProps} from 'react';
const ArrowShapeRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.5 10v2.67a.33.33 0 0 0 .542.252l5.225-4.421a.656.656 0 0 0 0-1.002L8.042 3.078a.33.33 0 0 0-.543.252V6H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h4.5ZM3 11.5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3V3.33a1.83 1.83 0 0 1 3.01-1.397l5.226 4.421a2.156 2.156 0 0 1 0 3.292L9.01 14.067a1.83 1.83 0 0 1-3.012-1.397V11.5H3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowShapeRight;
