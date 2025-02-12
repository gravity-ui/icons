import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const DatabasesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11 12c2.485 0 4.5-.833 4.5-2.5V6.322a5 5 0 0 1-.635.388c-1.1.564-2.487.79-3.865.79zm0-6h-.035c-.186-1.3-1.089-2.193-2.1-2.71-.64-.328-1.376-.541-2.15-.663C7.296 1.542 8.995 1 11 1c2.485 0 4.5.833 4.5 2.5S13.485 6 11 6m-1.5 6.5C9.5 14.167 7.485 15 5 15S.5 14.167.5 12.5V9.322q.305.22.635.388c1.1.564 2.487.79 3.865.79s2.764-.226 3.865-.79q.33-.168.635-.388zM5 9c2.485 0 4.5-.833 4.5-2.5S7.485 4 5 4 .5 4.833.5 6.5 2.515 9 5 9"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(DatabasesFill);
export default ForwardRef;
