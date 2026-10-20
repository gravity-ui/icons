import * as React from 'react';
import type {SVGProps} from 'react';
const Code = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.98 13.138 2.997-9.99a.48.48 0 0 0-.047-.37.48.48 0 0 0-.293-.234.48.48 0 0 0-.374.035.48.48 0 0 0-.242.28v.002l-2.998 9.991v.001a.48.48 0 0 0 .05.366.48.48 0 0 0 .291.234.48.48 0 0 0 .373-.035.48.48 0 0 0 .243-.278zM4.353 5.853A.48.48 0 0 0 4.5 5.5a.48.48 0 0 0-.146-.353A.48.48 0 0 0 4 5a.48.48 0 0 0-.353.146l-2.5 2.5A.48.48 0 0 0 1 8q0 .207.146.353l2.496 2.497h.001q.147.135.346.131a.48.48 0 0 0 .345-.146.48.48 0 0 0 .146-.345.48.48 0 0 0-.13-.346L2.383 8.176q-.177-.177 0-.354zm7.294 4.294a.48.48 0 0 0-.146.353q0 .207.146.353A.48.48 0 0 0 12 11a.48.48 0 0 0 .353-.146l2.5-2.5A.48.48 0 0 0 15 8a.48.48 0 0 0-.146-.353L12.357 5.15h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346h.001l1.967 1.967A.24.24 0 0 1 13.69 8a.24.24 0 0 1-.073.177z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Code;
