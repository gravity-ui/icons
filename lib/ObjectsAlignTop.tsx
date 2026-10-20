import * as React from 'react';
import type {SVGProps} from 'react';
const ObjectsAlignTop = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.25 2.75q0 .207.146.354a.48.48 0 0 0 .354.146h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Zm1 4.25v5.5q0 .725.513 1.237.512.513 1.237.513h1.5q.725 0 1.237-.513.513-.512.513-1.237V7q0-.725-.513-1.237A1.7 1.7 0 0 0 5.5 5.25H4q-.725 0-1.237.513A1.7 1.7 0 0 0 2.25 7Zm6.5 0v2q0 .725.513 1.237.512.513 1.237.513H12q.725 0 1.237-.513.513-.512.513-1.237V7q0-.725-.513-1.237A1.7 1.7 0 0 0 12 5.25h-1.5q-.725 0-1.237.513A1.7 1.7 0 0 0 8.75 7ZM4 6.25h1.5q.31 0 .53.22t.22.53v5.5a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22H4a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V7q0-.31.22-.53A.72.72 0 0 1 4 6.25Zm6.5 0H12q.31 0 .53.22t.22.53v2a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-1.5a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V7q0-.31.22-.53a.72.72 0 0 1 .53-.22Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ObjectsAlignTop;
