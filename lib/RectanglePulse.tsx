import * as React from 'react';
import type {SVGProps} from 'react';
const RectanglePulse = (props: SVGProps<SVGSVGElement>) => (
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
                d="M12.5 13.75a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 15.25 11V5a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12.5 2.25h-9a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 .75 5v6q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805zM11 7.25a.47.47 0 0 0-.432.248l-1.02 1.748a.24.24 0 0 1-.113.102.24.24 0 0 1-.19.006.24.24 0 0 1-.14-.13l-1.9-4.18a.47.47 0 0 0-.43-.293.47.47 0 0 0-.457.247L4.786 7.626a.24.24 0 0 1-.216.124H2q-.25 0-.25-.25V5q0-.725.513-1.237A1.7 1.7 0 0 1 3.5 3.25h9q.725 0 1.237.513.513.512.513 1.237v2q0 .25-.25.25zm-7.5 5.5q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.75 11V9q0-.25.25-.25h3a.47.47 0 0 0 .432-.248l1.02-1.748a.24.24 0 0 1 .113-.102.24.24 0 0 1 .19-.006.24.24 0 0 1 .14.13l1.9 4.18a.47.47 0 0 0 .43.293.47.47 0 0 0 .457-.247l1.532-2.628a.24.24 0 0 1 .216-.124H14q.25 0 .25.25V11q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513z"
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
export default RectanglePulse;
