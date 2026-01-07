import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

import type { Theme } from "#/types/ui";

const htmlElement = document.documentElement;

export interface UseThemeReturn {
	theme: Theme;
	toggleTheme: () => void;
}

export function useTheme(): UseThemeReturn {
	// State to hold the current theme
	const [theme, setTheme] = useState<Theme>(
		htmlElement.classList.contains("dark") ? "dark" : "light",
	);

	// Effect to observe changes to html element class attributes
	// and update theme state accordingly
	useEffect(() => {
		const observer = new MutationObserver(() => {
			setTheme(htmlElement.classList.contains("dark") ? "dark" : "light");
		});

		observer.observe(htmlElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => observer.disconnect();
	}, []);

	// Callback to toggle theme
	// with view transition animation
	const toggleTheme = useCallback(async () => {
		await document.startViewTransition(() => {
			flushSync(() => {
				setTheme((prevTheme) => {
					if (prevTheme === "light") {
						htmlElement.classList.add("dark");
						return "dark";
					} else {
						htmlElement.classList.remove("dark");
						return "light";
					}
				});
			});
		}).ready;

		htmlElement.animate(
			{
				clipPath: ["inset(0 50% 0 50%)", "inset(0 0 0 0)"],
			},
			{
				duration: 700,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			},
		);
	}, []);

	return {
		theme,
		toggleTheme,
	};
}
