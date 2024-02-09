import { getEventsByYearAndMonth } from "../../../data";
import MeetupList from "../../MeetupList";

type Props = {
  params: {
    slug: number[];
  };
};

export default function page({ params }: Props) {
  const meetups = getEventsByYearAndMonth(params.slug[0], params.slug[1]);

  return (
    <div>
      <div className="flex flex-row justify-center">
        <h2 className="mx-4 font-bold">Year: {params.slug[0]}</h2>
        <h2 className="mx-4 font-bold">Month: {params.slug[1]}</h2>
      </div>
      <MeetupList meetups={meetups} />
    </div>
  );
}
