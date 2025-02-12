import * as React from 'react';
import type {SVGProps} from 'react';
const VolumeSlash = (props: SVGProps<SVGSVGElement>) => (
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
                d="M3.03 1.97a.75.75 0 0 0-1.06 1.06L3.94 5H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2l2.482 2.482a1.767 1.767 0 0 0 3.018-1.25v-1.671l3.47 3.47a.75.75 0 1 0 1.06-1.061zM8 9.06 5.03 6.09A1.5 1.5 0 0 1 4 6.5H2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a1.5 1.5 0 0 1 1.06.44l2.483 2.482a.268.268 0 0 0 .457-.19zm0-5.292v1.03l1.5 1.5v-2.53a1.768 1.768 0 0 0-3.018-1.25l-.381.381 1.06 1.06.382-.38A.268.268 0 0 1 8 3.767m3.489 4.519 1.265 1.265A5 5 0 0 0 13 8a4.98 4.98 0 0 0-.975-2.967c-.247-.334-.727-.33-1.02-.038s-.284.765-.06 1.113a3.5 3.5 0 0 1 .544 2.179m2.422 2.422 1.117 1.117C15.648 10.689 16 9.386 16 8c0-1.94-.69-3.717-1.838-5.102-.264-.32-.743-.317-1.035-.024-.293.293-.29.765-.032 1.09A6.47 6.47 0 0 1 14.5 8c0 .967-.21 1.884-.59 2.709"
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
export default VolumeSlash;
