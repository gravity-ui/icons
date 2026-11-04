import * as React from 'react';
import type {SVGProps} from 'react';
const ChartAreaStacked = (props: SVGProps<SVGSVGElement>) => (
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
                d="M9.336 4.717 6.233 3.94a2.5 2.5 0 0 0-1.385.04 2.5 2.5 0 0 0-1.162.758L1.43 7.317a2.67 2.67 0 0 0-.68 1.81V12q0 .725.513 1.237.512.513 1.237.513h11q.725 0 1.237-.513.513-.512.513-1.237V3.31q0-.529-.302-.962a1.65 1.65 0 0 0-.797-.617 1.65 1.65 0 0 0-1.006-.05q-.511.132-.855.533l-1.31 1.528-.533.62q-.447.52-1.11.355ZM14.25 3.31v3.169q0 .25-.25.25a.3.3 0 0 1-.055-.006q-.88-.2-1.509.445L10.86 8.745l-.22.22a1.8 1.8 0 0 1-.972.506q-.566.102-1.086-.139l-1.924-.888a2.3 2.3 0 0 0-1.128-.21 2.3 2.3 0 0 0-1.093.35l-2.304 1.44q-.211.132-.344-.08a.25.25 0 0 1-.038-.132v-.685q0-.657.432-1.152L4.44 5.397q.289-.33.707-.46.419-.131.845-.026l3.104.777q.58.146 1.15-.037.571-.18.961-.636l1.842-2.15q.309-.36.756-.196.447.165.446.641ZM2.5 12.75a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.531v-.002q0-.555.47-.85l2.747-1.713q.614-.384 1.272-.081l1.923.888q.807.372 1.681.216a2.77 2.77 0 0 0 1.503-.784l1.794-1.796a.6.6 0 0 1 .709-.14.6.6 0 0 1 .401.6V12a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22z"
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
export default ChartAreaStacked;
