import * as React from 'react';
import type {SVGProps} from 'react';
const PersonPlanetEarth = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm3.229 3.909-.702-.28a2.5 2.5 0 0 1 3.339-1.975c-.121.185-.303.33-.523.403l-.035.012a.951.951 0 0 0 0 1.805l.46.154a.66.66 0 0 1 .383.331.66.66 0 0 0 .957.254l.365-.242a2.5 2.5 0 0 1-2.4 2.128.768.768 0 0 0 .041-.247v-.08a.686.686 0 0 0-.685-.686.686.686 0 0 1-.686-.686v-.132a.818.818 0 0 0-.514-.76ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM6.25 8.525c.414-.028.75.31.75.725 0 .414-.336.747-.75.78-1.369.107-2.567.5-3.43 1.011-1.1.65-1.32 1.255-1.32 1.459a1 1 0 0 0 1 1h3.75a.75.75 0 0 1 0 1.5H2.5A2.5 2.5 0 0 1 0 12.5c0-1.868 2.75-3.737 6.25-3.975Z"
            clipRule="evenodd"
        />
    </svg>
);
export default PersonPlanetEarth;
