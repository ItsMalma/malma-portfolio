import { Tooltip } from "@ark-ui/react/tooltip";

import { AndroidLogo } from "#/components/logo/android";
import { ArkUILogo } from "#/components/logo/arkui";
import { BiomeJSLogo } from "#/components/logo/biomejs";
import { BootstrapLogo } from "#/components/logo/bootstrap";
import { BunLogo } from "#/components/logo/bun";
import { CLogo } from "#/components/logo/c";
import { ChartJSLogo } from "#/components/logo/chartjs";
import { CSharpLogo } from "#/components/logo/csharp";
import { CSSLogo } from "#/components/logo/css";
import { DartLogo } from "#/components/logo/dart";
import { DrizzleORMLogo } from "#/components/logo/drizzle-orm";
import { ElysiaJSLogo } from "#/components/logo/elysiajs";
import { ESLintLogo } from "#/components/logo/eslint";
import { ExpressJSLogo } from "#/components/logo/expressjs";
import { GitLogo } from "#/components/logo/git";
import { GitHubLogo } from "#/components/logo/github";
import { GitLabLogo } from "#/components/logo/gitlab";
import { GleamLogo } from "#/components/logo/gleam";
import { GoLogo } from "#/components/logo/go";
import { GraphQLLogo } from "#/components/logo/graphql";
import { HeadlessUILogo } from "#/components/logo/headlessui";
import { HonoLogo } from "#/components/logo/hono";
import { HTMLLogo } from "#/components/logo/html";
import { JavaLogo } from "#/components/logo/java";
import { JavaScriptLogo } from "#/components/logo/javascript";
import { JestLogo } from "#/components/logo/jest";
import { JSONLogo } from "#/components/logo/json";
import { LinuxLogo } from "#/components/logo/linux";
import { MantineLogo } from "#/components/logo/mantine";
import { MariaDBLogo } from "#/components/logo/mariadb";
import { MongoDBLogo } from "#/components/logo/mongodb";
import { MotionLogo } from "#/components/logo/motion";
import { MySQLLogo } from "#/components/logo/mysql";
import { NeovimLogo } from "#/components/logo/neovim";
import { NestJSLogo } from "#/components/logo/nestjs";
import { NextJSLogo } from "#/components/logo/nextjs";
import { NodeJSLogo } from "#/components/logo/nodejs";
import { NPMLogo } from "#/components/logo/npm";
import { PNPMLogo } from "#/components/logo/pnpm";
import { PostgreSQLLogo } from "#/components/logo/postgresql";
import { PrettierLogo } from "#/components/logo/prettier";
import { PrismaLogo } from "#/components/logo/prisma";
import { PythonLogo } from "#/components/logo/python";
import { RadixUILogo } from "#/components/logo/radixui";
import { ReactLogo } from "#/components/logo/react";
import { ReactQueryLogo } from "#/components/logo/react-query";
import { ReactRouterLogo } from "#/components/logo/react-router";
import { RefineLogo } from "#/components/logo/refine";
import { ShadcnLogo } from "#/components/logo/shadcn";
import { SocketIOLogo } from "#/components/logo/socket-io";
import { SQLiteLogo } from "#/components/logo/sqlite";
import { SvelteLogo } from "#/components/logo/svelte";
import { TailwindLogo } from "#/components/logo/tailwind";
import { TanStackLogo } from "#/components/logo/tanstack";
import { TRPCLogo } from "#/components/logo/trpc";
import { TypeScriptLogo } from "#/components/logo/typescript";
import { ValibotLogo } from "#/components/logo/valibot";
import { VisualStudioCodeLogo } from "#/components/logo/visual-studio-code";
import { ViteLogo } from "#/components/logo/vite";
import { VSCodiumLogo } from "#/components/logo/vscodium";
import { WindowsLogo } from "#/components/logo/windows";
import { ZedLogo } from "#/components/logo/zed";
import { ZodLogo } from "#/components/logo/zod";
import type { LogoComponent } from "#/types/logo";

interface TechStackProps {
	name: string;
	logo: LogoComponent;
}

function TechStack({ name, logo: Logo }: TechStackProps) {
	return (
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Logo className="size-9 cursor-pointer" />
			</Tooltip.Trigger>
			<Tooltip.Positioner>
				<Tooltip.Content>
					<span className="bg-light-hover dark:bg-dark-hover rounded-md px-2.5 py-1.5 text-sm whitespace-nowrap">
						{name}
					</span>
				</Tooltip.Content>
			</Tooltip.Positioner>
		</Tooltip.Root>
	);
}

