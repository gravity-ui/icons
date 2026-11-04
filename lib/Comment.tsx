import * as React from 'react';
import type {SVGProps} from 'react';
const Comment = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.588 12.81a.24.24 0 0 1 .172-.063q.118.003.24.003 2.963 0 4.795-1.446Q14.75 9.76 14.75 7t-1.955-4.304Q10.962 1.25 8 1.25q-2.963 0-4.795 1.446Q1.25 4.241 1.25 7q0 2.92 2.172 4.466.116.082.104.225l-.123 1.484q-.036.444.182.833t.617.588.84.14q.443-.057.776-.354zm-3.188.448v-.001l.182-2.192-.58-.414Q2.25 9.405 2.25 7q0-2.275 1.575-3.52Q5.383 2.25 8 2.25t4.175 1.23Q13.75 4.726 13.75 7q0 2.277-1.575 3.52Q10.617 11.75 8 11.75l-.215-.002-.494-.01-2.137 1.898a.42.42 0 0 1-.505.067.42.42 0 0 1-.25-.445Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Comment;
