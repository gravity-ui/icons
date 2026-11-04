import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronUpWide = (props: SVGProps<SVGSVGElement>) => (
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
            d="m2.769 9.922 5.097-3.244a.23.23 0 0 1 .268 0l5.097 3.244a.48.48 0 0 0 .377.067.48.48 0 0 0 .314-.22.48.48 0 0 0 .067-.377.48.48 0 0 0-.22-.314l-5.5-3.5a.465.465 0 0 0-.538 0l-5.5 3.5a.48.48 0 0 0-.22.314.48.48 0 0 0 .067.377q.111.175.314.22.201.044.377-.067Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronUpWide;
