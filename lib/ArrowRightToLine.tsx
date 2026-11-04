import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowRightToLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.25 14.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V1.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v12.5q0 .207.146.354a.48.48 0 0 0 .354.146Zm-2.647-6.397A.48.48 0 0 0 11.75 8a.48.48 0 0 0-.146-.353L9.107 5.15h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346H8.4l1.217 1.217q.177.177 0 .354a.24.24 0 0 1-.177.073H1.75a.48.48 0 0 0-.354.146A.48.48 0 0 0 1.25 8q0 .207.146.354a.48.48 0 0 0 .354.146h7.69q.25 0 .25.25a.24.24 0 0 1-.073.177l-1.22 1.22-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowRightToLine;
