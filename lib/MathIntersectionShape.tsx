import * as React from 'react';
import type {SVGProps} from 'react';
const MathIntersectionShape = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.25 13.25V7.5q0-1.193-.439-2.3a6.2 6.2 0 0 0-1.392-2.12 6.2 6.2 0 0 0-2.118-1.391A6.2 6.2 0 0 0 8 1.25q-1.193 0-2.3.439A6.2 6.2 0 0 0 3.58 3.08a6.2 6.2 0 0 0-1.39 2.119A6.2 6.2 0 0 0 1.75 7.5v5.75q0 .621.44 1.06.438.44 1.06.44h1.5q.621 0 1.06-.44.44-.438.44-1.06V7.5q0-.725.513-1.237A1.7 1.7 0 0 1 8 5.75q.725 0 1.237.513.513.512.513 1.237v5.75q0 .621.44 1.06.438.44 1.06.44h1.5q.621 0 1.06-.44.44-.438.44-1.06Zm-1-5.75v5.75a.48.48 0 0 1-.146.354.48.48 0 0 1-.354.146h-1.5a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354V7.5a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 8 4.75a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 5.25 7.5v5.75a.48.48 0 0 1-.146.354.48.48 0 0 1-.354.146h-1.5a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354V7.5q0-1.002.369-1.932a5.2 5.2 0 0 1 1.169-1.78 5.2 5.2 0 0 1 1.78-1.17A5.2 5.2 0 0 1 8 2.25a5.2 5.2 0 0 1 2.01.4 5.2 5.2 0 0 1 1.702 1.138A5.2 5.2 0 0 1 12.85 5.49a5.2 5.2 0 0 1 .4 2.009Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default MathIntersectionShape;
