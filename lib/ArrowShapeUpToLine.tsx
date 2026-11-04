import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeUpToLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.25 2.25a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146zM9.44 4.932a1.78 1.78 0 0 0-1.438-.682h-.003q-.882 0-1.438.682l-3.534 4.32a1.2 1.2 0 0 0-.267.626 1.2 1.2 0 0 0 .109.672 1.2 1.2 0 0 0 .451.51q.3.19.654.19H5q.25 0 .25.25v1.75q0 .621.44 1.06.438.44 1.06.44h2.5q.621 0 1.06-.44.44-.438.44-1.06V11.5q0-.25.25-.25h1.027a1.2 1.2 0 0 0 .654-.19 1.2 1.2 0 0 0 .451-.51 1.2 1.2 0 0 0 .109-.672 1.2 1.2 0 0 0-.268-.627zm2.531 5.318H9.75v3a.48.48 0 0 1-.146.354.48.48 0 0 1-.354.146h-2.5a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354v-3H4.029a.24.24 0 0 1-.177-.073A.24.24 0 0 1 3.78 10q0-.09.057-.158l3.499-4.276A.82.82 0 0 1 8 5.25a.82.82 0 0 1 .665.316l3.5 4.276q.157.194-.036.351a.24.24 0 0 1-.158.057Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeUpToLine;
