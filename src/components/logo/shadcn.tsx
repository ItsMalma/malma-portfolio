import type { LogoProps } from "#/types/logo";

export function ShadcnLogo({ ...props }: LogoProps) {
	return (
		<svg {...props} viewBox="0 0 256 256">
			<path fill="none" d="M0 0h256v256H0z" />
			<path
				fill="none"
				className="stroke-dark dark:stroke-light"
				strokeWidth="25"
				strokeLinecap="round"
				d="M208 128l-80 80M192 40L40 192"
			/>
		</svg>
	);
}
