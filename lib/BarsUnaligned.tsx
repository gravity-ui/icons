import * as React from 'react';
import type {SVGProps} from 'react';
const BarsUnaligned = (props: SVGProps<SVGSVGElement>) => (
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
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M2.25 3.25q0 .207.146.354a.48.48 0 0 0 .354.146h10.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H2.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Zm2.5 4.25a.48.48 0 0 0-.354.146A.48.48 0 0 0 4.25 8q0 .207.146.354a.48.48 0 0 0 .354.146h10.5a.48.48 0 0 0 .354-.146A.48.48 0 0 0 15.75 8a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146zm-4 4.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h10.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default BarsUnaligned;
