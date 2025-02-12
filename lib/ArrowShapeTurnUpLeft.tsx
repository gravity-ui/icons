import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ArrowShapeTurnUpLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M7 9v2.665a.335.335 0 0 1-.55.257L1.73 7.988a.635.635 0 0 1 0-.976l4.72-3.934a.335.335 0 0 1 .55.257V6h1.5c1.584 0 3.182.571 4.241 1.692.9.951 1.549 2.446 1.31 4.723-.65-1.026-1.365-1.837-2.201-2.413C10.802 9.279 9.677 9 8.5 9zm3 1.731c1.162.396 2.165 1.337 3.151 3.106.223.4.64.663 1.098.663.552 0 1.04-.376 1.143-.917C16.598 7.237 12.322 4.5 8.501 4.5V3.335a1.835 1.835 0 0 0-3.01-1.41L.768 5.86a2.135 2.135 0 0 0 0 3.28l4.721 3.935a1.835 1.835 0 0 0 3.01-1.41V10.5c.533 0 1.03.07 1.5.231"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ArrowShapeTurnUpLeft);
export default ForwardRef;
