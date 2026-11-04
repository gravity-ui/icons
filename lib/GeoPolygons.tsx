import * as React from 'react';
import type {SVGProps} from 'react';
const GeoPolygons = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.555 2.555A2.65 2.65 0 0 0 1.75 4.5v7q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h7a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-7a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11.5 1.75h-7a2.65 2.65 0 0 0-1.945.805Zm7.738.195q.073 0 .134.04a.24.24 0 0 1 .11.156.24.24 0 0 1-.033.188L7.98 7.1q-.135.21-.345.077l-4.68-2.978q-.17-.107-.1-.297a1.7 1.7 0 0 1 .64-.835A1.7 1.7 0 0 1 4.5 2.75zm-4.586 10.5a.25.25 0 0 1-.134-.04.24.24 0 0 1-.11-.156.24.24 0 0 1 .033-.188l2.926-4.597 3.38-5.313q.107-.17.296-.1.52.188.836.64T13.25 4.5v7q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default GeoPolygons;
