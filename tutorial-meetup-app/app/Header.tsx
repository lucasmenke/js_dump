import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 items-center p-10">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/">
          <h1 className="text-4xl text-center font-serif">
            <span className="underline decoration-purple-700 decoration-4">
              MEETUP
            </span>{" "}
            Club
          </h1>
        </Link>
        <Link href="/meetups" className="flex justify-end">
          <button
            className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full font-semibold
          border-2 border-slate-900 hover:bg-white hover:text-slate-900 hover:border-2 hover:border-slate-900"
          >
            All Meetups
          </button>
        </Link>
      </div>
    </header>
  );
}
