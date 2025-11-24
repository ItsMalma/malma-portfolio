import { GitHubLogo } from "#/components/logo/github";
import { LinkedInLogo } from "#/components/logo/linkedin";
import type { LogoComponent } from "#/types/logo";

interface HeroLinkProps {
	href: string;
	name: string;
	logo: LogoComponent;
}

function HeroLink({ href, name, logo: Logo }: HeroLinkProps) {
	return (
		<div className="group relative">
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={name}
				className="relative flex size-7 items-center justify-center overflow-hidden rounded-md"
			>
				<Logo className="text-dark dark:text-light relative z-10 size-full" />
			</a>
			<span className="bg-light-hover dark:bg-dark-hover invisible absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md px-2.5 py-1.5 text-sm whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:-bottom-10 group-hover:opacity-100">
				{name}
			</span>
		</div>
	);
}

export function HeroSection() {
	return (
		<section className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-2 text-center md:text-left">
					<h1 className="text-3xl font-bold sm:text-4xl xl:text-5xl">
						Adam Akmal Madani
					</h1>
					<h2 className="text-lg font-semibold sm:text-xl xl:text-2xl">
						Web Developer
					</h2>
				</div>
				<div className="hidden flex-wrap items-center gap-3 md:flex">
					<HeroLink
						href="https://linkedin.com/in/malma28"
						name="LinkedIn"
						logo={LinkedInLogo}
					/>
					<HeroLink
						href="https://github.com/ItsMalma"
						name="GitHub"
						logo={GitHubLogo}
					/>
				</div>
			</div>
			<img
				src="/me.jpg"
				alt="Me"
				className="h-115 w-100 rounded-xl object-cover object-center"
			/>
			<div className="flex flex-wrap items-center gap-3 md:hidden">
				<HeroLink
					href="https://linkedin.com/in/malma28"
					name="LinkedIn"
					logo={LinkedInLogo}
				/>
				<HeroLink
					href="https://github.com/ItsMalma"
					name="GitHub"
					logo={GitHubLogo}
				/>
			</div>
		</section>
	);
}
