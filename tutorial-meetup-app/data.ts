const DUMMY_DATA: Meetup[] = [
  {
    id: 1,
    title: "Developing together",
    description:
      "We will create some cool Next.js websites together. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    city: "Düsseldorf",
    street: "Am Bergtor 13",
    date: "11.01.2023",
    month: 1,
    year: 2023,
    time: "19:00",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Next.js conference",
    description:
      "We talk about Next.js 13. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    city: "München",
    street: "Jasminstr. 125",
    date: "15.01.2023",
    time: "15:00",
    month: 1,
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "IT student Meetup",
    description:
      "We talk about the it sector as a student. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    city: "Hamburg",
    street: "Am Kiez 44",
    date: "20.01.2023",
    month: 1,
    year: 2023,
    time: "11:00",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    featured: true,
  },
  {
    id: 4,
    title: "Future of Web development",
    description:
      "We come together and talk about the future of web development. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    city: "Berlin",
    street: "Mehringdamm 7",
    date: "27.02.2023",
    month: 2,
    year: 2023,
    time: "20:00",
    image:
      "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "AI Conference",
    description:
      "We talk about the new era of AI. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    city: "Mannheim",
    street: "Am Dom 199",
    date: "11.03.2023",
    month: 3,
    year: 2023,
    time: "09:00",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    featured: true,
  },
];

export function getAllEvents() {
  return DUMMY_DATA;
}

export function getAllFeaturedEvents() {
  return DUMMY_DATA.filter((meetup) => meetup.featured);
}

export function getEventById(id: number) {
  return DUMMY_DATA.find((meetup) => meetup.id == id);
}

export function getEventsByYearAndMonth(year: number, month: number) {
  return DUMMY_DATA.filter((meetup) => meetup.year == year && meetup.month == month)
}
