import * as React from 'react';
import type {SVGProps} from 'react';
const Pulse = (props: SVGProps<SVGSVGElement>) => (
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
                d="M9.733 1.623q-.099-.38-.493-.373t-.478.393L6.606 11.44q-.054.244-.298.19a.24.24 0 0 1-.184-.167L4.226 5.596a.46.46 0 0 0-.419-.343.46.46 0 0 0-.486.24L2.04 7.628a.24.24 0 0 1-.214.121H.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h1.5a.47.47 0 0 0 .43-.243l.65-1.085q.128-.215.342-.086.08.048.11.137l2.242 6.931q.117.364.5.345.382-.018.464-.392L9.07 4.891a.24.24 0 0 1 .11-.157.24.24 0 0 1 .188-.033q.15.033.188.18l1.71 6.496a.46.46 0 0 0 .418.368.46.46 0 0 0 .5-.247l1.783-3.122a.23.23 0 0 1 .217-.126h1.065a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-1.5a.47.47 0 0 0-.434.252l-1.09 1.908a.24.24 0 0 1-.151.117.24.24 0 0 1-.19-.024.24.24 0 0 1-.118-.153L9.733 1.624Z"
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
export default Pulse;
