import clsx from "clsx";

import type { LogoProps } from "#/types/logo";

export function DrizzleORMLogo({ ...props }: LogoProps) {
	return (
		<svg
			{...props}
			fill="none"
			viewBox="0 0 160 160"
			className={clsx("bg-dark rounded-md dark:bg-none", props.className)}
		>
			<rect
				width="9.631"
				height="40.852"
				fill="#C5F74F"
				rx="4.816"
				transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"
			/>
			<rect
				width="9.631"
				height="40.852"
				fill="#C5F74F"
				rx="4.816"
				transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"
			/>
			<rect
				width="9.631"
				height="40.852"
				fill="#C5F74F"
				rx="4.816"
				transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"
			/>
			<rect
				width="9.631"
				height="40.852"
				fill="#C5F74F"
				rx="4.816"
				transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"
			/>
		</svg>
	);
}
