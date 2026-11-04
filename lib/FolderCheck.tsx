import * as React from 'react';
import type {SVGProps} from 'react';
const FolderCheck = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.555 2.555A2.65 2.65 0 0 0 .75 4.5V11q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h9a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 15.25 11V6a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12.5 3.25h-5a.24.24 0 0 1-.177-.073l-.62-.621a2.65 2.65 0 0 0-1.946-.806H3.5a2.65 2.65 0 0 0-1.945.805Zm5.062 1.329.366.366H12.5q.725 0 1.237.513.513.512.513 1.237v5q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-9q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.75 11V4.5q0-.725.513-1.237A1.7 1.7 0 0 1 3.5 2.75h1.257q.726 0 1.237.513zm4.128 2.545a.48.48 0 0 0-.195-.33.48.48 0 0 0-.37-.094.48.48 0 0 0-.33.195L7.669 9.108a.25.25 0 0 1-.377.027L6.103 7.947l-.006-.007a.48.48 0 0 0-.357-.159.48.48 0 0 0-.362.147q-.15.15-.147.362a.48.48 0 0 0 .166.363l1.8 1.8a.48.48 0 0 0 .389.145.48.48 0 0 0 .364-.198l2.7-3.6a.48.48 0 0 0 .095-.371Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FolderCheck;
