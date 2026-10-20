import * as React from 'react';
import type {SVGProps} from 'react';
const SquareLetterT = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.555 2.555A2.65 2.65 0 0 0 1.75 4.5v7q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h7a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-7a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11.5 1.75h-7a2.65 2.65 0 0 0-1.945.805Zm8.945.195q.725 0 1.237.513.513.512.513 1.237v7q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-7q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.75 11.5v-7q0-.725.513-1.237A1.7 1.7 0 0 1 4.5 2.75zm-6 2.75q0 .207.146.354A.48.48 0 0 0 6 6h1.25q.25 0 .25.25v4.25q0 .207.146.354A.48.48 0 0 0 8 11a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V6.25q0-.25.25-.25H10a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354A.48.48 0 0 0 10 5H6a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default SquareLetterT;
