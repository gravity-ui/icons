import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.99 4.019a.48.48 0 0 0-.346.13v.001L8.146 7.647A.48.48 0 0 0 8 8q0 .207.146.353l3.5 3.5.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-2.97-2.97q-.177-.177 0-.354l2.967-2.966v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146Zm-4.64 7.124L4.382 8.177A.24.24 0 0 1 4.31 8a.24.24 0 0 1 .073-.177L7.35 4.857v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146.48.48 0 0 0-.346.13v.001L3.146 7.647A.48.48 0 0 0 3 8q0 .207.146.353l3.496 3.497h.001q.147.135.346.131a.48.48 0 0 0 .345-.146.48.48 0 0 0 .146-.345.48.48 0 0 0-.13-.346z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsLeft;
