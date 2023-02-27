import { useEffect, useState } from "react";
import { memberListener, updateMemberStatus } from "../../services/members";
import { MemberStatus, MemberType } from "../../types/types";

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

  const updateStatus = (id: string, status: MemberStatus) => {
    updateMemberStatus({ id: id, newStatus: status });
  };

  return (
    <div>
      <h1>Members</h1>
      {memberData.map((member) => (
        <div key={member.id}>
          {displayMemberFields.map((field, idx: number) => (
            <span key={idx}>{member[field]} </span>
          ))}
          <button
            className="bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600"
            onClick={() => updateStatus(member.id, MemberStatus.WAITLISTED)}
          >
            Waitlist
          </button>
          <br />
        </div>
      ))}
    </div>
  );
}
