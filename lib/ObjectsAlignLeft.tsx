import * as React from 'react';
import type {SVGProps} from 'react';
const ObjectsAlignLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.75 1.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v12.5q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V1.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146Zm4.25 1q-.725 0-1.237.513A1.7 1.7 0 0 0 5.25 4v1.5q0 .725.513 1.237.512.513 1.237.513h5.5q.725 0 1.237-.513.513-.512.513-1.237V4q0-.725-.513-1.237A1.7 1.7 0 0 0 12.5 2.25zM6.25 4q0-.31.22-.53A.72.72 0 0 1 7 3.25h5.5q.31 0 .53.22t.22.53v1.5a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22H7a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53zM7 8.75q-.725 0-1.237.513A1.7 1.7 0 0 0 5.25 10.5V12q0 .725.513 1.237.512.513 1.237.513h2q.725 0 1.237-.513.513-.512.513-1.237v-1.5q0-.725-.513-1.237A1.7 1.7 0 0 0 9 8.75zm-.75 1.75q0-.31.22-.53A.72.72 0 0 1 7 9.75h2q.31 0 .53.22t.22.53V12a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22H7a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ObjectsAlignLeft;
