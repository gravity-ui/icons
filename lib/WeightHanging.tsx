import * as React from 'react';
import type {SVGProps} from 'react';
const WeightHanging = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.75 2.5q0 .738.436 1.332.435.594 1.139.816.175.054.175.238V6q0 .25-.25.25H4.347q-.741 0-1.337.44a2.2 2.2 0 0 0-.814 1.148l-1.11 3.604-.251.82a1.83 1.83 0 0 0 .291 1.708q.576.78 1.547.78h10.655q.97 0 1.545-.781.576-.78.291-1.707l-1.36-4.424a2.2 2.2 0 0 0-.814-1.148 2.2 2.2 0 0 0-1.336-.44H8.75q-.25 0-.25-.25V4.886q0-.184.175-.238.825-.26 1.265-1.006.438-.747.264-1.594a2.18 2.18 0 0 0-.872-1.36 2.18 2.18 0 0 0-1.56-.425 2.18 2.18 0 0 0-1.441.73q-.58.641-.581 1.507ZM8 3.75q-.518 0-.884-.366A1.2 1.2 0 0 1 6.75 2.5q0-.518.366-.884T8 1.25t.884.366.366.884-.366.884A1.2 1.2 0 0 1 8 3.75ZM3.152 8.132a1.22 1.22 0 0 1 .452-.637 1.22 1.22 0 0 1 .742-.245h7.308q.411 0 .743.245.33.244.452.638l1.36 4.423a.88.88 0 0 1-.14.82.88.88 0 0 1-.742.374H2.673a.88.88 0 0 1-.742-.375.88.88 0 0 1-.14-.82z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default WeightHanging;
