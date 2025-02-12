import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CommentSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M2.235 3.296 1.97 3.03a.75.75 0 0 1 1.06-1.06l11 11a.75.75 0 0 1-1.06 1.06l-1.621-1.62c-.995.393-2.136.59-3.349.59q-.124 0-.247-.003L5.984 14.57a1.704 1.704 0 0 1-2.83-1.416l.123-1.484C1.877 10.674 1 9.117 1 7c0-1.526.456-2.76 1.235-3.704m7.93 7.93a8.1 8.1 0 0 1-2.378.272l-.59-.013-.44.391-1.77 1.572a.204.204 0 0 1-.338-.169l.123-1.484.071-.851-.695-.496C3.156 9.743 2.5 8.648 2.5 7c0-1.12.303-1.98.802-2.637zM13.5 7c0 1.075-.28 1.91-.742 2.556l1.07 1.07C14.568 9.693 15 8.484 15 7c0-4-3.134-6-7-6-1.172 0-2.276.184-3.247.551l1.194 1.194A8.2 8.2 0 0 1 8 2.5c1.695 0 3.087.44 4.02 1.177.89.702 1.48 1.76 1.48 3.323"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CommentSlash);
export default ForwardRef;
