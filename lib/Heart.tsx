import * as React from 'react';
import type {SVGProps} from 'react';
const Heart = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.76 1.749q-1.836 0-2.942 1.215Q.75 4.135.75 6.013q0 2.746 2.442 5.088 1.61 1.54 4.576 3.091.231.122.462.002 2.931-1.517 4.575-3.098 2.445-2.352 2.445-5.084 0-1.88-1.07-3.051-1.11-1.212-2.94-1.212a3.7 3.7 0 0 0-1.64.385 3.9 3.9 0 0 0-1.402 1.144.24.24 0 0 1-.166.095.25.25 0 0 1-.23-.095 3.9 3.9 0 0 0-1.407-1.145A3.7 3.7 0 0 0 4.76 1.75ZM1.75 6.013q0-1.488.807-2.375l.013-.013v-.001l.002-.001q.807-.873 2.188-.873.862 0 1.607.526.825.582 1.158 1.596.112.345.475.345t.475-.344Q8.81 3.855 9.63 3.275a2.73 2.73 0 0 1 1.611-.525q1.39 0 2.2.884.81.888.81 2.379 0 2.304-2.138 4.362-1.452 1.396-3.993 2.748a.24.24 0 0 1-.235 0q-2.572-1.378-4-2.745Q1.75 8.335 1.75 6.013Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Heart;
