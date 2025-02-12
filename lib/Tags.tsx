import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Tags = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m10.884 6.995-4.12 4.12a.75.75 0 0 1-1.055.005L1.906 7.395a.75.75 0 0 1-.011-1.06l4.118-4.21a1.25 1.25 0 0 1 .894-.375H10.5a.75.75 0 0 1 .75.75v3.61c0 .332-.132.65-.366.885M4.94 1.077A2.75 2.75 0 0 1 6.907.25H10.5a2.25 2.25 0 0 1 2.25 2.25v.75h.75a2.25 2.25 0 0 1 2.25 2.25v3.61c0 .73-.29 1.43-.806 1.946l-4.12 4.12a2.25 2.25 0 0 1-3.165.016l-3.803-3.726a2.3 2.3 0 0 1-.286-.341L.856 8.466a2.25 2.25 0 0 1-.033-3.18zm2.242 11.548a2.3 2.3 0 0 0 .642-.45L11.52 8.48q.11.021.229.021a1.25 1.25 0 0 0 .976-2.03q.024-.178.024-.36V4.75h.75a.75.75 0 0 1 .75.75v3.61c0 .332-.132.65-.366.885l-4.12 4.12a.75.75 0 0 1-1.055.005zM8.75 5.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Tags);
export default ForwardRef;
