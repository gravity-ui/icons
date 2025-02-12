import * as React from 'react';
import type {SVGProps} from 'react';
const PlusShape = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.5 9.5h3.75a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H9.5V2.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25V6.5H2.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25H6.5v3.75c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25zM5 5H2.75A1.75 1.75 0 0 0 1 6.75v2.5c0 .966.784 1.75 1.75 1.75H5v2.25c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 11 13.25V11h2.25A1.75 1.75 0 0 0 15 9.25v-2.5A1.75 1.75 0 0 0 13.25 5H11V2.75A1.75 1.75 0 0 0 9.25 1h-2.5A1.75 1.75 0 0 0 5 2.75z"
            clipRule="evenodd"
        />
    </svg>
);
export default PlusShape;
