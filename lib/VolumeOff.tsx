import * as React from 'react';
import type {SVGProps} from 'react';
const VolumeOff = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 5.25H2q-.725 0-1.237.513A1.7 1.7 0 0 0 .25 7v2q0 .725.513 1.237.512.513 1.237.513h2a.24.24 0 0 1 .177.073l2.482 2.482q.325.326.777.416.451.09.877-.087.424-.176.681-.559.255-.383.256-.843V3.768q0-.46-.256-.843a1.5 1.5 0 0 0-.681-.56 1.5 1.5 0 0 0-.877-.086q-.451.09-.777.416L4.177 5.177A.24.24 0 0 1 4 5.25Zm0 4.5H2a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V7q0-.31.22-.53A.72.72 0 0 1 2 6.25h2q.518 0 .883-.367l2.484-2.482a.48.48 0 0 1 .564-.111q.32.132.319.478v8.464q0 .345-.32.478a.48.48 0 0 1-.564-.111l-2.483-2.482A1.2 1.2 0 0 0 4 9.75Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default VolumeOff;
