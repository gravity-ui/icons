import * as React from 'react';
import type {SVGProps} from 'react';
const PaperPlane = (props: SVGProps<SVGSVGElement>) => (
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
            strokeWidth={0}
            d="m14.277 3.923.588.208.017-.048q.204-.616.06-1.254a2.3 2.3 0 0 0-.63-1.141 2.3 2.3 0 0 0-1.141-.63 2.3 2.3 0 0 0-1.302.078L2.596 4.432q-.647.23-1.074.766a2.36 2.36 0 0 0-.508 1.217q-.08.683.213 1.302.293.621.869.993l3.154 2.04 2.04 3.154q.373.576.993.868t1.301.213 1.217-.507q.537-.428.766-1.074l3.296-9.273zm-.826-.294.826.294-.827-.293-3.297 9.271a.84.84 0 0 1-.743.593.84.84 0 0 1-.861-.405L6.75 10.31l3.28-3.28a.72.72 0 0 0 .228-.533.72.72 0 0 0-.22-.537.72.72 0 0 0-.536-.22.72.72 0 0 0-.534.23L5.69 9.249 2.91 7.45a.84.84 0 0 1-.404-.861.84.84 0 0 1 .594-.743l9.27-3.296a.785.785 0 0 1 .883.197q.36.362.213.837z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1.5)*1px))',
            }}
        />
    </svg>
);
export default PaperPlane;
