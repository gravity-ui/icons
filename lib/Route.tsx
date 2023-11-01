import * as React from 'react';
import type {SVGProps} from 'react';
const Route = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.25 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 1.5a2.751 2.751 0 0 1-2.646-2H4.577a.827.827 0 0 0-.238 1.619l7.753 2.326A2.327 2.327 0 0 1 11.423 13H6.396a2.751 2.751 0 1 1 0-1.5h5.027a.827.827 0 0 0 .238-1.619L3.908 7.556A2.327 2.327 0 0 1 4.577 3h5.027a2.751 2.751 0 1 1 2.646 3.5ZM5 12.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Route;
