import * as React from 'react';
import type {SVGProps} from 'react';
const XmarkShape = (props: SVGProps<SVGSVGElement>) => (
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
            d="m8 10.121 2.652 2.652a.25.25 0 0 0 .353 0l1.768-1.768a.25.25 0 0 0 0-.353L10.121 8l2.652-2.652a.25.25 0 0 0 0-.353l-1.768-1.768a.25.25 0 0 0-.353 0L8 5.879 5.348 3.227a.25.25 0 0 0-.353 0L3.227 4.995a.25.25 0 0 0 0 .353L5.879 8l-2.652 2.652a.25.25 0 0 0 0 .353l1.768 1.768a.25.25 0 0 0 .353 0zm0 2.122 1.591 1.59a1.75 1.75 0 0 0 2.475 0l1.768-1.767a1.75 1.75 0 0 0 0-2.475L12.243 8l1.59-1.591a1.75 1.75 0 0 0 0-2.475l-1.767-1.768a1.75 1.75 0 0 0-2.475 0L8 3.757l-1.591-1.59a1.75 1.75 0 0 0-2.475 0L2.166 3.933a1.75 1.75 0 0 0 0 2.475L3.757 8l-1.59 1.591a1.75 1.75 0 0 0 0 2.475l1.767 1.768a1.75 1.75 0 0 0 2.475 0z"
            clipRule="evenodd"
        />
    </svg>
);
export default XmarkShape;
