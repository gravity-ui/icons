import * as React from 'react';
import type {SVGProps} from 'react';
const LogoWindows = (props: SVGProps<SVGSVGElement>) => (
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
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M1.25 5.602v4.796q0 1.026.673 1.802a2.67 2.67 0 0 0 1.688.92l8 1.144a2.63 2.63 0 0 0 2.191-.646 2.63 2.63 0 0 0 .948-2.078V4.459q0-1.256-.948-2.077a2.63 2.63 0 0 0-2.19-.646l-8 1.143a2.67 2.67 0 0 0-1.69.921 2.67 2.67 0 0 0-.672 1.802Zm7.465-2.441 3.038-.434q.79-.114 1.394.41t.603 1.322V7.25q0 .25-.25.25H8.75q-.25 0-.25-.25V3.408q0-.217.215-.247ZM7.5 3.622V7.25q0 .25-.25.25H2.5q-.25 0-.25-.25V5.602q0-.654.428-1.147a1.7 1.7 0 0 1 1.075-.585l3.462-.495a.24.24 0 0 1 .185.047.24.24 0 0 1 .1.2ZM7.25 8.5q.25 0 .25.25v3.628l-.003.035q-.034.248-.282.212l-3.462-.495a1.7 1.7 0 0 1-1.075-.585 1.7 1.7 0 0 1-.428-1.147V8.75q0-.25.25-.25zm1.5 0h4.75a.24.24 0 0 1 .177.073.24.24 0 0 1 .073.177v2.79q0 .799-.603 1.323t-1.394.41l-3.038-.434q-.215-.03-.215-.247V8.75q0-.25.25-.25Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LogoWindows;
