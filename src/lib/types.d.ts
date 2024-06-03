export type Project = {
	title: string;
	description: string;
	url?: string;
	links: {
		label: string;
		url: string;
	}[];
	github?: {
		owner: string;
		repo: string;
	};
	thumbnail?: string;
	technologies: string[];
	duration: {
		start: Date;
		end: Date;
	};
	featured?: boolean;
};

export type OpenSourceContribution = {
	github: {
		website: string;
		name: string;
		owner: string;
		repo: string;
		description: string;
	};
	contributions: {
		id: number;
		title: string;
		date: Date;
	}[];
};

export type Experience = {
	title: string;
	roles: string[];
	company?: { name: string; url: string } | null;
	description: string;
	url: string;
	links: {
		label: string;
		url: string;
	}[];
	technologies: string[];
	duration: {
		start: Date;
		end?: Date | null;
	};
	featured?: boolean | null;
};

export type Hobby = {
	title: string;
	description: string;
	links: {
		label: string;
		url: string;
	}[];
};
