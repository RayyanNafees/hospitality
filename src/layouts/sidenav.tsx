import { cx as classNames } from "classix";
import { Fragment, useCallback, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
	BellIcon,
	ClockIcon,
	CogIcon,
	CreditCardIcon,
	HomeIcon,
	MenuAlt1Icon,
	QuestionMarkCircleIcon,
	ShieldCheckIcon,
	UserGroupIcon,
	XIcon,
	BeakerIcon,
	OfficeBuildingIcon,
	AcademicCapIcon,
	ChartPieIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";

const navigation = [
	{ name: "Home", href: "/dashboard/", icon: HomeIcon, current: false },
	{ name: "Appointments", href: "/dashboard/appointments", icon: ClockIcon, current: false },
	{ name: "Patients", href: "/dashboard/patients", icon: UserGroupIcon, current: false },
	{ name: "ICU", href: "/dashboard/icu", icon: UserGroupIcon, current: false },
	{ name: "Finances", href: "/dashboard/finances", icon: CreditCardIcon, current: false },
	{ name: "Laboratory", href: "/dashboard/laboratory", icon: BeakerIcon, current: false },
	{ name: "Facility", href: "/dashboard/facility", icon: OfficeBuildingIcon, current: false },
	{ name: "Staff", href: "/dashboard/staff", icon: AcademicCapIcon, current: false },
	{ name: "Reports", href: "/dashboard/reports", icon: ChartPieIcon, current: false },
	{ name: "Supplies", href: "/dashboard/supplies", icon: ShoppingCartIcon, current: false },
];
const secondaryNavigation = [
	{ name: "Settings", href: "/dashboard/settings", icon: CogIcon },
	{ name: "Other Hospitals", href: "/dashboard/hospitals", icon: QuestionMarkCircleIcon },
	{ name: "Admin Panel", href: "/dashboard/admin", icon: ShieldCheckIcon },
];
import { Link, Outlet, useLocation } from "react-router-dom";

export default function SideNav() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const location = useLocation();

	const isCurrent = useCallback(
		(nav: Partial<(typeof navigation)[0]>) => nav.href === location.pathname,
		[location],
	);

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<div className="min-h-full">
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						className="flex fixed inset-0 z-40 lg:hidden"
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<div className="flex relative flex-col flex-1 pt-5 pb-4 w-full max-w-xs bg-cyan-700">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 pt-2 -mr-12">
										<button
											type="button"
											className="flex justify-center items-center ml-1 w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() => setSidebarOpen(false)}
										>
											<span className="sr-only">Close sidebar</span>
											<XIcon
												className="w-6 h-6 text-white"
												aria-hidden="true"
											/>
										</button>
									</div>
								</Transition.Child>
								<div className="flex flex-shrink-0 items-center px-4">
									<img
										className="w-auto h-8"
										src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
										alt="Easywire logo"
									/>
								</div>
								<nav
									className="overflow-y-auto flex-shrink-0 mt-5 h-full divide-y divide-cyan-800"
									aria-label="Sidebar"
								>
									<div className="px-2 space-y-1">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className={classNames(
													item.current || isCurrent(item)
														? "bg-cyan-800 text-white"
														: "text-cyan-100 hover:text-white hover:bg-cyan-600",
													"group flex items-center px-2 py-2 text-base font-medium rounded-md",
												)}
												aria-current={item.current ? "page" : undefined}
											>
												<item.icon
													className="flex-shrink-0 mr-4 w-6 h-6 text-cyan-200"
													aria-hidden="true"
												/>
												{item.name}
											</Link>
										))}
									</div>
									<div className="pt-6 mt-6">
										<div className="px-2 space-y-1">
											{secondaryNavigation.map((item) => (
												<Link
													key={item.name}
													to={item.href}
													className="flex items-center px-2 py-2 text-base font-medium text-cyan-100 rounded-md group hover:text-white hover:bg-cyan-600"
												>
													<item.icon
														className="mr-4 w-6 h-6 text-cyan-200"
														aria-hidden="true"
													/>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								</nav>
							</div>
						</Transition.Child>
						<div className="flex-shrink-0 w-14" aria-hidden="true">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex overflow-y-auto flex-col flex-grow pt-5 pb-4 bg-cyan-700">
						<div className="flex flex-shrink-0 items-center px-4">
							<img
								className="w-auto h-8"
								src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
								alt="Easywire logo"
							/>
						</div>
						<nav
							className="flex overflow-y-auto flex-col flex-1 mt-5 divide-y divide-cyan-800"
							aria-label="Sidebar"
						>
							<div className="px-2 space-y-1">
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										className={classNames(
											item.current || isCurrent(item)
												? "bg-cyan-800 text-white"
												: "text-cyan-100 hover:text-white hover:bg-cyan-600",
											"group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md",
										)}
										aria-current={item.current ? "page" : undefined}
									>
										<item.icon
											className="flex-shrink-0 mr-4 w-6 h-6 text-cyan-200"
											aria-hidden="true"
										/>
										{item.name}
									</Link>
								))}
							</div>
							<div className="pt-6 mt-6">
								<div className="px-2 space-y-1">
									{secondaryNavigation.map((item) => (
										<Link
											key={item.name}
											to={item.href}
											className={classNames(
											isCurrent(item)
													? "text-white bg-cyan-800"
													: "text-cyan-100 hover:text-white hover:bg-cyan-600",
												"flex items-center px-2 py-2 text-base font-medium rounded-md group",
											)}

											// "flex items-center px-2 py-2 text-sm font-medium leading-6 text-cyan-100 rounded-md group hover:text-white hover:bg-cyan-600"
										>
											<item.icon
												className="mr-4 w-6 h-6 text-cyan-200"
												aria-hidden="true"
											/>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</nav>
					</div>
				</div>

				<div className="flex flex-col flex-1 lg:pl-64">
					<div className="flex relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:border-none">
						<button
							type="button"
							className="px-4 text-gray-400 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
							onClick={() => setSidebarOpen(true)}
						>
							<span className="sr-only">Open sidebar</span>
							<MenuAlt1Icon className="w-6 h-6" aria-hidden="true" />
						</button>
						{/* Search bar */}
						<div className="flex flex-1 justify-between px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
							<div className="flex flex-1">
								<form className="flex w-full md:ml-0" action="#" method="GET">
									<label htmlFor="search-field" className="sr-only">
										Search
									</label>
									<div className="relative w-full text-gray-400 focus-within:text-gray-600">
										<div
											className="flex absolute inset-y-0 left-0 items-center pointer-events-none"
											aria-hidden="true"
										>
											<SearchIcon className="w-5 h-5" aria-hidden="true" />
										</div>
										<input
											id="search-field"
											name="search-field"
											className="block py-2 pr-3 pl-8 w-full h-full placeholder-gray-500 text-gray-900 border-transparent focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
											placeholder="Search transactions"
											type="search"
										/>
									</div>
								</form>
							</div>
							<div className="flex items-center ml-4 md:ml-6">
								<button
									type="button"
									className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="w-6 h-6" aria-hidden="true" />
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
											<img
												className="w-8 h-8 rounded-full"
												src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
											<span className="hidden ml-3 text-sm font-medium text-gray-700 lg:block">
												<span className="sr-only">Open user menu for </span>
												Emilia Birch
											</span>
											<ChevronDownIcon
												className="hidden flex-shrink-0 ml-1 w-5 h-5 text-gray-400 lg:block"
												aria-hidden="true"
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 py-1 mt-2 w-48 bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="/"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700",
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="/"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700",
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="/"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700",
														)}
													>
														Logout
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
					<Outlet />
				</div>
			</div>
		</>
	);
}
