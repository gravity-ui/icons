import * as React from 'react';
import type {SVGProps} from 'react';
const WalletDot = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.004 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-.254-9.5a.75.75 0 0 1 0 1.5H3.195a.7.7 0 0 0-.698.7l.004.081a.8.8 0 0 0 .796.718h8.96a2.75 2.75 0 0 1 2.75 2.75v2.023a.75.75 0 0 1-1.5 0V7.25c0-.69-.56-1.25-1.25-1.25h-8.96c-.281 0-.55-.054-.8-.146v5.896c0 .69.56 1.25 1.25 1.25h5.345a.75.75 0 0 1 0 1.5H3.747a2.75 2.75 0 0 1-2.75-2.75V3.7c0-1.215.984-2.2 2.198-2.2zm-1.997 6.505a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z"
        />
        <path
            fill="#f33"
            fillRule="evenodd"
            d="M13.004 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            clipRule="evenodd"
        />
    </svg>
);
export default WalletDot;
