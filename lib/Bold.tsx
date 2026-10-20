import * as React from 'react';
import type {SVGProps} from 'react';
const Bold = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.75 3v10q0 .207.147.353a.48.48 0 0 0 .353.147H9.5a2.92 2.92 0 0 0 1.858-.643 2.92 2.92 0 0 0 1.06-1.656 2.92 2.92 0 0 0-.192-1.957 2.92 2.92 0 0 0-1.362-1.417.25.25 0 0 1-.136-.203.24.24 0 0 1 .058-.182q.569-.668.687-1.537a2.94 2.94 0 0 0-.25-1.665 2.94 2.94 0 0 0-1.107-1.268A2.94 2.94 0 0 0 8.5 2.5H4.25a.48.48 0 0 0-.354.146A.48.48 0 0 0 3.75 3Zm5.414 3.914Q8.58 7.5 7.75 7.5h-2q-.25 0-.25-.25v-3.5q0-.25.25-.25h2q.829 0 1.414.586.586.585.586 1.414t-.586 1.414ZM5.5 12.25v-3.5q0-.25.25-.25h3q.829 0 1.414.586.586.585.586 1.414t-.586 1.414q-.585.586-1.414.586h-3q-.25 0-.25-.25Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Bold;
