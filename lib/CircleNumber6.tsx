import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleNumber6 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m2.5-5.75c0 1.147-1.048 2.25-2.6 2.25-.719 0-1.478-.187-2.054-.765S5 9.31 5 8.25c0-2.046 1.781-3.442 3.89-3.742a.75.75 0 1 1 .21 1.484c-1.057.151-1.808.599-2.224 1.161A4 4 0 0 1 8 7c.638 0 1.255.186 1.727.578.485.402.773.989.773 1.672M8.025 8.5H8c-.65 0-1.02.19-1.187.357a.45.45 0 0 0-.108.525c.063.129.134.224.204.294.2.202.516.324.991.324.835 0 1.1-.538 1.1-.75 0-.236-.09-.4-.231-.518-.15-.125-.4-.227-.744-.232"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CircleNumber6);
export default ForwardRef;
