import MeetupList from "./MeetupList";
import { getAllFeaturedEvents } from "../data";

export default function HomePage() {
  const meetups: Meetup[] = getAllFeaturedEvents();

  return (
    <div className="md:w-[600px] m-auto">
      <h2 className="font-semibold">Featured Meetups</h2>
      <MeetupList meetups={meetups} />
    </div>
  );
}
