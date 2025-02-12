import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Volume = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5.06 9.94A1.5 1.5 0 0 0 4 9.5H2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 0 1.06-.44l2.483-2.482a.268.268 0 0 1 .457.19v8.464a.268.268 0 0 1-.457.19zM2 5h2l2.482-2.482A1.768 1.768 0 0 1 9.5 3.768v8.464a1.768 1.768 0 0 1-3.018 1.25L4 11H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m12.162 8.103c-.265.319-.743.316-1.036.024-.292-.293-.288-.766-.031-1.09A6.47 6.47 0 0 0 14.5 8a6.47 6.47 0 0 0-1.405-4.037c-.257-.324-.261-.797.031-1.09.293-.292.771-.294 1.036.024A7.97 7.97 0 0 1 16 8c0 1.94-.69 3.718-1.838 5.103m-2.138-2.135c-.246.333-.726.33-1.019.037s-.284-.764-.06-1.113A3.5 3.5 0 0 0 11.5 8c0-.697-.204-1.347-.555-1.892-.224-.348-.233-.82.06-1.113s.773-.296 1.02.037C12.637 5.862 13 6.89 13 8a4.98 4.98 0 0 1-.976 2.968"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
const ForwardRef = forwardRef(Volume);
export default ForwardRef;
