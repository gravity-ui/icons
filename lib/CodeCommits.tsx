import * as React from 'react';
import type {SVGProps} from 'react';
const CodeCommits = (props: SVGProps<SVGSVGElement>) => (
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
                d="M8 3.25h-.008a1.25 1.25 0 1 0 .016 0zm.75-2.5v1.104a2.751 2.751 0 0 1 0 5.292v1.708a2.751 2.751 0 0 1 0 5.293v1.103a.75.75 0 0 1-1.5 0v-1.104a2.751 2.751 0 0 1 0-5.292V7.146a2.751 2.751 0 0 1 0-5.292V.75a.75.75 0 0 1 1.5 0m-.745 12h-.01a1.25 1.25 0 1 1 .01 0"
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
export default CodeCommits;
