import * as React from 'react';
import type {SVGProps} from 'react';
const Pause = (props: SVGProps<SVGSVGElement>) => (
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
            d="m3.09 14.242.166.008H5.25q.621 0 1.06-.44.44-.438.44-1.06v-9.5q0-.62-.44-1.06a1.45 1.45 0 0 0-1.06-.44H3.256l-.166.008q-.57.061-.953.487-.386.428-.386 1.005v9.493l.01.167v.001q.055.525.43.9t.899.43zm7.5 0 .166.008h1.994q.621 0 1.06-.44.44-.438.44-1.06v-9.5q0-.62-.44-1.06a1.45 1.45 0 0 0-1.06-.44h-1.994l-.166.008h-.001q-.57.061-.953.487-.386.428-.386 1.005v9.493l.01.167v.001q.055.525.43.9.374.375.899.43zM2.75 3.25q0-.207.146-.354a.48.48 0 0 1 .354-.146h2q.207 0 .354.146a.48.48 0 0 1 .146.354v9.5a.48.48 0 0 1-.146.354.48.48 0 0 1-.354.146h-2a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354zm7.5 0q0-.207.146-.354a.48.48 0 0 1 .354-.146h2q.207 0 .354.146a.48.48 0 0 1 .146.354v9.5a.48.48 0 0 1-.146.354.48.48 0 0 1-.354.146h-2a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Pause;
