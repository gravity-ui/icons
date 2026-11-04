import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.5 1.25q-.725 0-1.237.513A1.7 1.7 0 0 0 4.75 3v3q0 .25-.25.25H3.329q-.46 0-.85.249a1.55 1.55 0 0 0-.582.666q-.194.42-.132.876.061.456.359.809l4.42 5.225q.573.675 1.456.675.884 0 1.455-.675l4.421-5.226q.297-.351.359-.809a1.55 1.55 0 0 0-.133-.875 1.55 1.55 0 0 0-.582-.667 1.55 1.55 0 0 0-.85-.248H11.5q-.25 0-.25-.25V3q0-.725-.513-1.237A1.7 1.7 0 0 0 9.5 1.25zm-3.17 6h2.42V3q0-.31.22-.53a.72.72 0 0 1 .53-.22h3q.31 0 .53.22t.22.53v4.25h2.42a.54.54 0 0 1 .524.336.54.54 0 0 1-.081.616L8.692 13.43a.87.87 0 0 1-.692.32.87.87 0 0 1-.693-.322l-4.42-5.224a.54.54 0 0 1-.082-.619.54.54 0 0 1 .524-.335z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeDown;
