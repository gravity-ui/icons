import * as React from 'react';
import {SVGProps} from 'react';
const PencilToSquare = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 2.25a.75.75 0 0 0-.75-.75H4.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V8.75a.75.75 0 0 0-1.5 0v2.75a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h2.75A.75.75 0 0 0 8 2.25Zm4.969 1.66a1.184 1.184 0 0 0-.88-.878l-.865.866c.357.22.658.521.878.878l.867-.866Zm-.694 2.814 2-2a.766.766 0 0 0 .225-.541A2.683 2.683 0 0 0 11.818 1.5a.767.767 0 0 0-.543.224l-1.999 2-3.069 3.069A3 3 0 0 0 5.36 8.49l-.17 1.19a1 1 0 0 0 1.13 1.131l1.191-.17a3 3 0 0 0 1.697-.848l3.068-3.069ZM10.97 5.91a1.184 1.184 0 0 0-.88-.878L7.269 7.854a1.5 1.5 0 0 0-.425.848l-.075.53.53-.075a1.5 1.5 0 0 0 .848-.425l2.822-2.822Z"
            clipRule="evenodd"
        />
    </svg>
);
export default PencilToSquare;
