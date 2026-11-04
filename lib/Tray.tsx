import * as React from 'react';
import type {SVGProps} from 'react';
const Tray = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.75 11V7.83q0-.763-.392-1.414L12.368 3.1a1.7 1.7 0 0 0-.638-.622 1.7 1.7 0 0 0-.861-.228H5.132q-.461 0-.862.227-.401.228-.639.623l-1.99 3.316A2.7 2.7 0 0 0 1.25 7.83V11q0 1.14.805 1.945A2.65 2.65 0 0 0 4 13.75h8a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 14.75 11Zm-1.285-4.129q.036.06.036.129 0 .25-.25.25h-3.056l-.088.355q-.181.726-.77 1.186-.59.46-1.337.46t-1.337-.46a2.1 2.1 0 0 1-.77-1.185l-.088-.356H2.75a.25.25 0 0 1-.129-.036.24.24 0 0 1-.114-.153.24.24 0 0 1 .029-.19L4.49 3.615a.7.7 0 0 1 .642-.365h5.736q.424 0 .642.364zM11.112 8.25H13.5a.24.24 0 0 1 .177.073.24.24 0 0 1 .073.177V11q0 .725-.513 1.237A1.7 1.7 0 0 1 12 12.75H4q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.25 11V8.5q0-.25.25-.25h2.388q.16 0 .227.146a3.1 3.1 0 0 0 1.17 1.35A3.1 3.1 0 0 0 8 10.249a3.1 3.1 0 0 0 1.714-.503 3.1 3.1 0 0 0 1.17-1.35.23.23 0 0 1 .228-.146Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Tray;
