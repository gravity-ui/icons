import * as React from 'react';
import type {SVGProps} from 'react';
const Megaphone = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.113 11.615c.374.814.713.885.887.885s.513-.071.887-.885c.377-.816.613-2.077.613-3.615s-.236-2.799-.613-3.615C12.513 3.57 12.175 3.5 12 3.5s-.513.071-.887.885C10.736 5.2 10.5 6.462 10.5 8s.236 2.799.613 3.615M9 8c0 1.469.197 2.815.59 3.858L2.902 9.31a1.402 1.402 0 0 1 0-2.62l6.686-2.548C9.196 5.185 9 6.532 9 8m3 6c2 0 3-2.686 3-6s-1-6-3-6c-.661 0-1.317.12-1.934.356L2.369 5.288a2.902 2.902 0 0 0 0 5.424l.827.315a2.5 2.5 0 1 0 4.67 1.78l2.2.837A5.4 5.4 0 0 0 12 14m-5.537-1.729L4.6 11.563a1 1 0 1 0 1.862.71"
            clipRule="evenodd"
        />
    </svg>
);
export default Megaphone;
