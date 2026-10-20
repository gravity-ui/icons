import * as React from 'react';
import type {SVGProps} from 'react';
const Video = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.5 12.75q.997 0 1.762-.639a2.67 2.67 0 0 0 .944-1.619q.045-.245.29-.201.056.01.101.043l1.554 1.11q.376.269.836.302t.872-.178.65-.605.241-.856V5.893q0-.462-.24-.856a1.6 1.6 0 0 0-.651-.605q-.411-.211-.872-.178a1.6 1.6 0 0 0-.836.302l-1.554 1.11q-.203.146-.348-.058a.25.25 0 0 1-.043-.1 2.67 2.67 0 0 0-.944-1.62A2.67 2.67 0 0 0 8.5 3.25H3a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 .25 6v4q0 1.14.805 1.945A2.65 2.65 0 0 0 3 12.75zm0-8.5q.725 0 1.237.513.513.512.513 1.237v4q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513H3q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.25 10V6q0-.725.513-1.237A1.7 1.7 0 0 1 3 4.25zm5.233 6.38-2.378-1.699a.24.24 0 0 1-.105-.203V7.272q0-.13.105-.203l2.378-1.7a.6.6 0 0 1 .668-.048.6.6 0 0 1 .349.572v4.214a.6.6 0 0 1-.349.572.6.6 0 0 1-.668-.049Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Video;
