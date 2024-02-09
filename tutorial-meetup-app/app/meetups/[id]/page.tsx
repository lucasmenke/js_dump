"use client";

import { notFound, useRouter } from "next/navigation";
import { getEventById } from "../../../data";

type Props = {
  params: {
    id: number;
  };
};

export default function MeetupPage({ params }: Props) {
  const router = useRouter();
  const meetup = getEventById(params.id);

  if ((meetup && Object.entries(meetup).length === 0) || !meetup) {
    return notFound();
  }

  return (
    <div className="flex flex-col marker:pb-24 px-0 lg:px-10 items-center mt-20">
      {meetup.image && (
        <img
          src={meetup.image}
          alt={meetup.title}
          className="max-w-md max-h-60 mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
        />
      )}
      <div className="px-10 mt-10">
        <h1 className="headerTitle px-0 pb-2 mb-4 text-center">
          {meetup.title}
        </h1>
        <div className="flex divide-x-2 space-x-4">
          <h2 className="font-bold">{meetup.time}</h2>
          <h2 className="font-bold pl-4">{meetup.date}</h2>
          <p className="pl-4">
            {meetup.street}, {meetup.city}
          </p>
        </div>
        <p className="pt-4 w-60 md:w-96 mb-10">{meetup.description}</p>
        <button
          className="h-10 w-60 md:w-96 rounded-full border-purple-700 border-2 mb-10 font-bold text-purple-700 hover:cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-200 ease-out"
          onClick={router.back}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
