import * as React from 'react';
import type {SVGProps} from 'react';
const Hand = (props: SVGProps<SVGSVGElement>) => (
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
                d="M6 3.325v5.971l-1.5-.375-.53-.132-.672-.168-.205-.051a.478.478 0 0 0-.409.84l.167.13.547.425.43.334 2.142 1.666 2.728-.181L12 11.5l.667-3.557.108-.579.455-2.426.148-.787.009-.047a.51.51 0 0 0-.993-.234l-.013.046-.22.77L12 5.25 11.5 7h-1V2.023a.523.523 0 0 0-1.043-.048l-.005.048-.07.775-.216 2.381-.147 1.617L9 7H8l-.019-.093-.329-1.647L7.5 4.5l-.26-1.298-.13-.652-.022-.108A.55.55 0 0 0 6 2.55zm-2.543 3.79 1.043.26V2.55a2.05 2.05 0 0 1 3.617-1.321A2.023 2.023 0 0 1 12 2.023v.182a2.01 2.01 0 0 1 2.861 2.176l-1.387 7.395a1.5 1.5 0 0 1-1.346 1.219l-3.302.283-.028.002-2.728.182a1.5 1.5 0 0 1-1.02-.313l-3.287-2.555a1.978 1.978 0 0 1 1.694-3.48m9.346 8.383a.75.75 0 0 0-.106-1.496l-7 .5a.75.75 0 1 0 .106 1.496z"
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
export default Hand;
