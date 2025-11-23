import { Link, type LinkProps } from "@tanstack/react-router";
import { MoonIcon, SunIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { useTheme } from "#/hooks/use-theme";

interface NavLinkProps {
	to: LinkProps["to"];
	text: string;
}

function NavLink({ to, text }: NavLinkProps) {
	return (
		<Link to={to} className="group relative text-sm font-medium">
			<span>{text}</span>
			<span className="bg-dark dark:bg-light absolute bottom-0 left-0 h-px w-full origin-bottom-right scale-x-0 transition-transform duration-300 ease-in-out group-hover:origin-bottom-left group-hover:scale-x-100" />
		</Link>
	);
}

export function Header() {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className="sticky top-0 z-50 w-screen border-b backdrop-blur-sm">
			<div className="container mx-auto flex max-w-lg items-center justify-between px-4 py-2 md:py-3">
				<nav className="hidden items-center gap-6 md:flex">
					<NavLink to="/" text="About" />
					<NavLink to="/blog" text="Blog" />
				</nav>
				<div className="flex items-center justify-end">
					<button
						className="focus:ring-dark/50 dark:focus:ring-light/50 flex size-9 items-center justify-center rounded-md border p-2 transition-colors outline-none focus:ring-2 focus:ring-offset-1 focus:outline-none active:outline-none"
						onClick={toggleTheme}
					>
						<AnimatePresence mode="wait" initial={false}>
							{theme === "dark" ? (
								<motion.span
									key="moon-icon"
									initial={{ opacity: 0, scale: 0.55, rotate: 25 }}
									animate={{ opacity: 1, scale: 1, rotate: 0 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.33 }}
								>
									<MoonIcon className="size-full" />
								</motion.span>
							) : (
								<motion.span
									key="sun-icon"
									initial={{ opacity: 0, scale: 0.55, rotate: -25 }}
									animate={{ opacity: 1, scale: 1, rotate: 0 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.33 }}
								>
									<SunIcon className="size-full" />
								</motion.span>
							)}
						</AnimatePresence>
					</button>
				</div>
			</div>
		</header>
	);
}
