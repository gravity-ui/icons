import * as React from 'react';
import type {SVGProps} from 'react';
const Tv = (props: SVGProps<SVGSVGElement>) => (
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
            d="M.25 10q0 1.083.739 1.876a2.66 2.66 0 0 0 1.818.868.24.24 0 0 1 .172.085.25.25 0 0 1 .035.276l-.461.921a.48.48 0 0 0-.03.386.48.48 0 0 0 .251.29q.186.094.384.027a.48.48 0 0 0 .288-.254l.794-1.587a.23.23 0 0 1 .224-.138h7.072q.154 0 .224.138l.794 1.585.005.011a.48.48 0 0 0 .288.27.48.48 0 0 0 .393-.024.48.48 0 0 0 .255-.3.48.48 0 0 0-.049-.403l-.46-.922a.24.24 0 0 1-.013-.191.25.25 0 0 1 .22-.17q1.08-.075 1.819-.869A2.66 2.66 0 0 0 15.75 10V5a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 13 2.25H3a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 .25 5zM13 3.25q.725 0 1.237.513.513.512.513 1.237v5q0 .725-.513 1.237A1.7 1.7 0 0 1 13 11.75H3q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.25 10V5q0-.725.513-1.237A1.7 1.7 0 0 1 3 3.25z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Tv;
