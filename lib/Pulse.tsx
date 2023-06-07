import * as React from 'react';
import {SVGProps} from 'react';
const Pulse = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.235 1a.75.75 0 0 1 .74.56l2.034 7.726 1.09-1.908A.75.75 0 0 1 13.75 7h1.5a.75.75 0 0 1 0 1.5h-1.065l-1.784 3.122a.75.75 0 0 1-1.376-.181l-1.71-6.496-2.083 9.466a.75.75 0 0 1-1.446.07L3.544 7.55l-.65 1.085A.75.75 0 0 1 2.25 9H.75a.75.75 0 1 1 0-1.5h1.075l1.282-2.136a.75.75 0 0 1 1.357.155l1.898 5.868 2.156-9.798A.75.75 0 0 1 9.235 1Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Pulse;
