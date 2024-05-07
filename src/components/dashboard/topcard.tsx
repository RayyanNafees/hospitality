import { Link } from "react-router-dom";
import type { TopCard } from "@/lib/dashboard";

type TopCardProps = { card: TopCard };

export default function Topcard({ card }: TopCardProps) {
	return (
		<div className="overflow-hidden bg-white rounded-lg shadow">
			<div className="p-5">
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<card.icon className="w-6 h-6 text-gray-400" aria-hidden="true" />
					</div>
					<div className="flex-1 ml-5 w-0">
						<dl>
							<dt className="text-sm font-medium text-gray-500 truncate">
								{card.title}
							</dt>
							<dd>
								<div className="text-lg font-medium text-gray-900">
									{card.value}
								</div>
							</dd>
						</dl>
					</div>
				</div>
			</div>
			<div className="px-5 py-3 bg-gray-50">
				<div className="text-sm">
					<Link
						to={card.viewall_href}
						className="font-medium text-cyan-700 hover:text-cyan-900"
					>
						View all
					</Link>
				</div>
			</div>
		</div>
	);
}
