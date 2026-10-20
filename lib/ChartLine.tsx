import * as React from 'react';
import type {SVGProps} from 'react';
const ChartLine = (props: SVGProps<SVGSVGElement>) => (
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
                d="M15.07 2.134a.48.48 0 0 0 .178-.339.48.48 0 0 0-.114-.365.48.48 0 0 0-.339-.178.48.48 0 0 0-.365.114l-3.674 3.062q-.621.516-1.392.283l-2.868-.86a2.46 2.46 0 0 0-1.29-.039 2.46 2.46 0 0 0-1.138.61L.908 7.385a.5.5 0 0 0-.166.353q-.008.21.135.362a.48.48 0 0 0 .353.157.48.48 0 0 0 .359-.14l3.163-2.964q.293-.274.683-.366t.774.024l2.869.86q.602.18 1.219.054.616-.126 1.099-.529zm-.122 6.075a.48.48 0 0 0 .266-.273.48.48 0 0 0-.005-.383.48.48 0 0 0-.273-.267.48.48 0 0 0-.383.005l-4.398 1.884q-.639.273-1.26-.037l-2.15-1.073a2.46 2.46 0 0 0-1.256-.261 2.46 2.46 0 0 0-1.22.397L.979 10.33a.48.48 0 0 0-.218.315.48.48 0 0 0 .07.377q.112.174.315.217.202.044.376-.069l3.29-2.13q.72-.465 1.486-.082l2.149 1.074a2.39 2.39 0 0 0 2.103.062l4.397-1.885ZM.75 13.25q0 .207.146.354a.48.48 0 0 0 .354.146h13.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
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
export default ChartLine;
