import * as React from 'react';
import type {SVGProps} from 'react';
const Cubes3Overlap = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.25 4a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 9.5 1.25h-3a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 3.75 4v1q0 .25-.25.25H3a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 .25 8v3q0 1.14.805 1.945A2.65 2.65 0 0 0 3 13.75h10a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 15.75 11V8a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 13 5.25h-.5q-.25 0-.25-.25zM6.5 2.25h3q.725 0 1.237.513.513.512.513 1.237v3q0 .725-.513 1.237A1.7 1.7 0 0 1 9.5 8.75H9q-.25 0-.25-.25V8a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 6 5.25H5q-.25 0-.25-.25V4q0-.725.513-1.237A1.7 1.7 0 0 1 6.5 2.25Zm-3.5 4h3q.725 0 1.237.513.513.512.513 1.237v3q0 .725-.513 1.237A1.7 1.7 0 0 1 6 12.75H3q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.25 11V8q0-.725.513-1.237A1.7 1.7 0 0 1 3 6.25ZM8.75 11v-1q0-.25.25-.25h.5a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 12.25 7v-.5q0-.25.25-.25h.5q.725 0 1.237.513.513.512.513 1.237v3q0 .725-.513 1.237A1.7 1.7 0 0 1 13 12.75H8.599q-.25 0-.25-.25 0-.067.034-.125A2.7 2.7 0 0 0 8.75 11Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Cubes3Overlap;
