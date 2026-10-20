import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.082 2.917a.48.48 0 0 0-.354-.146l-5.657.001a.48.48 0 0 0-.354.146.48.48 0 0 0-.147.354q0 .207.147.353a.48.48 0 0 0 .353.147h3.847q.25 0 .25.25a.24.24 0 0 1-.073.177l-8.177 8.177a.48.48 0 0 0-.136.348q.002.205.146.35a.48.48 0 0 0 .35.146.48.48 0 0 0 .352-.141L11.8 4.906q.177-.177.354 0a.24.24 0 0 1 .073.177v3.84q.013.195.155.33a.48.48 0 0 0 .345.137.48.48 0 0 0 .345-.137q.142-.135.155-.33V3.27a.48.48 0 0 0-.146-.354Z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowUpRight;
