export type Member = {
  id: string;
  fullName: string;
  age: number;
  bio: string;
  memberSince: string;
  lastPlay: string;
  occupation: string;
  level: string;
  totalMatches: number;
  industry: string;
  currentGoals: string;
  skills: string[];
};

export const PAGE_SIZE = 6;

export function membersHref(page: number, sort: "az" | "za") {
  const params = new URLSearchParams({ sort, page: String(page) });
  return `/members?${params.toString()}`;
}

export const members: Member[] = [
  {
    id: "TCS-1042",
    fullName: "Aisha Rahman",
    age: 34,
    occupation: "Architect",
    level: "Intermediate",
    totalMatches: 46,
    industry: "Architecture",
    currentGoals: "Meet clients who need an architect for community spaces.",
    skills: ["Community spaces", "Spatial design", "Concept development"],
    memberSince: "2023-03-12",
    lastPlay: "2026-09-16",
    bio: "Pertemukan saya dengan klien yang membutuhkan arsitek untuk ruang komunitas.",
  },
  {
    id: "TCS-1088",
    fullName: "Benito Cruz",
    age: 41,
    occupation: "Sports coach",
    level: "Advanced",
    totalMatches: 132,
    industry: "Sports coaching",
    currentGoals: "Find a club looking for an experienced badminton coach.",
    skills: ["Doubles tactics", "Footwork", "Player development"],
    memberSince: "2022-11-04",
    lastPlay: "2026-09-20",
    bio: "Pertemukan saya dengan klub yang mencari pelatih badminton berpengalaman.",
  },
  {
    id: "TCS-1114",
    fullName: "Chloe Tan",
    age: 29,
    occupation: "Product designer",
    level: "Intermediate",
    totalMatches: 38,
    industry: "Technology",
    currentGoals: "Join a team that needs a product designer for a new app.",
    skills: ["Product design", "Prototyping", "User research"],
    memberSince: "2024-01-20",
    lastPlay: "2026-09-09",
    bio: "Pertemukan saya dengan tim yang membutuhkan desainer produk untuk aplikasi baru.",
  },
  {
    id: "TCS-1130",
    fullName: "Daniel Okonkwo",
    age: 38,
    occupation: "Accountant",
    level: "Beginner",
    totalMatches: 17,
    industry: "Finance",
    currentGoals: "Support business owners who need financial guidance.",
    skills: ["Bookkeeping", "Tax planning", "Cash flow"],
    memberSince: "2023-08-02",
    lastPlay: "2026-08-30",
    bio: "Pertemukan saya dengan pemilik usaha yang membutuhkan pendamping keuangan.",
  },
  {
    id: "TCS-1165",
    fullName: "Elena Vasquez",
    age: 32,
    occupation: "Event Organizer",
    level: "Intermediate",
    totalMatches: 64,
    industry: "Events",
    currentGoals: "Connect with brands that need a reliable EO team.",
    skills: ["Event production", "Vendor coordination", "Run of show"],
    memberSince: "2024-06-15",
    lastPlay: "2026-09-18",
    bio: "Pertemukan saya dengan brand yang membutuhkan tim EO handal.",
  },
  {
    id: "TCS-1182",
    fullName: "Farah Ibrahim",
    age: 36,
    occupation: "Physiotherapist",
    level: "Advanced",
    totalMatches: 81,
    industry: "Health",
    currentGoals: "Help players who need a physiotherapist for injury recovery.",
    skills: ["Sports rehab", "Injury screening", "Return to play"],
    memberSince: "2022-05-28",
    lastPlay: "2026-09-12",
    bio: "Pertemukan saya dengan pemain yang membutuhkan fisioterapis untuk pemulihan cedera.",
  },
  {
    id: "TCS-1207",
    fullName: "Gabriel Santos",
    age: 27,
    occupation: "Software engineer",
    level: "Intermediate",
    totalMatches: 27,
    industry: "Technology",
    currentGoals: "Meet a founder who needs a software engineer for their product.",
    skills: ["Web development", "APIs", "Product delivery"],
    memberSince: "2025-02-09",
    lastPlay: "2026-09-21",
    bio: "Pertemukan saya dengan founder yang membutuhkan software engineer untuk produknya.",
  },
  {
    id: "TCS-1221",
    fullName: "Hana Suzuki",
    age: 33,
    occupation: "Brand strategist",
    level: "Intermediate",
    totalMatches: 53,
    industry: "Marketing",
    currentGoals: "Work with a business that wants to build its brand strategy.",
    skills: ["Brand positioning", "Messaging", "Campaign planning"],
    memberSince: "2023-12-01",
    lastPlay: "2026-09-05",
    bio: "Pertemukan saya dengan bisnis yang ingin membangun strategi merek.",
  },
  {
    id: "TCS-1244",
    fullName: "Ivan Petrov",
    age: 45,
    occupation: "Restaurant owner",
    level: "Beginner",
    totalMatches: 21,
    industry: "Hospitality",
    currentGoals: "Host a community looking for a place to gather after play.",
    skills: ["Hospitality", "Menu planning", "Community hosting"],
    memberSince: "2021-09-18",
    lastPlay: "2026-08-22",
    bio: "Pertemukan saya dengan komunitas yang mencari tempat kumpul setelah main.",
  },
  {
    id: "TCS-1270",
    fullName: "Julia Nguyen",
    age: 31,
    occupation: "Teacher",
    level: "Intermediate",
    totalMatches: 34,
    industry: "Education",
    currentGoals: "Meet parents looking for a teacher for beginner classes.",
    skills: ["Beginner coaching", "Lesson planning", "Youth programs"],
    memberSince: "2024-09-07",
    lastPlay: "2026-09-14",
    bio: "Pertemukan saya dengan orang tua yang mencari pengajar untuk kelas pemula.",
  },
  {
    id: "TCS-1296",
    fullName: "Kenji Watanabe",
    age: 28,
    occupation: "Photographer",
    level: "Advanced",
    totalMatches: 58,
    industry: "Media",
    currentGoals: "Shoot events and portraits for brands that need a photographer.",
    skills: ["Event photography", "Portraits", "Photo editing"],
    memberSince: "2025-04-22",
    lastPlay: "2026-09-19",
    bio: "Pertemukan saya dengan brand yang membutuhkan fotografer untuk acara dan potret.",
  },
  {
    id: "TCS-1312",
    fullName: "Lila Mensah",
    age: 39,
    occupation: "Founder",
    level: "Intermediate",
    totalMatches: 96,
    industry: "Sports business",
    currentGoals: "Find a partner to build a sports venture together.",
    skills: ["Partnerships", "Operations", "Community building"],
    memberSince: "2022-01-16",
    lastPlay: "2026-09-11",
    bio: "Pertemukan saya dengan mitra yang ingin membangun usaha olahraga bersama.",
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

export function formatMemberSince(isoDate: string) {
  const [year, month] = isoDate.split("-");
  return `${months[Number(month) - 1]} ${year}`;
}

function timeAgo(amount: number, unit: string) {
  return `${amount} ${unit}${amount === 1 ? "" : "s"} ago`;
}

export function formatLastPlay(isoDate: string, now = new Date()) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const played = new Date(year, month - 1, day);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.round((today.getTime() - played.getTime()) / 86_400_000);

  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return timeAgo(days, "day");

  const weeks = Math.floor(days / 7);
  if (days < 30) return timeAgo(weeks, "week");

  const monthsAgo = Math.floor(days / 30);
  if (days < 365) return timeAgo(monthsAgo, "month");

  return timeAgo(Math.floor(days / 365), "year");
}

export function getMemberPage(sort: "az" | "za", page: number) {
  const sorted = [...members].sort((a, b) => {
    const order = a.fullName.localeCompare(b.fullName);
    return sort === "za" ? -order : order;
  });
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;

  return {
    members: sorted.slice(start, start + PAGE_SIZE),
    page: currentPage,
    totalPages,
    total: sorted.length,
  };
}
