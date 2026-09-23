export type ActivityImage = {
  src: string;
  alt: string;
};

export type Activity = {
  slug: string;
  label: string;
  date: string;
  images: ActivityImage[];
};

export const activities: Activity[] = [
  {
    slug: "open-play",
    label: "Open play",
    date: "2026-09-16",
    images: [
      {
        src: "/images/open-play.jpg",
        alt: "A player serving a shuttlecock while others wait in a sports hall",
      },
      {
        src: "/images/smash.jpg",
        alt: "A player jumping to hit a smash on an indoor court",
      },
      {
        src: "/images/shuttle.jpg",
        alt: "A shuttlecock held beside a badminton racket",
      },
      {
        src: "/images/activities/net.jpg",
        alt: "A shuttlecock resting on the strings of a badminton racket",
      },
    ],
  },
  {
    slug: "doubles-night",
    label: "Doubles night",
    date: "2026-09-09",
    images: [
      {
        src: "/images/doubles.jpg",
        alt: "Two doubles players moving toward a shuttlecock at the net",
      },
      {
        src: "/images/coaching.jpg",
        alt: "A mixed doubles pair setting up for a clear",
      },
      {
        src: "/images/smash.jpg",
        alt: "A player jumping to hit a smash on an indoor court",
      },
    ],
  },
  {
    slug: "coaching-clinic",
    label: "Coaching clinic",
    date: "2026-09-02",
    images: [
      {
        src: "/images/coaching.jpg",
        alt: "A mixed doubles pair setting up for a clear",
      },
      {
        src: "/images/open-play.jpg",
        alt: "A player serving a shuttlecock while others wait in a sports hall",
      },
      {
        src: "/images/shuttle.jpg",
        alt: "A shuttlecock held beside a badminton racket",
      },
    ],
  },
  {
    slug: "first-serve",
    label: "First serve",
    date: "2026-08-26",
    images: [
      {
        src: "/images/shuttle.jpg",
        alt: "A shuttlecock held beside a badminton racket",
      },
      {
        src: "/images/activities/net.jpg",
        alt: "A shuttlecock resting on the strings of a badminton racket",
      },
      {
        src: "/images/open-play.jpg",
        alt: "A player serving a shuttlecock while others wait in a sports hall",
      },
    ],
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatActivityDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-");
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

export function getActivity(slug: string) {
  return activities.find((activity) => activity.slug === slug);
}

export function photoCountLabel(count: number) {
  return `${count} ${count === 1 ? "photo" : "photos"}`;
}
