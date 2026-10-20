import * as React from 'react';
import type {SVGProps} from 'react';
const CheckDouble = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.845 4.401a.48.48 0 0 0-.35-.146.48.48 0 0 0-.352.14l-4.931 4.93q-.177.177-.354 0l-.011-.012-2.97-3.396a.48.48 0 0 0-.344-.17.48.48 0 0 0-.362.122.48.48 0 0 0-.17.344.48.48 0 0 0 .122.362l3.5 4a.48.48 0 0 0 .36.17.48.48 0 0 0 .37-.146l5.5-5.5a.48.48 0 0 0 .138-.348.48.48 0 0 0-.146-.35Zm-1.492 7.205L14.85 6.11v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146.48.48 0 0 0-.346.13v.001l-4.941 4.94q-.172.171-.349.005a.48.48 0 0 0-.345-.137.48.48 0 0 0-.344.138.48.48 0 0 0-.154.337.48.48 0 0 0 .118.348l.499.554a.48.48 0 0 0 .358.165.48.48 0 0 0 .367-.147Z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CheckDouble;
