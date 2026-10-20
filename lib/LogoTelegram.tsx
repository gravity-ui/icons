import * as React from 'react';
import type {SVGProps} from 'react';
const LogoTelegram = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.049 9.755q.074.015.128.068l3.71 3.71q.442.442 1.044.618.6.175 1.212.04.612-.133 1.084-.545.472-.411.688-.998l2.694-7.309q.194-.528.123-1.087a2.26 2.26 0 0 0-.394-1.02 2.26 2.26 0 0 0-.821-.722 2.26 2.26 0 0 0-1.063-.26h-.104a2.4 2.4 0 0 0-.623.082l-11.03 2.97q-.657.178-1.062.726-.405.547-.382 1.228t.463 1.2 1.107.654zM9.74 6.073l-.001.001-4.355 2.66a.24.24 0 0 1-.179.032L2.019 8.13a.93.93 0 0 1-.541-.32.93.93 0 0 1-.226-.586.93.93 0 0 1 .186-.6.93.93 0 0 1 .518-.355L12.987 3.3q.18-.05.363-.049h.105q.676 0 1.063.555t.151 1.19l-2.691 7.307q-.276.744-1.05.914a1.37 1.37 0 0 1-1.335-.39L6.41 9.642q-.177-.177 0-.354a.3.3 0 0 1 .047-.036l3.806-2.325a.48.48 0 0 0 .222-.309.48.48 0 0 0-.06-.376.48.48 0 0 0-.308-.225.48.48 0 0 0-.376.056Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LogoTelegram;
