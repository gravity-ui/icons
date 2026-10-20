import * as React from 'react';
import type {SVGProps} from 'react';
const Droplet = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 14.75a5.7 5.7 0 0 0 2.117-.404 5.7 5.7 0 0 0 1.949-1.28 5.7 5.7 0 0 0 1.28-1.95A5.7 5.7 0 0 0 13.75 9q0-2.655-2.034-5.412A16.6 16.6 0 0 0 8.734.497 1.13 1.13 0 0 0 8.003.25a1.13 1.13 0 0 0-.739.252A17 17 0 0 0 4.282 3.62Q2.25 6.383 2.25 9a5.7 5.7 0 0 0 .404 2.117 5.7 5.7 0 0 0 1.28 1.949 5.7 5.7 0 0 0 1.95 1.28A5.7 5.7 0 0 0 8 14.75Zm3.359-2.391Q9.967 13.749 8 13.75a4.7 4.7 0 0 1-1.748-.334 4.7 4.7 0 0 1-1.61-1.057q-.697-.696-1.058-1.61A4.7 4.7 0 0 1 3.25 9q0-2.29 1.839-4.79a16.8 16.8 0 0 1 2.755-2.89q.156-.13.316 0a15.7 15.7 0 0 1 2.75 2.863Q12.75 6.676 12.75 9q0 1.968-1.391 3.359ZM7.5 11.5q0 .207.146.354A.48.48 0 0 0 8 12a2.9 2.9 0 0 0 2.121-.879A2.9 2.9 0 0 0 11 9a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146A.48.48 0 0 0 10 9q0 .829-.586 1.414Q8.83 11 8 11a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Droplet;
