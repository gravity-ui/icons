import * as React from 'react';
import type {SVGProps} from 'react';
const MinusShape = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.75 9.5h10.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25m10.5 1.5H2.75A1.75 1.75 0 0 1 1 9.25v-2.5C1 5.784 1.784 5 2.75 5h10.5c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 11"
            clipRule="evenodd"
        />
    </svg>
);
export default MinusShape;
