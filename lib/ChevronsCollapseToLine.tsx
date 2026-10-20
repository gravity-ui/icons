import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsCollapseToLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.5 2.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 2.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v10.5q0 .207.146.354A.48.48 0 0 0 8 13.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354zM2.397 5.853l1.97 1.97q.177.177 0 .354l-1.97 1.97-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l2.5-2.5A.48.48 0 0 0 5.75 8a.48.48 0 0 0-.146-.353l-2.5-2.5A.48.48 0 0 0 2.75 5a.48.48 0 0 0-.353.146.48.48 0 0 0-.146.353q0 .207.146.353ZM13.24 5.02a.48.48 0 0 0-.346.13v.001l-2.497 2.497A.48.48 0 0 0 10.25 8q0 .207.146.353l2.5 2.5.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-1.97-1.97A.24.24 0 0 1 11.56 8a.24.24 0 0 1 .073-.177L13.6 5.857v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsCollapseToLine;
