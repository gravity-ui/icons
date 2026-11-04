import * as React from 'react';
import type {SVGProps} from 'react';
const Geo = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.555 2.555A2.65 2.65 0 0 0 1.75 4.5v7q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h7a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-7a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11.5 1.75h-7a2.65 2.65 0 0 0-1.945.805ZM4.5 2.75h5.793q.25 0 .25.25a.25.25 0 0 1-.04.134L7.982 7.1a.24.24 0 0 1-.157.11.24.24 0 0 1-.188-.033l-4.68-2.978q-.17-.107-.1-.297a1.7 1.7 0 0 1 .64-.835A1.7 1.7 0 0 1 4.5 2.75Zm7 10.5H5.707q-.25 0-.25-.25 0-.073.04-.134l2.925-4.597 3.38-5.313q.107-.17.297-.1.518.188.835.64T13.25 4.5v7q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513ZM2.75 11.5V5.707a.24.24 0 0 1 .073-.177A.24.24 0 0 1 3 5.457q.073 0 .134.04L7.1 8.018q.21.135.077.345l-2.978 4.68q-.107.17-.297.1a1.7 1.7 0 0 1-.827-.63A1.7 1.7 0 0 1 2.75 11.5Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Geo;
