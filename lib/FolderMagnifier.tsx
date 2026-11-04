import * as React from 'react';
import type {SVGProps} from 'react';
const FolderMagnifier = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.555 2.555A2.65 2.65 0 0 0 .75 4.5V11q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h9a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 15.25 11V6a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12.5 3.25h-5a.24.24 0 0 1-.177-.073l-.62-.621a2.65 2.65 0 0 0-1.946-.806H3.5a2.65 2.65 0 0 0-1.945.805Zm5.06 1.328.353.352.015.015H12.5q.725 0 1.237.513.513.512.513 1.237v5q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-9q-.725 0-1.237-.513A1.7 1.7 0 0 1 1.75 11V4.5q0-.725.513-1.237A1.7 1.7 0 0 1 3.5 2.75h1.258q.725 0 1.237.513zm2.897 3.108Q8.996 5.962 7.86 5.778q-1.137-.183-1.95.63-.815.815-.63 1.95.183 1.137 1.212 1.653t2.05-.017q.162-.084.292.045l.813.814.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-.813-.814q-.129-.13-.045-.293.532-1.02.017-2.049ZM6.25 8q0-.518.366-.884T7.5 6.75t.884.366T8.75 8t-.366.884a1.2 1.2 0 0 1-.884.366q-.518 0-.884-.366A1.2 1.2 0 0 1 6.25 8Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FolderMagnifier;
