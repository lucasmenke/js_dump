"use client";
import TimeAgo from "react-timeago";

type Props = {
  time: string;
};

export default function LiveTimestamp({ time }: Props) {
  return <TimeAgo date={time} />;
}
