import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsExpandUpRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.254 2.754q0 .207.146.354a.48.48 0 0 0 .354.146h4.75q.25 0 .25.25v4.742q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V2.754a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-5.5A.48.48 0 0 0 7.4 2.4a.48.48 0 0 0-.146.354ZM8.6 13.6a.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-4.75q-.25 0-.25-.25V7.754A.48.48 0 0 0 3.1 7.4a.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v5.492q0 .207.146.354a.48.48 0 0 0 .354.146h5.5A.48.48 0 0 0 8.6 13.6Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsExpandUpRight;
