import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Fingerprint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M6.964 1.79a.75.75 0 0 1-.51.93A5.51 5.51 0 0 0 2.72 6.455a.75.75 0 0 1-1.44-.421A7.01 7.01 0 0 1 6.034 1.28a.75.75 0 0 1 .93.51m2.072 0a.75.75 0 0 1 .93-.51 7.003 7.003 0 0 1 4.176 10.08.75.75 0 1 1-1.315-.72 5.503 5.503 0 0 0-3.281-7.92.75.75 0 0 1-.51-.93M1.79 9.036a.75.75 0 0 1 .93.51 5.503 5.503 0 0 0 7.92 3.28.75.75 0 1 1 .72 1.316A7.003 7.003 0 0 1 1.28 9.966a.75.75 0 0 1 .51-.93M8 5.5a2.5 2.5 0 0 0-1.153 4.719.75.75 0 0 1-.694 1.33A4 4 0 1 1 12 8a.75.75 0 0 1-1.5 0A2.5 2.5 0 0 0 8 5.5m.742 2.392a.75.75 0 1 0-1.484.216c.252 1.726 1.493 3.001 3.18 3.14a.75.75 0 1 0 .123-1.495c-.918-.076-1.657-.751-1.819-1.861"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Fingerprint);
export default ForwardRef;
