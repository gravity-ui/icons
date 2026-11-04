import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsCollapseFromLines = (props: SVGProps<SVGSVGElement>) => (
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
            d="M.75 2.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v10.5q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V2.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146Zm14.5 0a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v10.5q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V2.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146ZM3.647 5.853l1.97 1.97q.177.177 0 .354l-1.97 1.97-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l2.5-2.5A.48.48 0 0 0 7 8a.48.48 0 0 0-.146-.353l-2.5-2.5A.48.48 0 0 0 4 5a.48.48 0 0 0-.353.146.48.48 0 0 0-.146.353q0 .207.146.353Zm8.343-.834a.48.48 0 0 0-.346.13v.001L9.146 7.647A.48.48 0 0 0 9 8q0 .207.146.353l2.5 2.5.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-1.97-1.97q-.177-.177 0-.354l1.967-1.966v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsCollapseFromLines;
