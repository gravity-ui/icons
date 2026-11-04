import * as React from 'react';
import type {SVGProps} from 'react';
const Cubes3 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.5.75q-.932 0-1.591.659-.66.66-.659 1.591v3q0 .47.187.9a.24.24 0 0 1 .004.191.25.25 0 0 1-.233.159H3q-.932 0-1.591.659-.66.66-.659 1.591v3q0 .932.659 1.591.66.66 1.591.659h10q.932 0 1.591-.659.66-.66.659-1.591v-3q0-.932-.659-1.591-.66-.66-1.591-.659h-1.208q-.25 0-.25-.25 0-.052.021-.1.187-.428.187-.9V3q0-.932-.659-1.591Q10.431.749 9.5.75zm3 1q.518 0 .884.366T10.75 3v3q0 .518-.366.884a1.2 1.2 0 0 1-.884.366h-3q-.518 0-.884-.366A1.2 1.2 0 0 1 5.25 6V3q0-.518.366-.884T6.5 1.75zm-2 7.75v3q0 .518-.366.884a1.2 1.2 0 0 1-.884.366H3q-.518 0-.884-.366a1.2 1.2 0 0 1-.366-.884v-3q0-.518.366-.884T3 8.25h3.25q.518 0 .884.366T7.5 9.5Zm1 3v-3q0-.518.366-.884t.884-.366H13q.518 0 .884.366t.366.884v3q0 .518-.366.884a1.2 1.2 0 0 1-.884.366H9.75q-.518 0-.884-.366A1.2 1.2 0 0 1 8.5 12.5Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Cubes3;
