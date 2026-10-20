import * as React from 'react';
import type {SVGProps} from 'react';
const CreditCard = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.555 3.555A2.65 2.65 0 0 0 .75 5.5v5q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h9a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-5a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12.5 2.75h-9a2.65 2.65 0 0 0-1.945.805ZM3.5 3.75h9q.725 0 1.237.513.513.512.513 1.237 0 .25-.25.25H2q-.25 0-.25-.25 0-.725.513-1.237A1.7 1.7 0 0 1 3.5 3.75ZM1.823 6.823A.24.24 0 0 1 2 6.75h12q.25 0 .25.25v3.5q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-9q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.75 10.5V7a.24.24 0 0 1 .073-.177ZM3.75 9.75q0 .207.146.354a.48.48 0 0 0 .354.146h2.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-2.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CreditCard;
