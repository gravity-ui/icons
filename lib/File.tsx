import * as React from 'react';
import type {SVGProps} from 'react';
const File = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 7.243a2.65 2.65 0 0 0-.806-1.945L9.702 2.056a2.65 2.65 0 0 0-1.945-.806H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4v8q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12zM5 13.75q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V4q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.25h2q.25 0 .25.25V5q0 1.14.805 1.945A2.65 2.65 0 0 0 10 7.75h2.5q.25 0 .25.25v4q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75zm7.238-7.745q.166.167.282.371.124.218-.093.341a.25.25 0 0 1-.124.033H10q-.725 0-1.237-.513A1.7 1.7 0 0 1 8.25 5V2.697a.24.24 0 0 1 .073-.177.24.24 0 0 1 .177-.073q.066 0 .124.033.204.115.37.282z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default File;
