import * as React from 'react';
import type {SVGProps} from 'react';
const LayoutHeaderSideContent = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.25 5v6q0 1.14.805 1.945A2.65 2.65 0 0 0 4 13.75h8a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 14.75 11V5a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12 2.25H4a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 1.25 5ZM4 3.25h8q.725 0 1.237.513.513.512.513 1.237v.5q0 .25-.25.25h-11q-.25 0-.25-.25V5q0-.725.513-1.237A1.7 1.7 0 0 1 4 3.25ZM2.323 6.823A.24.24 0 0 1 2.5 6.75h2q.25 0 .25.25v5.5q0 .25-.25.25H4q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.25 11V7a.24.24 0 0 1 .073-.177ZM12 12.75H6q-.25 0-.25-.25V7q0-.25.25-.25h7.5a.24.24 0 0 1 .177.073.24.24 0 0 1 .073.177v4q0 .725-.513 1.237A1.7 1.7 0 0 1 12 12.75Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LayoutHeaderSideContent;
