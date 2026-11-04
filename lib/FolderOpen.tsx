import * as React from 'react';
import type {SVGProps} from 'react';
const FolderOpen = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 6a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11 3.25H7a.24.24 0 0 1-.177-.073l-.62-.621a2.65 2.65 0 0 0-1.946-.806H3a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 .25 4.5V11q0 1.14.805 1.945A2.65 2.65 0 0 0 3 13.75h8.301q.725 0 1.355-.357t1.004-.979l1.79-2.985q.27-.45.297-.975a2.1 2.1 0 0 0-.198-1 2.1 2.1 0 0 0-.645-.789 2.1 2.1 0 0 0-.941-.392q-.213-.032-.213-.247zM6.116 3.883l.352.352.015.015H11q.725 0 1.237.513.513.512.513 1.237 0 .25-.25.25H5.45q-.724 0-1.356.357-.63.357-1.004.979L1.714 9.879q-.128.214-.343.085a.24.24 0 0 1-.121-.214V4.5q0-.725.513-1.237A1.7 1.7 0 0 1 3 2.75h1.258q.725 0 1.237.513zM11.3 12.75H3.099q-.64 0-.956-.558-.314-.557.013-1.106l1.792-2.987q.236-.394.638-.622t.863-.227h8.202q.64 0 .956.558.315.557-.013 1.106l-1.792 2.987a1.7 1.7 0 0 1-.638.622 1.7 1.7 0 0 1-.863.227Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FolderOpen;
