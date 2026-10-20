import * as React from 'react';
import type {SVGProps} from 'react';
const ChartLineArrowUp = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M14.75 3.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H11a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354A.48.48 0 0 0 11 3.75h1.44q.25 0 .25.25a.24.24 0 0 1-.073.177l-3.242 3.24a1 1 0 0 1-.525.276 1 1 0 0 1-.589-.07l-2.42-1.075a1.94 1.94 0 0 0-1.355-.096 1.94 1.94 0 0 0-1.104.792l-2.044 2.972a.48.48 0 0 0-.08.374.48.48 0 0 0 .209.321.48.48 0 0 0 .374.08.48.48 0 0 0 .321-.209L4.206 7.81a.97.97 0 0 1 .552-.396.97.97 0 0 1 .679.049L7.856 8.54q.567.252 1.177.138t1.05-.552l3.24-3.242q.177-.177.354 0a.24.24 0 0 1 .073.177V6.5q0 .207.146.354A.48.48 0 0 0 14.25 7a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354zm.5 10a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h13.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354Z"
                style={{
                    strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
                }}
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default ChartLineArrowUp;
