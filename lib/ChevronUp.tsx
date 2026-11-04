import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.147 10.353a.48.48 0 0 0 .353.146.48.48 0 0 0 .353-.146A.48.48 0 0 0 13 10a.48.48 0 0 0-.146-.353l-4.5-4.5A.48.48 0 0 0 8 5a.48.48 0 0 0-.353.146l-4.5 4.5-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l3.97-3.97q.177-.177.354 0z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronUp;
