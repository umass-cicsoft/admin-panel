import { useEffect, useState } from "react";
import { memberListener } from "../../services/members";
import { MemberType } from "../../types/types";

export default function Members() {
  const [memberData, setMemberData] = useState<MemberType[]>([]);
  const displayMemberFields = [
    "first_name",
    "last_name",
    "umass_email",
    "major",
    "graduation_year",
    "status",
  ].map((field) => field as keyof MemberType);

  useEffect(() => {
    memberListener((data: MemberType[]) => {
      setMemberData(data);
    });
  }, []);

  return (
    <div>
      <h1>Members</h1>
      {memberData.map((member) => (
        <div>
          <span>
            {displayMemberFields.map((field) => (
              <span>{member[field]} </span>
            ))}
          </span>
          <br />
        </div>
      ))}
    </div>
  );
}
