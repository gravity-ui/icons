import * as React from 'react';
import {SVGProps} from 'react';
const Eraser = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.06 6.56 1.769 9.855a.914.914 0 0 0 0 1.292l1.42 1.421A.747.747 0 0 1 3.5 12.5h3.379l2.06-2.06-3.878-3.88Zm8.233 1.647L9 12.5h6.25a.75.75 0 0 1 0 1.5H2.5L.707 12.207a2.414 2.414 0 0 1 0-3.414l6.586-6.586a2.414 2.414 0 0 1 3.414 0l2.586 2.586a2.414 2.414 0 0 1 0 3.414Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Eraser;
