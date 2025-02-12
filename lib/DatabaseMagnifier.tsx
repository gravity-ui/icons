import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const DatabaseMagnifier = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.615 4.888c.814-.375.885-.714.885-.888s-.071-.513-.885-.888S9.538 2.5 8 2.5s-2.799.237-3.615.612C3.57 3.487 3.5 3.826 3.5 4s.071.513.885.888S6.462 5.5 8 5.5s2.799-.237 3.615-.612m.885 1.235C11.4 6.708 9.792 7 8 7s-3.4-.292-4.5-.877V8c0 .174.071.513.885.888S6.462 9.5 8 9.5h.04c-.187.463-.29.968-.29 1.498-1.691-.026-3.202-.318-4.25-.875V12c0 .174.071.513.885.887.816.377 2.077.613 3.615.613q.317 0 .617-.013a4 4 0 0 0 1.848 1.302C9.713 14.93 8.879 15 8 15c-3.314 0-6-1-6-3V4c0-2 2.686-3 6-3s6 1 6 3v3.692a4 4 0 0 0-1.5-.622zm-.75 6.377a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1.5c.556 0 1.077-.152 1.524-.415l1.446 1.445a.75.75 0 1 0 1.06-1.06l-1.445-1.446A3 3 0 1 0 11.75 14"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(DatabaseMagnifier);
export default ForwardRef;
