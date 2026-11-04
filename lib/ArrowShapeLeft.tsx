import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.75 6.5q0-.725-.513-1.237A1.7 1.7 0 0 0 13 4.75h-3q-.25 0-.25-.25V3.33q0-.462-.248-.85a1.55 1.55 0 0 0-.667-.583 1.55 1.55 0 0 0-.876-.133 1.55 1.55 0 0 0-.81.36l-5.225 4.42Q1.25 7.118 1.25 8q0 .884.675 1.455l5.225 4.421q.353.299.81.36t.876-.133q.418-.194.667-.583.248-.388.248-.85V11.5q0-.25.25-.25h3q.725 0 1.237-.513.513-.512.513-1.237zm-6-3.17v2.42H13q.31 0 .53.22t.22.53v3a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22H8.75v2.42a.54.54 0 0 1-.336.526.54.54 0 0 1-.618-.083L2.57 8.692A.87.87 0 0 1 2.25 8q0-.42.32-.692l5.225-4.42a.54.54 0 0 1 .62-.084q.335.157.335.526Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeLeft;
