import MeetupList from "../MeetupList";
import { getAllEvents } from "../../data";
import MeetupFilter from "./MeetupFilter";

export default function MeetupsPage() {
  const meetups: Meetup[] = getAllEvents();

  return (
    <div>
      <MeetupFilter />
      <MeetupList meetups={meetups} />
    </div>
  );
}
