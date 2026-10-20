import * as React from 'react';
import type {SVGProps} from 'react';
const HandPointRight = (props: SVGProps<SVGSVGElement>) => (
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
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M5.603 2.417 2.756 6.078l.482 7.227 4.136 1.103q1.176.315 2.2-.345a2.64 2.64 0 0 0 1.222-1.86l.457-2.744a.23.23 0 0 1 .193-.203l2.979-.662a1.64 1.64 0 0 0 1.01-.667q.376-.525.306-1.17a1.64 1.64 0 0 0-.553-1.075 1.64 1.64 0 0 0-1.13-.432H8.626a.24.24 0 0 1-.177-.073.25.25 0 0 1-.066-.237l.26-1.043a1.68 1.68 0 0 0-.11-1.15 1.68 1.68 0 0 0-.81-.823 1.68 1.68 0 0 0-1.147-.13 1.68 1.68 0 0 0-.973.623ZM4.361 12.57a.23.23 0 0 1-.185-.225l-.39-5.858a.24.24 0 0 1 .052-.17L6.393 3.03a.7.7 0 0 1 .41-.26.7.7 0 0 1 .482.055q.232.112.34.346a.7.7 0 0 1 .048.484l-.26 1.042-.389 1.553h7.033a.67.67 0 0 1 .464.175.67.67 0 0 1 .227.441.67.67 0 0 1-.126.48.67.67 0 0 1-.414.272l-2.98.662-.822.183-.138.831-.458 2.744q-.128.765-.778 1.183-.65.42-1.4.22zm-3.077 1.165a.48.48 0 0 0 .34-.168.48.48 0 0 0 .125-.352l-.5-7.005a.48.48 0 0 0-.169-.348.48.48 0 0 0-.366-.124.48.48 0 0 0-.346.174.5.5 0 0 0-.117.373l.5 6.996q.018.204.174.336a.48.48 0 0 0 .36.118Z"
                clipRule="evenodd"
                style={{
                    strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
                }}
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default HandPointRight;
