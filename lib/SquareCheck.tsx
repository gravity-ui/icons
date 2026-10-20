import * as React from 'react';
import type {SVGProps} from 'react';
const SquareCheck = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.555 2.555A2.65 2.65 0 0 0 1.75 4.5v7q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h7a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-7a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11.5 1.75h-7a2.65 2.65 0 0 0-1.945.805Zm8.945.195q.725 0 1.237.513.513.512.513 1.237v7q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-7q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.75 11.5v-7q0-.725.513-1.237A1.7 1.7 0 0 1 4.5 2.75zm-.897 2.446v.001L7.627 9.022l-.02.024q-.177.177-.354 0L5.857 7.65a.48.48 0 0 0-.352-.141.48.48 0 0 0-.35.146.48.48 0 0 0-.146.35.48.48 0 0 0 .137.348l2 2a.48.48 0 0 0 .385.145.48.48 0 0 0 .364-.191l3.497-4.497v-.001a.48.48 0 0 0 .09-.362.48.48 0 0 0-.188-.325.48.48 0 0 0-.362-.102.48.48 0 0 0-.328.176Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default SquareCheck;
