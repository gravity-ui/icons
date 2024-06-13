import * as React from 'react';
import type {SVGProps} from 'react';
const TargetDart = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.14 1.14 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.7.7 0 0 1 .5-.207M2.5 8a5.5 5.5 0 0 1 6.598-5.39.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299q.109.533.11 1.101a5.5 5.5 0 1 1-11 0m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111 2.5 2.5 0 1 1-2.63-2.686"
            clipRule="evenodd"
        />
    </svg>
);
export default TargetDart;
