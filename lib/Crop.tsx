import * as React from 'react';
import type {SVGProps} from 'react';
const Crop = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 .75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 3.5.25a.48.48 0 0 0-.354.146A.48.48 0 0 0 3 .75V2.5q0 .25-.25.25h-2a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h2Q3 3.75 3 4v8.5q0 .207.146.354A.48.48 0 0 0 3.5 13h8.25q.25 0 .25.25v2q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354v-2q0-.25.25-.25h2a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-2q-.25 0-.25-.25v-8.5a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H4.25Q4 2.75 4 2.5zm0 11V4a.24.24 0 0 1 .073-.177.24.24 0 0 1 .177-.073h7.5q.25 0 .25.25v7.75q0 .25-.25.25h-7.5Q4 12 4 11.75Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Crop;
