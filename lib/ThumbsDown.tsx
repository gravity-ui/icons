import * as React from 'react';
import type {SVGProps} from 'react';
const ThumbsDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.668 8.888a.48.48 0 0 0 .366.124.48.48 0 0 0 .346-.174q.136-.16.117-.373l-.5-6.996a.48.48 0 0 0-.174-.336.48.48 0 0 0-.36-.118.48.48 0 0 0-.339.168.48.48 0 0 0-.125.352l.5 7.005q.012.21.169.348Zm-4.824 5.027 2.893-4.96.008-.014-.48-6.717-4.89-.576a3.64 3.64 0 0 0-2.529.612 3.64 3.64 0 0 0-1.522 2.11l-.88 3.162a1.66 1.66 0 0 0 .294 1.527q.525.69 1.393.691h2.94q.25 0 .25.25a.3.3 0 0 1-.006.052l-.32 1.5-.25 1.163q-.133.608.162 1.155t.874.772q.58.224 1.165.018t.898-.744Zm1.277-10.818q.205.024.22.23l.38 5.3a.25.25 0 0 1-.034.144l-2.708 4.64a.66.66 0 0 1-.363.3.66.66 0 0 1-.473-.007.66.66 0 0 1-.354-.312.66.66 0 0 1-.066-.467l.57-2.663.325-1.512H3.13a.71.71 0 0 1-.597-.296.71.71 0 0 1-.126-.655l.88-3.162A2.67 2.67 0 0 1 4.401 3.09a2.67 2.67 0 0 1 1.844-.45h.002l.01.002z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ThumbsDown;
