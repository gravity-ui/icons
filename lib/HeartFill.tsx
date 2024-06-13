import * as React from 'react';
import type {SVGProps} from 'react';
const HeartFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.76 1.5c-1.278 0-2.365.46-3.127 1.296C.878 3.624.5 4.758.5 6.013c0 2.18 1.11 3.917 2.52 5.268 1.404 1.345 3.17 2.368 4.632 3.133a.75.75 0 0 0 .693.002c1.463-.757 3.228-1.788 4.633-3.14 1.41-1.355 2.522-3.098 2.522-5.263 0-1.26-.38-2.393-1.136-3.221C13.6 1.957 12.514 1.5 11.24 1.5c-1.076 0-1.966.398-2.643 1.15A4.5 4.5 0 0 0 8 3.504a4.5 4.5 0 0 0-.597-.854C6.726 1.898 5.836 1.5 4.76 1.5"
            clipRule="evenodd"
        />
    </svg>
);
export default HeartFill;
