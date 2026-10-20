import * as React from 'react';
import type {SVGProps} from 'react';
const LetterAUnderline = (props: SVGProps<SVGSVGElement>) => (
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
            d="m9.145 2.042-.04-.096v-.001Q8.8 1.309 8.1 1.254h-.001l-.103-.004h-.001a1.2 1.2 0 0 0-.652.191 1.2 1.2 0 0 0-.45.508l-.042.096-3.067 8.022v.001a.48.48 0 0 0 .021.37.48.48 0 0 0 .275.255q.188.072.374-.007a.48.48 0 0 0 .263-.26v-.002l.77-2.013a.23.23 0 0 1 .233-.161h4.557a.23.23 0 0 1 .233.16l.77 2.014.026.058v.002q.087.165.262.233.18.07.36.001a.48.48 0 0 0 .267-.24.48.48 0 0 0 .039-.35v-.002l-.02-.06zm.559 5.208h-3.41a.24.24 0 0 1-.177-.073.25.25 0 0 1-.057-.266l1.707-4.458q.09-.234.322-.144a.24.24 0 0 1 .145.144L9.938 6.91q.088.233-.145.323a.3.3 0 0 1-.089.016Zm3.546 6a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-9.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h9.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354Z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LetterAUnderline;
