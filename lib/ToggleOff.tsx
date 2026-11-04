import * as React from 'react';
import type {SVGProps} from 'react';
const ToggleOff = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.5 2.75q-1.002 0-1.932.369a5.2 5.2 0 0 0-1.78 1.169 5.2 5.2 0 0 0-1.17 1.78A5.2 5.2 0 0 0 .25 8q0 1.002.369 1.932a5.2 5.2 0 0 0 1.169 1.78 5.2 5.2 0 0 0 1.78 1.17q.93.368 1.932.368h5q1.002 0 1.932-.369a5.2 5.2 0 0 0 1.78-1.169 5.2 5.2 0 0 0 1.17-1.78q.368-.93.368-1.932t-.369-1.932a5.2 5.2 0 0 0-1.169-1.78 5.2 5.2 0 0 0-1.78-1.17A5.2 5.2 0 0 0 10.5 2.75zM10.75 8q0-1.084-.43-2.08a5.2 5.2 0 0 0-1.217-1.738A.24.24 0 0 1 9.025 4a.24.24 0 0 1 .073-.177.24.24 0 0 1 .177-.073H10.5q1.76 0 3.005 1.245T14.75 8t-1.245 3.005T10.5 12.25H9.275a.24.24 0 0 1-.182-.078.24.24 0 0 1-.068-.18.24.24 0 0 1 .078-.174 5.2 5.2 0 0 0 1.218-1.739q.429-.994.429-2.079Zm-9.5 0q0-1.76 1.245-3.005Q3.739 3.75 5.5 3.75t3.005 1.245Q9.75 6.24 9.75 8t-1.245 3.005T5.5 12.25t-3.005-1.245T1.25 8Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ToggleOff;
