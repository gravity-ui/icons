import * as React from 'react';
import type {SVGProps} from 'react';
const Envelope = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.555 3.555A2.65 2.65 0 0 0 .75 5.5v5q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h9a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-5a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12.5 2.75h-9a2.65 2.65 0 0 0-1.945.805ZM12.5 3.75q.433 0 .808.198a.25.25 0 0 1 .084.071q.15.2-.05.35L8.9 7.7Q8.5 8 8 8t-.9-.3L2.658 4.369a.25.25 0 0 1-.071-.084q-.117-.221.105-.337.376-.198.808-.198zM1.75 5.496l.001-.062a.24.24 0 0 1 .076-.176.24.24 0 0 1 .178-.07q.081.001.146.05L6.5 8.5Q7.166 9 8 9t1.5-.5l4.349-3.262a.24.24 0 0 1 .185-.047.24.24 0 0 1 .165.097q.049.065.05.146l.001.061V10.5q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-9q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.75 10.5z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Envelope;
