import * as React from 'react';
import type {SVGProps} from 'react';
const FolderLock = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.555 2.555A2.65 2.65 0 0 0 .75 4.5V11q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h9a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 15.25 11V6a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12.5 3.25h-5a.24.24 0 0 1-.177-.073l-.62-.621a2.65 2.65 0 0 0-1.946-.806H3.5a2.65 2.65 0 0 0-1.945.805Zm5.062 1.329.366.366H12.5q.725 0 1.237.513.513.512.513 1.237v5q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-9q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.75 11V4.5q0-.725.513-1.237A1.7 1.7 0 0 1 3.5 2.75h1.257q.726 0 1.237.513zM10 7.75q-.25 0-.25-.25v-.25q0-.725-.513-1.237A1.7 1.7 0 0 0 8 5.5q-.725 0-1.237.513A1.7 1.7 0 0 0 6.25 7.25v.25q0 .25-.25.25h-.1q-.477 0-.813.337a1.1 1.1 0 0 0-.337.813v1.2q0 .477.337.813.336.337.813.337h4.2q.477 0 .813-.337.337-.336.337-.813V8.9q0-.477-.337-.813a1.1 1.1 0 0 0-.813-.337zM8.75 7.5q0 .25-.25.25h-1q-.25 0-.25-.25v-.25q0-.31.22-.53A.72.72 0 0 1 8 6.5q.31 0 .53.22t.22.53zm-3 2.5V9q0-.25.25-.25h4q.25 0 .25.25v1q0 .25-.25.25H6q-.25 0-.25-.25Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FolderLock;
