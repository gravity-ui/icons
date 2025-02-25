import * as React from 'react';
import type {SVGProps} from 'react';
const MinusShapeFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.5 11h11A1.5 1.5 0 0 0 15 9.5v-3A1.5 1.5 0 0 0 13.5 5h-11A1.5 1.5 0 0 0 1 6.5v3A1.5 1.5 0 0 0 2.5 11"
        />
    </svg>
);
export default MinusShapeFill;
