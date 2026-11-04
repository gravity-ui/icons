import * as React from 'react';
import type {SVGProps} from 'react';
const LogoYandexTracker = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.25 6.417q.621 0 1.06-.44.44-.438.44-1.06V2.75q0-.622-.44-1.06a1.45 1.45 0 0 0-1.06-.44H2.75q-.622 0-1.06.44-.44.439-.44 1.06v2.167q0 .62.44 1.06t1.06.44h2.417q.25 0 .25.25v6.583q0 .621.44 1.06.438.44 1.06.44h2.166q.621 0 1.06-.44.44-.438.44-1.06V6.667q0-.25.25-.25zm-11-3.667q0-.207.146-.354a.48.48 0 0 1 .354-.146h2.417q.25 0 .25.25v2.667q0 .25-.25.25H2.75a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354zm4.167 2.417V2.5q0-.25.25-.25h2.666q.25 0 .25.25v2.667q0 .25-.25.25H6.667q-.25 0-.25-.25Zm4.166 0V2.5q0-.25.25-.25h2.417q.207 0 .354.146a.48.48 0 0 1 .146.354v2.167a.48.48 0 0 1-.146.354.48.48 0 0 1-.354.146h-2.417q-.25 0-.25-.25Zm-3.916 1.25h2.666q.25 0 .25.25v2.666q0 .25-.25.25H6.667q-.25 0-.25-.25V6.667q0-.25.25-.25Zm0 4.166h2.666q.25 0 .25.25v2.417a.48.48 0 0 1-.146.354.48.48 0 0 1-.354.146H6.917a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354v-2.417q0-.25.25-.25Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LogoYandexTracker;
