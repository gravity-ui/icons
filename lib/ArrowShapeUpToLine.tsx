import * as React from 'react';
import {SVGProps} from 'react';
const ArrowShapeUpToLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.5 10h2.471L8.472 5.724a.61.61 0 0 0-.944 0L4.029 10H6.5v3.25c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25V10ZM8.002 2.5h6.248a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0 0 1.5h6.252Zm0 1.5a2.11 2.11 0 0 1 1.631.774l3.534 4.319a1.474 1.474 0 0 1-1.14 2.407H11v1.75A1.75 1.75 0 0 1 9.25 15h-2.5A1.75 1.75 0 0 1 5 13.25V11.5H3.974a1.474 1.474 0 0 1-1.14-2.407l3.533-4.319c.4-.49 1-.774 1.632-.774H8Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowShapeUpToLine;
