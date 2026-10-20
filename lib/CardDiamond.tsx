import * as React from 'react';
import type {SVGProps} from 'react';
const CardDiamond = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 4a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11 1.25H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4v8q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12zm-1 8q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75H5q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V4q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.25h6q.725 0 1.237.513.513.512.513 1.237zm-7.5-4.105v.21l.024.014q1.012.601 1.713 1.557.681.927.954 2.036l.01.038h.098l.01-.038q.273-1.109.954-2.036a5.7 5.7 0 0 1 1.713-1.557l.024-.014v-.21l-.024-.014a5.7 5.7 0 0 1-1.713-1.557 5.7 5.7 0 0 1-.954-2.036l-.01-.038h-.098l-.01.038a5.7 5.7 0 0 1-.954 2.036 5.7 5.7 0 0 1-1.713 1.557z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CardDiamond;
