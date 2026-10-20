import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.077 12.372h-.001l-8.17-8.175a.24.24 0 0 1-.073-.177q0-.25.25-.25H8.93q.207 0 .353-.147a.48.48 0 0 0 .146-.353.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146l-5.658.001a.48.48 0 0 0-.353.147.48.48 0 0 0-.146.353v5.652q.013.195.155.33a.48.48 0 0 0 .345.137.48.48 0 0 0 .345-.137q.142-.135.155-.33v-3.84a.24.24 0 0 1 .073-.177.24.24 0 0 1 .177-.073.24.24 0 0 1 .177.073l8.171 8.173h.001q.147.135.346.131a.48.48 0 0 0 .345-.146.48.48 0 0 0 .146-.345.48.48 0 0 0-.13-.346z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowUpLeft;
