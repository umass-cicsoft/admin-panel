export enum MemberRole {
  ADMIN = "admin",
  DEVELOPER = "developer",
  OUTREACH = "outreach",
  TEACHING = "teaching",
}

export enum MemberStatus {
  MEMBER = "member",
  WAITLISTED = "waitlisted",
  UNDECIDED = "undecided",
  DENIED = "denied",
}

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
  role?: MemberRole;
  status?: MemberStatus;
  umass_email: string;
};
