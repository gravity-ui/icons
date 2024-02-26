import * as React from 'react';
import type {SVGProps} from 'react';
const Ghost = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.277 11.702 13.5 12V8a5.5 5.5 0 1 0-11 0v4.547l1.956-1.63a1.801 1.801 0 0 1 2.537.231l1.935 2.323a.08.08 0 0 0 .125-.001l1.45-1.811a1.755 1.755 0 0 1 2.774.043Zm-3.052 2.705.686-.859h.001l.144-.18.618-.772a.255.255 0 0 1 .402.006l.593.79.139.185v.001l.392.522a1 1 0 0 0 1.8-.6V8A7 7 0 1 0 1 8v5.399a1.101 1.101 0 0 0 1.806.846l2.61-2.175a.301.301 0 0 1 .424.038l1.936 2.323a1.58 1.58 0 0 0 2.449-.024ZM7 8a.75.75 0 0 0 .75-.75v-1a.75.75 0 1 0-1.5 0v1c0 .414.336.75.75.75Zm4 0a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Ghost;
