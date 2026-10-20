import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.25 9.5q0 .725.513 1.237.512.513 1.237.513h2.998q.25 0 .25.25v1.17q0 .462.248.85.249.39.667.583.42.195.876.133.457-.062.81-.36l5.226-4.42q.675-.573.675-1.456 0-.884-.675-1.455L8.848 2.124a1.55 1.55 0 0 0-.808-.358 1.55 1.55 0 0 0-.875.133q-.418.194-.666.582a1.55 1.55 0 0 0-.249.85V4.5q0 .25-.25.25H3q-.725 0-1.237.513A1.7 1.7 0 0 0 1.25 6.5zm6 3.17v-2.42H3a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53v-3q0-.31.22-.53A.72.72 0 0 1 3 5.75h4.249V3.33q0-.37.336-.526a.54.54 0 0 1 .618.083l5.226 4.421q.32.272.32.692t-.32.692l-5.225 4.42a.54.54 0 0 1-.619.083.54.54 0 0 1-.335-.524z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeRight;
