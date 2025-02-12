import * as React from 'react';
import type {SVGProps} from 'react';
const CheckShape = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.943 8.703 4.301 6.3a.25.25 0 0 0-.355.02L2.299 8.171a.25.25 0 0 0 .023.355l4.785 4.147a.25.25 0 0 0 .36-.032L13.29 5.36a.25.25 0 0 0-.03-.343l-1.856-1.65a.25.25 0 0 0-.364.034zM6.75 6.5l3.104-4.017a1.75 1.75 0 0 1 2.547-.238l1.857 1.651a1.75 1.75 0 0 1 .204 2.401L8.637 13.58a1.75 1.75 0 0 1-2.512.229L1.339 9.66a1.75 1.75 0 0 1-.162-2.486l1.647-1.852A1.75 1.75 0 0 1 5.31 5.19z"
            clipRule="evenodd"
        />
    </svg>
);
export default CheckShape;
