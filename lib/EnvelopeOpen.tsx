import * as React from 'react';
import type {SVGProps} from 'react';
const EnvelopeOpen = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.144 4.105q-.645.366-1.02 1.007Q.75 5.754.75 6.497V11.5q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h9a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945V6.497q0-.743-.374-1.384a2.7 2.7 0 0 0-1.02-1.008l-4.5-2.55A2.7 2.7 0 0 0 8 1.197q-.724 0-1.356.358zm6.72-1.68 4.453 2.526q.218.123.094.34a.3.3 0 0 1-.067.077L8.9 8.7Q8.5 9 8 9t-.9-.3L2.656 5.367a.24.24 0 0 1-.097-.165.25.25 0 0 1 .124-.253l4.454-2.524q.4-.228.863-.228t.863.228ZM14.25 11.5q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-9q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.75 11.5V6.494l.001-.06q.001-.081.05-.146a.24.24 0 0 1 .165-.097.24.24 0 0 1 .185.047L6.5 9.5q.666.5 1.5.5t1.5-.5l4.349-3.262a.24.24 0 0 1 .146-.05.24.24 0 0 1 .178.07.24.24 0 0 1 .076.176l.001.064z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default EnvelopeOpen;
