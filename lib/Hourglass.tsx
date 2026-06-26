import * as React from 'react';
import type {SVGProps} from 'react';
const Hourglass = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.25 1a.75.75 0 0 1 0 1.5h-.5v1.822a3.75 3.75 0 0 1-1.386 2.91L10.42 8l.945.768a3.75 3.75 0 0 1 1.386 2.91v1.821h.5a.75.75 0 0 1 0 1.5h-1.23L12 15H4l-.02-.001H2.754a.75.75 0 0 1 0-1.5h.496v-1.821c0-1.13.51-2.198 1.386-2.91L5.579 8l-.943-.768a3.75 3.75 0 0 1-1.386-2.91V2.5h-.5a.75.75 0 0 1 0-1.5zm-8.5 1.504v1.818l.015.252a2.25 2.25 0 0 0 .816 1.494l1.66 1.35a.75.75 0 0 1 0 1.164l-1.66 1.35a2.25 2.25 0 0 0-.831 1.746v1.821h6.5v-1.821a2.25 2.25 0 0 0-.831-1.746l-1.661-1.35a.75.75 0 0 1 0-1.164l1.66-1.35a2.25 2.25 0 0 0 .832-1.746V2.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default Hourglass;
