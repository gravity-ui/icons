import * as React from 'react';
import type {SVGProps} from 'react';
const Ear = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4 12.372V5.75C4 3.419 5.934 1.5 8.298 1.5c2.31 0 4.202 1.877 4.202 4.156v.459a4.773 4.773 0 0 1-1.667 3.624 11.26 11.26 0 0 0-2.486 3.028l-.364.648A2.128 2.128 0 0 1 4 12.372ZM2.5 5.75v6.622a3.628 3.628 0 0 0 6.79 1.779l.365-.648a9.76 9.76 0 0 1 2.154-2.625A6.274 6.274 0 0 0 14 6.115v-.46C14 2.533 11.421 0 8.298 0 5.122 0 2.5 2.574 2.5 5.75Zm4.526-.162a1.242 1.242 0 0 1 2.474.154v.508a.75.75 0 0 0 1.5 0v-.508a2.742 2.742 0 0 0-5.462-.34l-.282 2.255a.75.75 0 0 0 .827.838l.85-.094a.511.511 0 0 1 .383.901l-1.046.872a.75.75 0 0 0 .96 1.152l1.046-.872a2.011 2.011 0 0 0-1.414-3.552l.164-1.314Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Ear;
