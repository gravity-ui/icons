import * as React from 'react';
import type {SVGProps} from 'react';
const LocationArrow = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.746 9.455.656 3.613v.002l.005.02q.123.675.632 1.136.51.462 1.194.517a1.97 1.97 0 0 0 1.261-.317 1.97 1.97 0 0 0 .807-1.02l3.328-9.359q.204-.57.07-1.162a2.06 2.06 0 0 0-.563-1.02 2.06 2.06 0 0 0-1.02-.563 2.06 2.06 0 0 0-1.163.07L2.595 4.699a1.97 1.97 0 0 0-1.022.806 1.97 1.97 0 0 0-.318 1.263q.056.686.517 1.194.462.51 1.139.632l3.634.66a.23.23 0 0 1 .201.201Zm6.94-5.741L10.36 13.07l-.009.02v.002l-.001.001a1 1 0 0 1-.399.494 1 1 0 0 1-.638.161 1 1 0 0 1-.605-.262 1 1 0 0 1-.32-.576L7.73 9.277l-.155-.852-.852-.155-3.634-.661a1 1 0 0 1-.574-.32 1 1 0 0 1-.261-.603 1 1 0 0 1 .16-.638 1 1 0 0 1 .516-.408l9.356-3.326a1.07 1.07 0 0 1 .609-.038q.31.07.534.295t.295.534-.038.609Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LocationArrow;
