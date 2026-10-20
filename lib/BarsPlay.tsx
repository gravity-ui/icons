import * as React from 'react';
import type {SVGProps} from 'react';
const BarsPlay = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.5 2.75a.48.48 0 0 0-.354.146A.48.48 0 0 0 2 3.25q0 .207.146.354a.48.48 0 0 0 .354.146h11a.48.48 0 0 0 .354-.146A.48.48 0 0 0 14 3.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146zM2 7q0 .207.146.354A.48.48 0 0 0 2.5 7.5h11a.48.48 0 0 0 .354-.146A.48.48 0 0 0 14 7a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-11a.48.48 0 0 0-.354.146A.48.48 0 0 0 2 7Zm11.75 5.25a.7.7 0 0 0-.375-.65l-3-1.731a.7.7 0 0 0-.75 0 .7.7 0 0 0-.375.649v3.464q0 .433.375.65.375.216.75 0l3-1.733a.7.7 0 0 0 .375-.649ZM2 10.75q0 .207.146.354a.48.48 0 0 0 .354.146h4.25a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H2.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default BarsPlay;
