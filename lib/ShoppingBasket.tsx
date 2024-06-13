import * as React from 'react';
import type {SVGProps} from 'react';
const ShoppingBasket = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12 4.5h1.307a2.193 2.193 0 0 1 2.109 2.795l-1.294 4.53A3 3 0 0 1 11.237 14H4.763a3 3 0 0 1-2.885-2.176L.584 7.295A2.193 2.193 0 0 1 2.693 4.5H4V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm-6.5 0V3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1.5zm5.737 8H4.763a1.5 1.5 0 0 1-1.442-1.088L2.027 6.883A.693.693 0 0 1 2.693 6h10.614a.693.693 0 0 1 .666.883l-1.294 4.53a1.5 1.5 0 0 1-1.442 1.087m-4.59-1.265a.75.75 0 0 1-.882-.588l-.5-2.5a.75.75 0 0 1 1.47-.294l.5 2.5a.75.75 0 0 1-.588.882m4.088-3.088a.75.75 0 1 0-1.47-.294l-.5 2.5a.75.75 0 1 0 1.47.294z"
            clipRule="evenodd"
        />
    </svg>
);
export default ShoppingBasket;
