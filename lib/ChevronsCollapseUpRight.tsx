import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsCollapseUpRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15.75 6.243a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H10.5q-.25 0-.25-.25V.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 9.75.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v5.493q0 .207.147.353a.48.48 0 0 0 .353.147h5.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354ZM.25 9.757q0 .207.146.354a.48.48 0 0 0 .354.146H5.5q.25 0 .25.25v4.743q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V9.757a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsCollapseUpRight;
