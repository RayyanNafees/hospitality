export type Patient = {
	id: string;
	name: string;
	weight: number;
	gender: string;
	phone: number;
	phone2: number;
	email: string;
	dob: Date;
	address: string;
	medical_history: Record<string, string>;
	insurance: Record<string, string>;
	allergies: Record<string, string>;
	current_medication: Record<string, string>;
};

export type IconType = (
	props: React.SVGProps<SVGSVGElement>,
) => globalThis.JSX.Element;

export type StatusStyles = {
	success: string;
	processing: string;
	failed: string;
};
export type Transaction = {
	id: string | number;
	name: string;
	href: string;
	amount: string;
	status: keyof StatusStyles;
	currency: string;
	date: string;
	datetime: string;
};

export type TopCard = {
	viewall_href: string;
	title: string;
	value: string;
	icon: IconType;
};
