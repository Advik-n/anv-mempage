export type MemberGroup = "Core Team" | "Technical" | "Design" | "Operations";

export type Member = {
  id: number;
  name: string;
  role: string;
  group: MemberGroup;
  avatar?: string | null;
  github?: string;
  linkedin?: string;
};

export type Pod = {
  id: string;
  name: MemberGroup;
  lead: string;
  members: Member[];
};

export const members: Member[] = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Founder & Director",
    group: "Core Team",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Sana Kapoor",
    role: "Program Lead",
    group: "Core Team",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Ishan Verma",
    role: "Operations Lead",
    group: "Core Team",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Rhea Nair",
    role: "Design Director",
    group: "Core Team",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Kabir Rao",
    role: "Research Lead",
    group: "Core Team",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Maya Iyer",
    role: "Community Lead",
    group: "Core Team",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 7,
    name: "Dev Shah",
    role: "Technical Director",
    group: "Core Team",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 8,
    name: "Anika Bose",
    role: "Partnerships Lead",
    group: "Core Team",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 9,
    name: "Raghav Sen",
    role: "Frontend Engineer",
    group: "Technical",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 10,
    name: "Tara Kulkarni",
    role: "Backend Engineer",
    group: "Technical",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 11,
    name: "Neel Joshi",
    role: "Mobile Engineer",
    group: "Technical",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 12,
    name: "Zoya Khan",
    role: "DevOps Engineer",
    group: "Technical",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 13,
    name: "Vihaan Singh",
    role: "QA Engineer",
    group: "Technical",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 14,
    name: "Ira Malhotra",
    role: "Data Engineer",
    group: "Technical",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 15,
    name: "Leah Mathew",
    role: "Product Designer",
    group: "Design",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 16,
    name: "Naveen Roy",
    role: "UX Researcher",
    group: "Design",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 17,
    name: "Anvi Kulkarni",
    role: "Brand Designer",
    group: "Design",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 18,
    name: "Rehan Qureshi",
    role: "Motion Designer",
    group: "Design",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 19,
    name: "Aaliya Desai",
    role: "Content Designer",
    group: "Design",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 20,
    name: "Arjun Menon",
    role: "Illustrator",
    group: "Design",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 21,
    name: "Nisha Rao",
    role: "Program Manager",
    group: "Operations",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 22,
    name: "Ritvik Das",
    role: "Finance Lead",
    group: "Operations",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 23,
    name: "Kavya Ghosh",
    role: "Partnerships Manager",
    group: "Operations",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 24,
    name: "Samir Patel",
    role: "People Operations",
    group: "Operations",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 25,
    name: "Diya Iqbal",
    role: "Logistics Lead",
    group: "Operations",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
  {
    id: 26,
    name: "Omkar Kulkarni",
    role: "Community Ops",
    group: "Operations",
    avatar: null,
    github: "#",
    linkedin: "#",
  },
];

export const coreTeamMembers = members.filter(
  (member) => member.group === "Core Team"
);

export const pods: Pod[] = [
  {
    id: "technical",
    name: "Technical",
    lead: "Dev Shah",
    members: members.filter((member) => member.group === "Technical"),
  },
  {
    id: "design",
    name: "Design",
    lead: "Rhea Nair",
    members: members.filter((member) => member.group === "Design"),
  },
  {
    id: "operations",
    name: "Operations",
    lead: "Ishan Verma",
    members: members.filter((member) => member.group === "Operations"),
  },
];
