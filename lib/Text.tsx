import * as React from 'react';
import type {SVGProps} from 'react';
const Text = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 2.25q-.377 0-.48.363l-.501 1.749a.5.5 0 0 0 .036.39.48.48 0 0 0 .303.243.48.48 0 0 0 .384-.046.48.48 0 0 0 .236-.306l.348-1.212q.051-.18.24-.181H7.25q.25 0 .25.25l-.004 9q0 .25-.25.25H6.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h3a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-.754q-.25 0-.25-.25l.004-9q0-.25.25-.25h2.684q.189 0 .24.181l.345 1.205q.055.21.238.313.183.105.384.046a.48.48 0 0 0 .303-.242.48.48 0 0 0 .038-.385l-.501-1.755Q12.376 2.25 12 2.25z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Text;
