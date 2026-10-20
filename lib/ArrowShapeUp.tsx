import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.5 14.75q.725 0 1.237-.513.513-.512.513-1.237v-3q0-.25.25-.25h1.17q.46 0 .848-.25.388-.247.582-.666.194-.418.132-.874a1.55 1.55 0 0 0-.358-.809l-4.42-5.225A1.82 1.82 0 0 0 8 1.251q-.885 0-1.456.675l-4.42 5.226a1.55 1.55 0 0 0-.358.809q-.062.456.133.875.194.417.583.666.388.248.85.248H4.5q.25 0 .25.25v3q0 .725.513 1.237.512.513 1.237.513zm3.17-6h-2.42V13a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-3a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V8.75H3.33a.54.54 0 0 1-.525-.335.54.54 0 0 1 .081-.617l4.421-5.226A.87.87 0 0 1 8 2.25q.42 0 .692.322l4.422 5.224a.54.54 0 0 1 .082.619.54.54 0 0 1-.524.335z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeUp;
