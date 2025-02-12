import * as React from 'react';
import type {SVGProps} from 'react';
const VolumeSlashFill = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3.03 1.97a.75.75 0 0 0-1.06 1.06L3.94 5H1.5A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3l2.586 2.586a1.414 1.414 0 0 0 2.414-1V10.56l3.47 3.47a.75.75 0 1 0 1.06-1.061zm8.459 6.317 1.265 1.265C12.915 9.064 13 8.542 13 8a4.98 4.98 0 0 0-.975-2.967c-.247-.334-.727-.33-1.02-.038s-.284.765-.06 1.113a3.5 3.5 0 0 1 .544 2.179m2.422 2.422 1.117 1.117C15.648 10.689 16 9.386 16 8c0-1.94-.69-3.717-1.838-5.102-.264-.32-.743-.317-1.035-.024-.293.293-.29.765-.032 1.09A6.47 6.47 0 0 1 14.5 8c0 .967-.21 1.884-.59 2.709m-7.56-7.56L9.5 6.298V3.414a1.414 1.414 0 0 0-2.414-1z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default VolumeSlashFill;
