import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const TrafficLight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.5 12.5v-9A1.5 1.5 0 0 1 6 2h4a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 10 14H6a1.5 1.5 0 0 1-1.5-1.5m10.374-7.834L13 7.477v.773h1.25a.75.75 0 0 1 .624 1.166L13 12.227v.273a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-.273L1.126 9.416A.75.75 0 0 1 1.75 8.25H3v-.773L1.126 4.666A.75.75 0 0 1 1.75 3.5H3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3h1.25a.75.75 0 0 1 .624 1.166M8 7.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m0 5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(TrafficLight);
export default ForwardRef;
