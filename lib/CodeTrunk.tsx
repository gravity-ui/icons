import * as React from 'react';
import type {SVGProps} from 'react';
const CodeTrunk = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.312 4.909A1.25 1.25 0 1 1 3.19 3.593a1.25 1.25 0 0 1 2.123 1.316Zm-2.124 6.182a1.25 1.25 0 1 0 2.125 1.318 1.25 1.25 0 0 0-2.125-1.318ZM5 9.104V6.896a2.751 2.751 0 1 0-1.5 0v2.208A2.751 2.751 0 1 0 6.896 12.5H9.5a3 3 0 0 0 3-2.98V6.895a2.751 2.751 0 1 0-1.5 0V9.5A1.5 1.5 0 0 1 9.5 11H6.896A2.756 2.756 0 0 0 5 9.104Zm7.812-4.195a1.25 1.25 0 1 0-2.125-1.318 1.25 1.25 0 0 0 2.125 1.318Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CodeTrunk;
