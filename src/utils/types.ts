export interface singleRouteType {
	path: string;
	pathName: string;
	Component: React.FC<{}>;
}

export interface singleProjectType {
	coverImage: string | undefined;
	projectType: 'single' | 'group';
	title: string;
	description: string;
	link?: string | URL | undefined;
}

export interface socialsType {
	name: string;
	link: string | undefined;
}
export interface contactFormType {
	full_name: string;
	email_address: string;
	subject: string;
	message: string;
}