export function TechStacksSection() {
	return (
		<section className="mb-8 flex flex-col gap-8">
			<div className="border-b pb-2">
				<h3 className="text-center text-2xl font-medium tracking-wider capitalize md:text-3xl">
					Tech Stacks
				</h3>
			</div>
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">Languages</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="TypeScript" logo={TypeScriptLogo} />
						<TechStack name="JSON" logo={JSONLogo} />
						<TechStack name="Go" logo={GoLogo} />
						<TechStack name="C" logo={CLogo} />
						<TechStack name="C#" logo={CSharpLogo} />
						<TechStack name="Dart" logo={DartLogo} />
						<TechStack name="HTML" logo={HTMLLogo} />
						<TechStack name="CSS" logo={CSSLogo} />
						<TechStack name="JavaScript" logo={JavaScriptLogo} />
						<TechStack name="Java" logo={JavaLogo} />
						<TechStack name="GraphQL" logo={GraphQLLogo} />
						<TechStack name="Gleam" logo={GleamLogo} />
						<TechStack name="Python" logo={PythonLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">JavaScript Runtimes</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="Bun" logo={BunLogo} />
						<TechStack name="Node.js" logo={NodeJSLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">
						JavaScript Package Managers
					</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="Bun" logo={BunLogo} />
						<TechStack name="NPM" logo={NPMLogo} />
						<TechStack name="PNPM" logo={PNPMLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">
						JavaScript Libraries & Frameworks
					</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="Express.js" logo={ExpressJSLogo} />
						<TechStack name="Zod" logo={ZodLogo} />
						<TechStack name="Valibot" logo={ValibotLogo} />
						<TechStack name="React" logo={ReactLogo} />
						<TechStack name="Vite" logo={ViteLogo} />
						<TechStack name="Hono" logo={HonoLogo} />
						<TechStack name="TanStack" logo={TanStackLogo} />
						<TechStack name="React Router" logo={ReactRouterLogo} />
						<TechStack name="ElysiaJS" logo={ElysiaJSLogo} />
						<TechStack name="Prisma" logo={PrismaLogo} />
						<TechStack name="Drizzle ORM" logo={DrizzleORMLogo} />
						<TechStack name="Svelte" logo={SvelteLogo} />
						<TechStack name="NestJS" logo={NestJSLogo} />
						<TechStack name="React Query" logo={ReactQueryLogo} />
						<TechStack name="Jest" logo={JestLogo} />
						<TechStack name="Chart.js" logo={ChartJSLogo} />
						<TechStack name="Next.js" logo={NextJSLogo} />
						<TechStack name="tRPC" logo={TRPCLogo} />
						<TechStack name="Refine" logo={RefineLogo} />
						<TechStack name="Socket.IO" logo={SocketIOLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">
						UI Libraries & Frameworks
					</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="Tailwind" logo={TailwindLogo} />
						<TechStack name="Mantine" logo={MantineLogo} />
						<TechStack name="shadcn" logo={ShadcnLogo} />
						<TechStack name="Motion" logo={MotionLogo} />
						<TechStack name="Ark UI" logo={ArkUILogo} />
						<TechStack name="Radix UI" logo={RadixUILogo} />
						<TechStack name="Headless UI" logo={HeadlessUILogo} />
						<TechStack name="Bootstrap" logo={BootstrapLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">Databases</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="PostgreSQL" logo={PostgreSQLLogo} />
						<TechStack name="MariaDB" logo={MariaDBLogo} />
						<TechStack name="SQLite" logo={SQLiteLogo} />
						<TechStack name="MySQL" logo={MySQLLogo} />
						<TechStack name="MongoDB" logo={MongoDBLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">Linters & Formatters</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="Prettier" logo={PrettierLogo} />
						<TechStack name="ESLint" logo={ESLintLogo} />
						<TechStack name="Biomejs" logo={BiomeJSLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">Version Control Systems</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="Git" logo={GitLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">Git Servers</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="GitHub" logo={GitHubLogo} />
						<TechStack name="GitLab" logo={GitLabLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">Text Editors / IDEs</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="Visual Studio Code" logo={VisualStudioCodeLogo} />
						<TechStack name="Neovim" logo={NeovimLogo} />
						<TechStack name="VSCodium" logo={VSCodiumLogo} />
						<TechStack name="Zed" logo={ZedLogo} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="tracking-widest uppercase">Operating Systems</h4>
					<div className="flex flex-row flex-wrap gap-3">
						<TechStack name="Linux" logo={LinuxLogo} />
						<TechStack name="Android" logo={AndroidLogo} />
						<TechStack name="Windows" logo={WindowsLogo} />
					</div>
				</div>
			</div>
		</section>
	);
}
