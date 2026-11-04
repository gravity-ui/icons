import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsExpandFromLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.5 2.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 2.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v10.5q0 .207.146.354A.48.48 0 0 0 8 13.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354zM4.603 5.853A.48.48 0 0 0 4.75 5.5a.48.48 0 0 0-.146-.353A.48.48 0 0 0 4.25 5a.48.48 0 0 0-.353.146l-2.5 2.5A.48.48 0 0 0 1.25 8q0 .207.146.353l2.5 2.5.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-1.97-1.97q-.177-.177 0-.354l1.97-1.97Zm6.812-.688a.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346h.001l1.967 1.967q.177.177 0 .354l-1.97 1.97-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l2.5-2.5A.48.48 0 0 0 14.75 8a.48.48 0 0 0-.146-.353L12.107 5.15h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsExpandFromLine;
