export type MemberType = {
  first_name: string;
  github_link?: string;
  graduation_year: number;
  id: string;
  interest_response?: string;
  joined_on: string;
  last_name: string;
  linkedin_link?: string;
  major: string;
  role?: "admin" | "developer" | "outreach" | "teaching";
  status: "member" | "waitlisted" | "undecided" | "denied";
  umass_email: string;
};
