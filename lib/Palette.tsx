import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Palette = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M12.012 10c.431.004.764-.15 1.002-.411.244-.268.486-.762.486-1.589a5.5 5.5 0 1 0-5.17 5.491 4.3 4.3 0 0 1-.106-.89 2.37 2.37 0 0 1 .495-1.48c.386-.493.92-.763 1.448-.914C10.69 10.06 11.303 10 12 10zM8.43 14.01v-.005zM12 11.5c1.66.013 3-1.25 3-3.5a7 7 0 1 0-7 7c2.19 0 2.011-.83 1.827-1.68-.194-.898-.393-1.82 2.173-1.82M9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 2.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4.75-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5.75 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Palette);
export default ForwardRef;
