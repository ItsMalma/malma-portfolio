import * as dateFns from "date-fns";
import { useMemo } from "react";

interface ExperienceItemProps {
	companyLogoSrc: string;
	companyName: string;
	title: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string;
}

function ExperienceItem({
	companyLogoSrc,
	companyName,
	title,
	location,
	startDate,
	endDate,
	description,
}: ExperienceItemProps) {
	const [formattedStartDate, formattedEndDate] = useMemo(
		() => [
			dateFns.format(
				dateFns.parse(startDate, "MM/yyyy", new Date()),
				"MMMM yyyy",
			),
			dateFns.format(
				dateFns.parse(endDate, "MM/yyyy", new Date()),
				"MMMM yyyy",
			),
		],
		[startDate, endDate],
	);

	return (
		<li className="mb-6">
			<div className="flex flex-col">
				<div className="inline-flex items-center justify-start gap-2">
					<img
						src={companyLogoSrc}
						alt={`Logo ${companyName}`}
						className="size-7 cursor-pointer rounded-sm md:size-9"
					/>
					<h4 className="text-lg font-semibold capitalize md:text-xl">
						{companyName}
					</h4>
				</div>
				<p className="text-lg font-medium capitalize">{title}</p>
				<p className="text-sm italic">{location}</p>
				<time className="text-sm">
					{formattedStartDate} - {formattedEndDate}
				</time>
				<p className="font-medium">{description}</p>
			</div>
		</li>
	);
}

export function ExperiencesSection() {
	return (
		<section className="mb-8 flex flex-col gap-8">
			<div className="border-b pb-2">
				<h3 className="text-center text-2xl font-medium tracking-wider capitalize md:text-3xl">
					Experiences
				</h3>
			</div>
			<ol className="w-full">
				<ExperienceItem
					companyLogoSrc="/companies/pt-bajau-escorindo.png"
					companyName="PT Bajau Escorindo"
					title="Intern System Engineer"
					location="South Jakarta, Jakarta, Indonesia"
					startDate="12/2025"
					endDate="05/2026"
					description=""
				/>
				<ExperienceItem
					companyLogoSrc="/companies/pt-kabar-haji-indonesia.png"
					companyName="PT Kabar Haji Indonesia"
					title="Lead Web Developer"
					location="Depok, West Java, Indonesia"
					startDate="05/2025"
					endDate="11/2025"
					description="Migrated a web application from Next.js to SvelteKit, developed a news website for Umrah and Hajj using SvelteKit, and built an internal REST API framework using C#"
				/>
				<ExperienceItem
					companyLogoSrc="/companies/pt-kabar-haji-indonesia.png"
					companyName="PT Kabar Haji Indonesia"
					title="Junior Backend Web Developer"
					location="South Jakarta, Jakarta, Indonesia"
					startDate="11/2024"
					endDate="05/2025"
					description="Developed APIs for an Umrah travel application using Go and PostgreSQL, integrating with Midtrans and a notification service."
				/>
				<ExperienceItem
					companyLogoSrc="/companies/pt-wellmagic-media-digital.png"
					companyName="PT Wellmagic Media Digital"
					title="Intern Software Engineer"
					location="South Tangerang, Banten, Indonesia"
					startDate="07/2024"
					endDate="12/2024"
					description="Develop a health-related website as a frontend using Next.js, a point-of-sale cashier application as a fullstack using Laravel and Vue, and retail management application as a fullstack using Express and Vue"
				/>
				<ExperienceItem
					companyLogoSrc="/companies/pt-global-technology-adi-perkasa.png"
					companyName="PT Global Technology Adi Perkasa"
					title="Lead Web Developer"
					location="Tangerang, Banten, Indonesia"
					startDate="08/2023"
					endDate="11/2024"
					description="Developed and maintained a logistics management system using Next.js and Go, and was responsible for managing the company's website and server"
				/>
			</ol>
		</section>
	);
}
