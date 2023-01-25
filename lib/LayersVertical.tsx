import * as React from 'react';
import {SVGProps} from 'react';
const LayersVertical = (props: SVGProps<SVGSVGElement>) => (
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
                d="m7.893 13.876-3.608-2.712a2.5 2.5 0 0 1-.735-.883l-.05-.1a2.5 2.5 0 0 1-.262-1.118l.005-4.514a.523.523 0 0 1 .836-.417l3.609 2.712a2.5 2.5 0 0 1 .735.883l.05.1a2.5 2.5 0 0 1 .262 1.118L8.73 13.46a.522.522 0 0 1-.837.417Zm1.217 1.392a2.022 2.022 0 0 1-2.118-.193l-3.608-2.712a4 4 0 0 1-1.176-1.413l-.05-.1a4 4 0 0 1-.42-1.789l.005-4.514A2.023 2.023 0 0 1 4.98 2.933l.788.592.001-.986A2.023 2.023 0 0 1 9.008.925l3.608 2.712a4 4 0 0 1 1.176 1.413l.05.1a4 4 0 0 1 .42 1.789l-.005 4.514a2.023 2.023 0 0 1-3.238 1.614l-.788-.592-.001.986a2.022 2.022 0 0 1-1.12 1.807Zm1.123-4.668 1.687 1.268a.523.523 0 0 0 .837-.417l.005-4.514A2.5 2.5 0 0 0 12.5 5.82l-.05-.1a2.5 2.5 0 0 0-.734-.883L8.107 2.124a.523.523 0 0 0-.837.417l-.002 2.11 1.32.994a4 4 0 0 1 1.177 1.413l.05.1a4 4 0 0 1 .42 1.789l-.002 1.653Z"
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
export default LayersVertical;