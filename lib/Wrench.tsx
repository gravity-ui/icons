import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Wrench = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m8.581 9.298.776.143q.311.059.643.059A3.5 3.5 0 0 0 13.5 6q0-.177-.027-.352l-1.39 1.39a1.58 1.58 0 0 1-1.114.462A2.47 2.47 0 0 1 8.5 5.03c0-.417.166-.817.461-1.112l1.39-1.39A2.4 2.4 0 0 0 10 2.5a3.5 3.5 0 0 0-3.441 4.143l.143.776-3.813 3.813a1.329 1.329 0 0 0 1.879 1.879zm3.817-6.787a.795.795 0 0 0-.411-1.018C11.87 1.432 11.014 1 10 1a5 5 0 0 0-4.916 5.916l-3.256 3.256a2.828 2.828 0 1 0 4 4l3.256-3.256Q9.53 11 10 11a5 5 0 0 0 5-5c0-1.014-.432-1.87-.493-1.987l-.014-.027a.795.795 0 0 0-1.273-.207l-2.198 2.2a.07.07 0 0 1-.053.021.97.97 0 0 1-.969-.97q0-.03.022-.052L12.22 2.78a.8.8 0 0 0 .178-.27"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Wrench);
export default ForwardRef;
