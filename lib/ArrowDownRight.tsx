import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.227 7.079v3.839a.24.24 0 0 1-.073.177q-.177.177-.354 0L3.625 2.918a.48.48 0 0 0-.354-.147.48.48 0 0 0-.354.146.48.48 0 0 0-.147.354q0 .207.147.354l8.176 8.176a.24.24 0 0 1 .073.177.24.24 0 0 1-.073.177.24.24 0 0 1-.177.073H7.07a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h5.657a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V7.077a.48.48 0 0 0-.155-.33.48.48 0 0 0-.345-.137.48.48 0 0 0-.345.137.48.48 0 0 0-.155.33z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowDownRight;
