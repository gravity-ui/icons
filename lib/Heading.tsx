import * as React from 'react';
import type {SVGProps} from 'react';
const Heading = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.75 3a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146A.48.48 0 0 0 3.75 3v10q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146A.48.48 0 0 0 4.75 13V8.75q0-.25.25-.25h6q.25 0 .25.25V13q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V3a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v4.25q0 .25-.25.25H5q-.25 0-.25-.25z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Heading;
