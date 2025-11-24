import * as dateFns from "date-fns";
import { useMemo } from "react";

interface EducationItemProps {
	schoolLogoSrc: string;
	schoolName: string;
	major: string;
	location: string;
	startDate: string;
	endDate: string;
}

function EducationItem({
	schoolLogoSrc,
	schoolName,
	major,
	location,
	startDate,
	endDate,
}: EducationItemProps) {
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
						src={schoolLogoSrc}
						alt={`Logo ${schoolName}`}
						className="size-7 cursor-pointer rounded-sm md:size-9"
					/>
					<h4 className="text-lg font-semibold capitalize md:text-xl">
						{schoolName}
					</h4>
				</div>
				<p className="text-lg font-medium capitalize">{major}</p>
				<p className="text-sm italic">{location}</p>
				<time className="text-sm">
					{formattedStartDate} - {formattedEndDate}
				</time>
			</div>
		</li>
	);
}

export function EducationsSection() {
	return (
		<section className="mb-8 flex flex-col gap-8">
			<div className="border-b pb-2">
				<h3 className="text-center text-2xl font-medium tracking-wider capitalize md:text-3xl">
					Educations
				</h3>
			</div>
			<ol className="w-full">
				<EducationItem
					schoolLogoSrc="/schools/public-vocational-high-school-4-tangerang.png"
					schoolName="Public Vocational High School 4 Tangerang"
					major="Software Engineering"
					location="Tangerang, Banten, Indonesia"
					startDate="07/2022"
					endDate="07/2025"
				/>
				<EducationItem
					schoolLogoSrc="/schools/south-tangerang-institute-of-technology.png"
					schoolName="South Tangerang Institute of Technology"
					major="Computer Science/Informatics"
					location="South Tangerang, Banten, Indonesia"
					startDate="09/2025"
					endDate="08/2029"
				/>
			</ol>
		</section>
	);
}
