import * as React from 'react';
import type {SVGProps} from 'react';
const Sticker = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.25 8.257V4.5a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11.5 1.75h-7a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 1.75 4.5v7q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h3.757a2.65 2.65 0 0 0 1.945-.806l3.242-3.242a2.65 2.65 0 0 0 .806-1.945ZM4.5 2.75h7q.725 0 1.237.513.513.512.513 1.237v3q0 .25-.25.25h-2.5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 7.75 10.5V13q0 .25-.25.25h-3q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.75 11.5v-7q0-.725.513-1.237A1.7 1.7 0 0 1 4.5 2.75Zm4.995 9.988q-.167.166-.371.282a.25.25 0 0 1-.124.033.24.24 0 0 1-.177-.073.24.24 0 0 1-.073-.177V10.5q0-.725.513-1.237A1.7 1.7 0 0 1 10.5 8.75h2.303q.066 0 .124.033.09.051.117.15a.24.24 0 0 1-.024.19q-.116.205-.282.372z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Sticker;
