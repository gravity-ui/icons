import * as React from 'react';
import type {SVGProps} from 'react';
const ChartTreemap = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.555 2.555A2.65 2.65 0 0 0 1.75 4.5v7q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h7a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-7a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11.5 1.75h-7a2.65 2.65 0 0 0-1.945.805ZM4.5 2.75H8q.25 0 .25.25v5.5q0 .25-.25.25H3q-.25 0-.25-.25v-4q0-.725.513-1.237A1.7 1.7 0 0 1 4.5 2.75ZM9.25 8.5V3q0-.25.25-.25h2q.725 0 1.237.513.513.512.513 1.237v4q0 .25-.25.25H9.5q-.25 0-.25-.25ZM2.75 10q0-.25.25-.25h3q.25 0 .25.25v3q0 .25-.25.25H4.5q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.75 11.5zm4.75 3.25q-.25 0-.25-.25v-3q0-.25.25-.25h3.75q.25 0 .25.25v3q0 .25-.25.25z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChartTreemap;
