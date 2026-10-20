import * as React from 'react';
import type {SVGProps} from 'react';
const HandPointLeft = (props: SVGProps<SVGSVGElement>) => (
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
                d="m12.762 13.305.482-7.227-.011-.015-2.836-3.646a1.68 1.68 0 0 0-.973-.622 1.68 1.68 0 0 0-1.147.13 1.68 1.68 0 0 0-.81.822 1.68 1.68 0 0 0-.11 1.15l.26 1.042A.3.3 0 0 1 7.626 5q0 .25-.25.25H1.942q-.647 0-1.13.432A1.64 1.64 0 0 0 .26 6.758q-.07.643.307 1.17t1.01.666l2.978.662a.23.23 0 0 1 .193.203l.457 2.744q.2 1.2 1.222 1.86 1.024.66 2.2.345zm-1.123-.735-3.272.872q-.747.2-1.399-.22a1.68 1.68 0 0 1-.778-1.184l-.457-2.744-.139-.83-.822-.184-2.98-.662a.67.67 0 0 1-.414-.272.67.67 0 0 1-.126-.48.67.67 0 0 1 .227-.44.67.67 0 0 1 .465-.176h7.032l-.389-1.553-.26-1.042a.7.7 0 0 1 .047-.484.7.7 0 0 1 .34-.346.7.7 0 0 1 .483-.055.7.7 0 0 1 .41.26l2.555 3.287q.06.074.052.17l-.39 5.858a.23.23 0 0 1-.185.225Zm3.077 1.165q.203.015.36-.118a.48.48 0 0 0 .173-.337l.5-6.994a.5.5 0 0 0-.117-.374.48.48 0 0 0-.346-.174.48.48 0 0 0-.366.124.48.48 0 0 0-.168.347l-.5 7.007a.48.48 0 0 0 .124.351q.136.154.34.168Z"
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
export default HandPointLeft;
