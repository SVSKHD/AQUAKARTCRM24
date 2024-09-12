import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image"; // For Next.js optimized image handling
import AQWhite from "@/assests/logo-white.png"; // Adjusted import path for Next.js

const navigation = [
  { name: "Categories", href: "/category", icon: HomeIcon, current: true },
  { name: "Sub-Categories", href: "/sub-category", icon: UsersIcon, current: false },
  { name: "Products", href: "/products", icon: UsersIcon, current: false },
];

const OfflineNavigation = [
  { name: "Invoices", href: "/invoices", icon: HomeIcon, current: true },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AquaCrmLayout = (props) => {
  const { title } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [onlineMenuOpen, setOnlineMenuOpen] = useState(false); // Track online menu state
  const [offlineMenuOpen, setOfflineMenuOpen] = useState(false); // Track offline menu state

  return (
    <>
      {/* Mobile Sidebar */}
      <Transition show={sidebarOpen} as={React.Fragment}>
        <Dialog
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          className="relative z-50 lg:hidden"
        >
          <Transition.Child
            as={React.Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={React.Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1 flex-col bg-gray-900 px-6 pb-2">
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="flex h-16 items-center">
                  <Image
                    src={AQWhite}
                    alt="Your Company"
                    className="h-8 w-auto"
                  />
                </div>
              
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 items-center">
            <Image src={AQWhite} alt="Your Company" className="h-8 w-auto" />
          </div>
          <nav className="flex flex-1 flex-col">
            <h4 className="text-white font-bold">Online Menu</h4>
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <h4 className="text-white font-bold">Offline Menu</h4>
              <li>
                <ul className="-mx-2 space-y-1">
                  {OfflineNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              
             

            
            </ul>
          </nav>
          
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <a href="#">
            <img
              className="h-8 w-8 rounded-full bg-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main>
          <div className="p-10 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {title}
              </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-red-300 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-400"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="pr-10 pl-10 px-4 sm:px-6 lg:px-8">
            <div className="pr-2 pl-2">{props.children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AquaCrmLayout;