import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const PlayFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M14.642 6.285c1.294.777 1.294 2.653 0 3.43l-9.113 5.468c-1.333.8-3.028-.16-3.029-1.715V2.532C2.5.978 4.196.018 5.53.818z"
        />
    </svg>
);
const ForwardRef = forwardRef(PlayFill);
export default ForwardRef;
