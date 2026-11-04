import * as React from 'react';
import type {SVGProps} from 'react';
const House = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.5 14.25a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945V6.978q0-.64-.282-1.215a2.7 2.7 0 0 0-.79-.965l-3.5-2.692A2.68 2.68 0 0 0 8 1.536q-.936 0-1.677.57l-3.5 2.692q-.508.39-.79.965a2.7 2.7 0 0 0-.283 1.214V11.5q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805zm1.75-2.75q0 .782-.583 1.304a1.7 1.7 0 0 1-1.158.446H11q-.25 0-.25-.25V9.5q0-.725-.513-1.237A1.7 1.7 0 0 0 9 7.75H7q-.725 0-1.237.513A1.7 1.7 0 0 0 5.25 9.5V13q0 .25-.25.25h-.507a1.68 1.68 0 0 1-1.234-.514 1.68 1.68 0 0 1-.509-1.237V6.978q0-.862.682-1.388l3.5-2.692Q7.406 2.535 8 2.535t1.068.363l3.5 2.692q.682.525.682 1.387zM9 8.75q.31 0 .53.22t.22.53V13q0 .25-.25.25h-3q-.25 0-.25-.25V9.5q0-.31.22-.53A.72.72 0 0 1 7 8.75z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default House;
