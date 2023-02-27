import { useEffect, useState } from "react";
import {
  memberListener,
  updateMemberRole,
  updateMemberStatus,
} from "../../services/members";
import { MemberRole, MemberStatus, MemberType } from "../../types/types";

export default function Members() {
  const [memberData, setMemberData] = useState<MemberType[]>([]);
  const displayMemberFields = [
    "first_name",
    "last_name",
    "umass_email",
    "major",
    "graduation_year",
    "status",
    "role",
  ].map((field) => field as keyof MemberType);

  useEffect(() => {
    memberListener((data: MemberType[]) => {
      setMemberData(data);
    });
  }, []);

  const updateStatus = (ids: string[], status: MemberStatus) => {
    updateMemberStatus({ ids: ids, newStatus: status });
  };

  const updateRole = (ids: string[], role: MemberRole) => {
    updateMemberRole({ ids: ids, newRole: role });
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
            onClick={() => updateStatus([member.id], MemberStatus.WAITLISTED)}
          >
            Waitlist
          </button>

          <button
            className="bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600"
            onClick={() => updateRole([member.id], MemberRole.ADMIN)}
          >
            Admin
          </button>
          <br />
        </div>
      ))}
    </div>
  );
}
