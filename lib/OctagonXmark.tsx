import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const OctagonXmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M5.829 2.5h4.342a.5.5 0 0 1 .354.146l2.829 2.829a.5.5 0 0 1 .146.353v4.344a.5.5 0 0 1-.146.353l-2.829 2.829a.5.5 0 0 1-.354.146H5.83a.5.5 0 0 1-.354-.146l-2.829-2.829a.5.5 0 0 1-.146-.354V5.829a.5.5 0 0 1 .147-.353l2.828-2.829a.5.5 0 0 1 .354-.146m-1.415-.914A2 2 0 0 1 5.83 1h4.342a2 2 0 0 1 1.415.586l2.828 2.828A2 2 0 0 1 15 5.828v4.343a2 2 0 0 1-.586 1.415l-2.828 2.828A2 2 0 0 1 10.17 15H5.83a2 2 0 0 1-1.415-.586l-2.828-2.828A2 2 0 0 1 1 10.17V5.828a2 2 0 0 1 .586-1.414zM6.53 5.47a.75.75 0 1 0-1.06 1.06L6.94 8 5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(OctagonXmark);
export default ForwardRef;
