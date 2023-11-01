import * as React from 'react';
import type {SVGProps} from 'react';
const Trolley = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.988 11A1.5 1.5 0 1 0 7 11h-.012ZM10 12.476v.024a3 3 0 1 1-4.473-2.614l-1.955-7.33A.75.75 0 0 0 2.848 2H1.25a.75.75 0 0 1 0-1.5h1.598a2.25 2.25 0 0 1 2.174 1.67l.542 2.035a2.251 2.251 0 0 1 .69-.317l4.602-1.231A2.25 2.25 0 0 1 13.61 4.25l1.228 4.607a2.25 2.25 0 0 1-1.595 2.753L10 12.476Zm1.243-8.37a.75.75 0 0 1 .919.531l1.227 4.607a.75.75 0 0 1-.531.918l-3.244.865A2.999 2.999 0 0 0 7 9.5h-.024l-.865-3.245a.75.75 0 0 1 .53-.918l1.595-.427.642 2.291a.75.75 0 0 0 1.444-.403l-.637-2.275 1.558-.417Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Trolley;
