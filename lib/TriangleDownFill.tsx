import * as React from 'react';
import type {SVGProps} from 'react';
const TriangleDownFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.164 13.756c-.962 1.665-3.366 1.665-4.328 0L.919 5.251C-.045 3.584 1.158 1.5 3.083 1.5h9.834c1.925 0 3.128 2.084 2.164 3.751z"
        />
    </svg>
);
export default TriangleDownFill;
