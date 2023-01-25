import * as React from 'react';
import {SVGProps} from 'react';
const ChartAreaStacked = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14 12a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 12v-.25l3.044-2.283a1.242 1.242 0 0 1 1.301-.117l1.584.791a3.397 3.397 0 0 0 3.342-.172L14 8.233V12Zm0-5.545-3.534 2.248A1.896 1.896 0 0 1 8.6 8.8l-1.584-.792a2.743 2.743 0 0 0-2.872.259L2 9.875v-.748a1.5 1.5 0 0 1 .371-.988l2.256-2.577a1.31 1.31 0 0 1 1.303-.408l3.104.776a2.358 2.358 0 0 0 2.362-.753l1.842-2.15a.433.433 0 0 1 .762.282v3.146Zm1.5-.955V12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V9.127a3 3 0 0 1 .742-1.975l2.256-2.578a2.81 2.81 0 0 1 2.796-.876l3.104.776a.857.857 0 0 0 .859-.273l1.842-2.15A1.933 1.933 0 0 1 15.5 3.309V5.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartAreaStacked;
