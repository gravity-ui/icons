import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const HeartCrack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4.76 1.5c-1.278 0-2.365.459-3.127 1.296C.878 3.624.5 4.758.5 6.013c0 2.18 1.11 3.917 2.52 5.268 1.404 1.345 3.17 2.368 4.632 3.133a.75.75 0 0 0 .693.002c1.463-.757 3.228-1.788 4.633-3.14 1.41-1.355 2.522-3.098 2.522-5.263 0-1.26-.38-2.393-1.136-3.221-.764-.835-1.85-1.293-3.124-1.293-1.174 0-2.412.551-3.24 1.626-.833-1.075-2.076-1.626-3.24-1.626M2 6.012c0-.96.287-1.708.742-2.207.447-.492 1.115-.807 2.018-.807.9 0 1.94.547 2.43 1.69L6.066 7.192a.75.75 0 0 0 .298.95l2.01 1.206-.905 3.261c-1.187-.664-2.416-1.458-3.412-2.413C2.817 9.01 2 7.637 2 6.013m7.119 6.262c.993-.59 1.987-1.28 2.82-2.08C13.182 8.998 14 7.62 14 6.013c0-.963-.288-1.71-.744-2.21C12.808 3.314 12.14 3 11.24 3c-.974 0-2.088.625-2.525 1.94a1 1 0 0 1-.034.088L7.708 7.2l1.929 1.158a.75.75 0 0 1 .337.844z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(HeartCrack);
export default ForwardRef;
