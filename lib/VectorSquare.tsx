import * as React from 'react';
import type {SVGProps} from 'react';
const VectorSquare = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.091 5.194q.2-.322.305-.694h3.208c.259.916.98 1.637 1.896 1.896v3.208A2.76 2.76 0 0 0 9.604 11.5H6.396A2.76 2.76 0 0 0 4.5 9.604V6.396a2.76 2.76 0 0 0 1.591-1.202M13 6.396v3.208q.372.106.694.305a2.75 2.75 0 0 1 .897 3.785A2.751 2.751 0 0 1 9.603 13H6.397q-.106.372-.305.694A2.75 2.75 0 1 1 3 9.604V6.396A2.751 2.751 0 1 1 6.396 3h3.208A2.751 2.751 0 1 1 13 6.396M3.75 2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M5 12.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M12.25 11a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m1.25-7.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
            clipRule="evenodd"
        />
    </svg>
);
export default VectorSquare;
