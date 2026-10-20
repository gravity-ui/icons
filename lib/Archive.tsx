import * as React from 'react';
import type {SVGProps} from 'react';
const Archive = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.75 11V7.408q0-.832-.462-1.525l-1.902-2.854q-.52-.78-1.456-.779H5.07q-.937 0-1.456.78L1.712 5.883q-.462.693-.462 1.525V11q0 1.14.805 1.945A2.65 2.65 0 0 0 4 13.75h8a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 14.75 11Zm-3.196-7.416 1.851 2.777a.24.24 0 0 1 .037.188.24.24 0 0 1-.106.159.25.25 0 0 1-.139.042H2.803q-.25 0-.25-.25 0-.075.042-.139l1.851-2.777a.71.71 0 0 1 .624-.334h5.86q.402 0 .624.334Zm2.123 4.24A.24.24 0 0 1 13.75 8v3q0 .725-.513 1.237A1.7 1.7 0 0 1 12 12.75H4q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.25 11V8q0-.25.25-.25h11a.24.24 0 0 1 .177.073ZM9.75 10.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-2.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h2.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Archive;
