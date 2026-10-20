import * as React from 'react';
import type {SVGProps} from 'react';
const LetterM = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.964 2.752a1 1 0 0 0-.902-.502q-.44 0-.75.311A1.02 1.02 0 0 0 3 3.312v9.938q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146A.48.48 0 0 0 4 13.25V3.97q0-.25.25-.25.139 0 .212.118l3.113 5.01A.47.47 0 0 0 8 9.084a.47.47 0 0 0 .425-.236l3.113-5.01a.24.24 0 0 1 .155-.111.24.24 0 0 1 .189.03q.118.074.118.213v9.28q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V3.312q0-.355-.214-.64a1.03 1.03 0 0 0-.557-.382 1.03 1.03 0 0 0-.674.03q-.331.13-.52.432L8.212 7.294a.24.24 0 0 1-.155.111.24.24 0 0 1-.189-.03.25.25 0 0 1-.08-.081z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LetterM;
