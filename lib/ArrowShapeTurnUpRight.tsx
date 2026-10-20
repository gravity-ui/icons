import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeTurnUpRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.63 13.715q1.446-2.592 3.29-3.22a4.9 4.9 0 0 1 1.58-.245q.25 0 .25.25v1.165q0 .462.247.85.247.39.666.586.417.195.875.136t.812-.354l4.72-3.935a1.8 1.8 0 0 0 .68-1.448 1.8 1.8 0 0 0-.678-1.448L10.35 2.117a1.55 1.55 0 0 0-.812-.354 1.55 1.55 0 0 0-.875.136q-.418.196-.666.585-.247.39-.247.85V4.5a.24.24 0 0 1-.073.177.24.24 0 0 1-.177.073q-1.45 0-2.768.51a6.4 6.4 0 0 0-2.38 1.573Q.043 9.275.853 13.536q.06.312.312.512.255.202.585.202.581 0 .88-.534Zm6.12-2.05V9.25H7.5q-1.82 0-3.208.958-1.15.794-2.132 2.34-.133.212-.345.078a.24.24 0 0 1-.115-.185q-.327-3.12 1.377-4.92a5.4 5.4 0 0 1 2.015-1.328A6.6 6.6 0 0 1 7.5 5.75h1.25V3.335q0-.372.337-.53a.54.54 0 0 1 .624.081l4.72 3.934a.85.85 0 0 1 .318.68.85.85 0 0 1-.32.68L9.71 12.114a.54.54 0 0 1-.623.081.54.54 0 0 1-.337-.53Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeTurnUpRight;
