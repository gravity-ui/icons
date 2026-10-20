import * as React from 'react';
import type {SVGProps} from 'react';
const FaceAlien = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.75 7q0-2.58-1.73-4.126Q11.206 1.25 8 1.25T2.98 2.874Q1.25 4.42 1.25 7q0 1.683.852 3.24.727 1.326 2 2.447a10.5 10.5 0 0 0 2.282 1.542q1.053.52 1.616.521.563 0 1.616-.521a10.5 10.5 0 0 0 2.281-1.542q1.274-1.12 2-2.448.853-1.556.853-3.239Zm-1 0q0 2.725-2.513 4.937a9.7 9.7 0 0 1-2.062 1.395 6 6 0 0 1-.813.335q-.198.062-.328.08a.3.3 0 0 1-.068 0 2 2 0 0 1-.325-.08 6 6 0 0 1-.815-.335 9.7 9.7 0 0 1-2.063-1.396Q2.25 9.724 2.25 7q0-2.133 1.396-3.381Q5.176 2.249 8 2.25q2.824 0 4.354 1.369Q13.75 4.868 13.75 7Zm-5 2.25q0 .207.146.354a.48.48 0 0 0 .354.146q1.15 0 1.916-.65Q12 8.395 12 7.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146q-1.152 0-1.916.65-.834.705-.834 1.85Zm-2 .5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354q0-1.145-.833-1.85-.767-.65-1.917-.65a.48.48 0 0 0-.354.146A.48.48 0 0 0 4 7.25q0 1.145.833 1.85.767.65 1.917.65Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FaceAlien;
