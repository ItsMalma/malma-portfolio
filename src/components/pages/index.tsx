import { AboutSection } from "#/components/sections/about";
import { EducationsSection } from "#/components/sections/educations";
import { ExperiencesSection } from "#/components/sections/experiences";
import { HeroSection } from "#/components/sections/hero";
import { TechStacksSection } from "#/components/sections/tech-stacks";

export function IndexPage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<TechStacksSection />
			<ExperiencesSection />
			<EducationsSection />
		</>
	);
}
