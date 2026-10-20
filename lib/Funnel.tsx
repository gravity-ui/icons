import * as React from 'react';
import type {SVGProps} from 'react';
const Funnel = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6 10.612v3.854l.002.008a.9.9 0 0 0 .237.35q.427.426 1.261.426 1.058 0 1.773-.626Q10 13.988 10 13v-2.39q0-.187.106-.342l3.124-4.583q.52-.762.52-1.685 0-1.28-1.612-2.023Q10.56 1.25 8 1.25t-4.138.727Q2.25 2.72 2.25 4q0 .923.52 1.685l3.126 4.584q.105.155.104.343Zm5.72-5.497Q10.34 5.75 8 5.75q-2.338 0-3.72-.635Q3.25 4.641 3.25 4q0-.64 1.03-1.115Q5.66 2.25 8 2.25q2.339 0 3.72.635 1.03.474 1.03 1.115 0 .64-1.03 1.115ZM8 6.75q1.688 0 2.99-.332a.24.24 0 0 1 .19.027.24.24 0 0 1 .114.153.24.24 0 0 1-.035.203l-1.98 2.905A1.57 1.57 0 0 0 9 10.61V13q0 .534-.385.872-.432.378-1.115.378-.19 0-.305-.027a.3.3 0 0 1-.076-.03l-.01-.007-.011-.001a.3.3 0 0 1-.096-.028q-.204-.109-.13-.314a.25.25 0 0 1 .105-.13L7 13.698V10.61q0-.494-.279-.903L4.741 6.8q-.14-.207.066-.348a.24.24 0 0 1 .203-.035Q6.318 6.75 8 6.75Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Funnel;
