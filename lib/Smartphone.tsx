import * as React from 'react';
import type {SVGProps} from 'react';
const Smartphone = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.445 1.555A2.65 2.65 0 0 0 10.5.75h-5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.75 3.5v9q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h5a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-9a2.65 2.65 0 0 0-.805-1.945ZM12.25 12.5q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-5q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.75 12.5v-9q0-.725.513-1.237A1.7 1.7 0 0 1 5.5 1.75h5q.725 0 1.237.513.513.512.513 1.237zm-6.5-.75q0 .207.146.354a.48.48 0 0 0 .354.146h3.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-3.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Smartphone;
