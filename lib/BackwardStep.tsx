import * as React from 'react';
import type {SVGProps} from 'react';
const BackwardStep = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.75 2.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v10.5q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354zm9.295-.179-.102.06h-.001L5.467 6.732Q4.768 7.174 4.768 8q0 .825.699 1.268l6.48 4.105q.723.457 1.483.07.756-.386.815-1.223l.005-.119v-8.2l-.005-.12q-.058-.807-.772-1.2-.715-.393-1.427-.01Zm.947.886q.26.143.258.44v8.21a.47.47 0 0 1-.26.438.47.47 0 0 1-.508-.017l-6.48-4.106A.47.47 0 0 1 5.77 8q0-.275.232-.422l6.48-4.105a.47.47 0 0 1 .51-.016Z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default BackwardStep;
