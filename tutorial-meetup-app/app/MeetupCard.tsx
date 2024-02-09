import {
  UserGroupIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  meetup: Meetup;
};

export default function MeetupCard({ meetup }: Props) {
  return (
    <div className="md:w-[600px] flex flex-row rounded-xl bg-slate-100 shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out">
      <div className="md:w-60 md:h-56 object-cover rounded-l-xl shadow-sm overflow-hidden">
        {meetup.image === null ? (
          <UserGroupIcon className="h-8 w-8 cursor-pointer text-white bg-purple-700" />
        ) : (
          <img
            src={meetup.image}
            alt={meetup.title}
            className="md:w-60 md:h-56 object-cover"
          />
        )}
      </div>

      <div className="ml-4 mt-4 flex flex-col justify-between">
        <h2 className="uppercase underline decoration-purple-700 font-bold text-lg">
          {meetup.title}
        </h2>

        <div className="flex flex-row">
          <CalendarIcon className="h-8 w-8 text-gray-700 mr-1" />
          <p className="font-bold mt-1">{meetup.date}</p>
        </div>

        <div className="flex flex-row">
          <MapPinIcon className="h-8 w-8 text-gray-700 mr-1 mt-2" />
          <div>
            <p>{meetup.street}</p>
            <p>{meetup.city}</p>
          </div>
        </div>

        <div className="mb-4">
          <Link
            href={`/meetups/${meetup.id}`}
            type="button"
            className="text-white h-8 bg-purple-700 hover:bg-purple-500 font-bold rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Explore Event
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
