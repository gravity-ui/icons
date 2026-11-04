import * as React from 'react';
import type {SVGProps} from 'react';
const ShieldExclamation = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.669 1.556-.002.001-4.205 2.018q-.556.268-.883.79a2.1 2.1 0 0 0-.329 1.137V6q0 2.506 1.203 4.705a9.65 9.65 0 0 0 3.314 3.55l.986.63q.57.365 1.247.365t1.247-.366l.986-.63a9.65 9.65 0 0 0 3.314-3.549A9.65 9.65 0 0 0 14.75 6v-.498q0-.616-.328-1.138a2.1 2.1 0 0 0-.884-.789L9.318 1.55Q8.693 1.25 8 1.251a3 3 0 0 0-1.33.305zm.446.895a1.96 1.96 0 0 1 1.77 0l4.22 2.026q.296.143.47.42.175.277.175.605V6q0 2.25-1.08 4.224a8.66 8.66 0 0 1-2.976 3.188l-.986.63A1.3 1.3 0 0 1 8 14.25q-.384 0-.708-.207l-.986-.63a8.66 8.66 0 0 1-2.976-3.188A8.7 8.7 0 0 1 2.25 6v-.498q0-.327.175-.606.174-.276.47-.42zM8.5 5.5a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v2q0 .207.146.354A.48.48 0 0 0 8 8a.48.48 0 0 0 .354-.146A.48.48 0 0 0 8.5 7.5zM8 11.25a.72.72 0 0 0 .53-.22.72.72 0 0 0 .22-.53.72.72 0 0 0-.22-.53.72.72 0 0 0-.53-.22.72.72 0 0 0-.53.22.72.72 0 0 0-.22.53q0 .31.22.53t.53.22Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ShieldExclamation;
