import * as React from 'react';
import type {SVGProps} from 'react';
const Play = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.642 6.285c1.294.777 1.294 2.653 0 3.43L5.53 15.183c-1.292.775-2.924-.102-3.025-1.571l-.005-.144V2.532l.005-.143C2.605.919 4.238.043 5.53.818zm-.771 2.144a.5.5 0 0 0 0-.857L4.756 2.104A.5.5 0 0 0 4 2.532v10.936a.5.5 0 0 0 .757.429z"
        />
    </svg>
);
export default Play;
