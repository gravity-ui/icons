import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeLeftToLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.25 1.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v12.5q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354zm2.682 4.81a1.77 1.77 0 0 0-.682 1.438v.004q0 .882.682 1.438l4.32 3.532a1.2 1.2 0 0 0 .626.268 1.2 1.2 0 0 0 .672-.109 1.2 1.2 0 0 0 .51-.451 1.2 1.2 0 0 0 .19-.654V11q0-.25.25-.25h1.75q.621 0 1.06-.44.44-.438.44-1.06v-2.5q0-.62-.44-1.06a1.45 1.45 0 0 0-1.06-.44H11.5q-.25 0-.25-.25V3.973a1.2 1.2 0 0 0-.19-.654 1.2 1.2 0 0 0-.51-.451 1.2 1.2 0 0 0-.672-.109 1.2 1.2 0 0 0-.627.268zm5.318-2.53v2.22h3q.207 0 .354.146a.48.48 0 0 1 .146.354v2.5a.48.48 0 0 1-.146.354.48.48 0 0 1-.354.146h-3v2.221a.24.24 0 0 1-.073.177.24.24 0 0 1-.177.073.24.24 0 0 1-.158-.057L5.566 8.665A.82.82 0 0 1 5.25 8a.82.82 0 0 1 .316-.665l4.276-3.5q.194-.157.351.036a.24.24 0 0 1 .057.158Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeLeftToLine;
