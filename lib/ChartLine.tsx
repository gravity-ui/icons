import * as React from 'react';
import {SVGProps} from 'react';
const ChartLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15.03 1.47a.75.75 0 0 1 0 1.06l-2.92 2.92a2.75 2.75 0 0 1-3.308.443l-.739-.422a1.25 1.25 0 0 0-1.57.272L4.57 7.988a.75.75 0 1 1-1.138-.976l1.924-2.245a2.75 2.75 0 0 1 3.452-.598l.739.422a1.25 1.25 0 0 0 1.504-.202l2.92-2.92a.75.75 0 0 1 1.06 0Zm.14 6.195a.75.75 0 0 1-.335 1.006l-3.17 1.585a2.75 2.75 0 0 1-2.313.068L7.7 9.616a1.25 1.25 0 0 0-1.185.109l-2.099 1.399a.75.75 0 1 1-.832-1.248l2.099-1.4a2.75 2.75 0 0 1 2.608-.239l1.652.708a1.25 1.25 0 0 0 1.051-.03l3.17-1.586a.75.75 0 0 1 1.007.336ZM1.25 2a.75.75 0 0 1 .75.75V12a.5.5 0 0 0 .5.5h12.25a.75.75 0 0 1 0 1.5H2.5a2 2 0 0 1-2-2V2.75A.75.75 0 0 1 1.25 2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartLine;
