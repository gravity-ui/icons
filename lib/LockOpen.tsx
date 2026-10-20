import * as React from 'react';
import type {SVGProps} from 'react';
const LockOpen = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.841 2.382a2.7 2.7 0 0 1 1.381.998q.528.724.528 1.62v1q0 .25-.25.25H4a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 1.25 9v3q0 1.14.805 1.945A2.65 2.65 0 0 0 4 14.75h8.001a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 14.75 12V9a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12 6.25q-.25 0-.25-.25V5q0-1.282-.782-2.295a3.65 3.65 0 0 0-2.024-1.337 3.65 3.65 0 0 0-2.418.181 3.65 3.65 0 0 0-1.802 1.623.34.34 0 0 0-.009.32.45.45 0 0 0 .28.243q.19.063.402-.03a.9.9 0 0 0 .368-.307 2.7 2.7 0 0 1 1.372-1.009 2.7 2.7 0 0 1 1.704-.007ZM4 7.25h8q.725 0 1.237.513.513.512.513 1.237v3q0 .725-.513 1.237A1.7 1.7 0 0 1 12 13.75H4q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.25 12V9q0-.725.513-1.237A1.7 1.7 0 0 1 4 7.25ZM8.5 9.5a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 9a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v2q0 .207.146.354A.48.48 0 0 0 8 12a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LockOpen;
