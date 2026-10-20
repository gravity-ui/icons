import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsCollapseHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.267 3.766a.48.48 0 0 0-.147.35.48.48 0 0 0 .138.348l3.358 3.36q.177.176 0 .353L1.263 11.53l-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l3.884-3.884A.48.48 0 0 0 6 8a.48.48 0 0 0-.146-.353L1.967 3.76a.48.48 0 0 0-.351-.14.48.48 0 0 0-.35.146Zm10.117 4.057 3.35-3.35v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146.48.48 0 0 0-.346.13v.001l-3.881 3.88A.48.48 0 0 0 10 8q0 .207.146.353l3.885 3.886a.48.48 0 0 0 .352.141.48.48 0 0 0 .35-.146.48.48 0 0 0 .146-.35.48.48 0 0 0-.137-.348l-3.359-3.36q-.177-.176 0-.353Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsCollapseHorizontal;
