import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Medal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.836 1.5a.664.664 0 0 1 .491 1.11l-.354.39H4.027l-.354-.39a.664.664 0 0 1 .49-1.11zm-6.445 3 2.124 2.336a.5.5 0 0 0 .37.164h.23a.5.5 0 0 0 .37-.164L10.61 4.5zm.652 2.947L3.5 4.65v1.852a.5.5 0 0 0 .123.328L4.87 8.266a4.5 4.5 0 0 1 1.172-.82m-2.08 2.061-1.47-1.693A2 2 0 0 1 2 6.502V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.502a2 2 0 0 1-.49 1.312l-1.474 1.694a4.5 4.5 0 1 1-8.073 0m7.166-1.242a4.5 4.5 0 0 0-1.172-.82L12.5 4.65v1.852a.5.5 0 0 1-.123.328zM11 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Medal);
export default ForwardRef;
