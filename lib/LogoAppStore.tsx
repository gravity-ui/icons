import * as React from 'react';
import type {SVGProps} from 'react';
const LogoAppStore = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g fill="currentColor">
            <path d="M3.675 12.089a.5.5 0 0 1 .433.75l-.743 1.287a.75.75 0 0 1-1.299-.75l.599-1.037a.5.5 0 0 1 .433-.25zm5.191-5.986a.5.5 0 0 1 .866-.001l2.166 3.75h1.105l.919-.001h.332a.75.75 0 0 1 .75.75.75.75 0 0 1-.672.746l-.077.004h-1.492l1.17 2.025a.75.75 0 0 1-1.3.75L8.58 7.102a.5.5 0 0 1 0-.5z" />
            <path d="M8.707 1.875a.75.75 0 0 1 1.299.75l-1.14 1.974.001.003-.866 1.5-.002-.003L5.834 9.85H9.01a.5.5 0 0 1 .432.25l.29.5a.5.5 0 0 1-.432.75H1.746a.75.75 0 0 1 .002-1.5h2.354l3.032-5.252-1.14-1.974a.75.75 0 1 1 1.299-.75l.706 1.224z" />
        </g>
    </svg>
);
export default LogoAppStore;
