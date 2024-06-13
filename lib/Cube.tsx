import * as React from 'react';
import type {SVGProps} from 'react';
const Cube = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 5.475v4.946a1.5 1.5 0 0 1-.973 1.405l-4.777 1.79V7.53zm-.654-1.36a2 2 0 0 0-.175-.103L9.499 2.427a1.5 1.5 0 0 0-1.197-.063l-4.829 1.81q-.12.045-.23.11L7.05 6.185zM2.5 5.59l3.75 1.875v5.984l-2.92-1.46a1.5 1.5 0 0 1-.83-1.342zM1.267 4.343c-.173.38-.267.8-.267 1.236v5.067a3 3 0 0 0 1.658 2.683l3.172 1.586a3 3 0 0 0 2.395.126l4.828-1.811A3 3 0 0 0 15 10.421V5.354a3 3 0 0 0-1.658-2.683L10.17 1.085A3 3 0 0 0 7.775.959L2.947 2.77a3 3 0 0 0-1.48 1.203.75.75 0 0 0-.2.37"
            clipRule="evenodd"
        />
    </svg>
);
export default Cube;
