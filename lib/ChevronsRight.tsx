import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="m3.65 4.857 2.967 2.966q.177.177 0 .354l-2.97 2.97-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l3.5-3.5A.48.48 0 0 0 8 8a.48.48 0 0 0-.146-.353L4.357 4.15h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346zm5 0 2.967 2.966q.177.177 0 .354l-2.97 2.97-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l3.5-3.5A.48.48 0 0 0 13 8a.48.48 0 0 0-.146-.353L9.357 4.15h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsRight;
