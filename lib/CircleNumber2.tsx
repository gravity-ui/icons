import * as React from 'react';
import type {SVGProps} from 'react';
const CircleNumber2 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M9.75 9.75H8.269a9 9 0 0 0 .404-.287 5.3 5.3 0 0 0 1.045-1.014c.29-.39.532-.882.532-1.449 0-.596-.203-1.17-.628-1.598-.427-.43-1.019-.652-1.682-.652-.958 0-1.811.562-2.143 1.5a.75.75 0 0 0 1.414.5c.11-.31.377-.5.73-.5.324 0 .512.102.617.209.108.109.192.284.192.541 0 .131-.057.314-.235.553-.177.237-.436.48-.746.714-.62.468-1.33.822-1.654.972-.37.171-.615.542-.615.96 0 .58.47 1.051 1.05 1.051h3.2a.75.75 0 0 0 0-1.5"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleNumber2;
