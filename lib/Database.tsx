import * as React from 'react';
import type {SVGProps} from 'react';
const Database = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 1.25q-2.56 0-4.138.727Q2.25 2.72 2.25 4v8q0 1.28 1.612 2.023Q5.44 14.75 8 14.75t4.138-.727Q13.75 13.28 13.75 12V4q0-1.28-1.612-2.023Q10.56 1.25 8 1.25ZM12.75 4q0 .64-1.03 1.115-1.382.635-3.72.635-2.34 0-3.72-.635Q3.25 4.641 3.25 4q0-.64 1.03-1.115Q5.662 2.25 8 2.25q2.34 0 3.72.635 1.03.474 1.03 1.115ZM8 6.75q2.79 0 4.383-.848a.24.24 0 0 1 .19-.018.24.24 0 0 1 .148.122q.03.054.029.117V8q0 .64-1.03 1.115-1.381.635-3.72.635t-3.72-.635Q3.25 8.641 3.25 8V6.123a.24.24 0 0 1 .073-.177.24.24 0 0 1 .177-.073q.062 0 .117.03Q5.212 6.748 8 6.75Zm0 4q2.79 0 4.383-.848a.24.24 0 0 1 .19-.018.24.24 0 0 1 .148.122q.03.054.029.117V12q0 .64-1.03 1.114-1.377.636-3.72.636t-3.72-.636Q3.25 12.64 3.25 12v-1.877q0-.25.25-.25.061 0 .117.03 1.598.846 4.383.847Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Database;
