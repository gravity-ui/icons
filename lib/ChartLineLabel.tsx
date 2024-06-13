import * as React from 'react';
import type {SVGProps} from 'react';
const ChartLineLabel = (props: SVGProps<SVGSVGElement>) => (
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
                d="M16 4a.75.75 0 0 0-1.4-.375l-1.176 2.037-1.288-2.06A.75.75 0 0 0 10.75 4v4.25a.75.75 0 0 0 1.5 0V6.613l.564.901a.75.75 0 0 0 1.286-.022l.4-.694v1.45a.75.75 0 0 0 1.5 0zM2.828 4a.75.75 0 0 0-1.218-.586L.282 4.477a.75.75 0 1 0 .937 1.171l.11-.088v2.69a.75.75 0 1 0 1.5 0zm4.583.75a.695.695 0 0 0-.656.464l-.085.242a.75.75 0 1 1-1.415-.498l.085-.242A2.195 2.195 0 0 1 7.411 3.25h.257A1.858 1.858 0 0 1 8.776 6.6l-1.213.9h1.375a.75.75 0 1 1 0 1.5H5.975a.975.975 0 0 1-.581-1.758l2.488-1.847a.358.358 0 0 0-.214-.645zm7.44 5.226a.778.778 0 1 1 .598 1.436l-4.717 1.968a2.85 2.85 0 0 1-2.374-.081l-2.263-1.132a1.3 1.3 0 0 0-1.262.057l-3.624 2.243a.778.778 0 1 1-.818-1.323l3.623-2.243a2.85 2.85 0 0 1 2.776-.126l2.264 1.132c.337.169.73.182 1.079.037zM4.75 8.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default ChartLineLabel;
