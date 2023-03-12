import { useEffect, useState } from "react";
import {
  filterMembers,
  memberListener,
  sortMembers,
  updateMemberRole,
  updateMemberStatus,
} from "../../services/members";
import {
  MemberPageTab,
  MemberRole,
  AllTab,
  MemberStatus,
  MemberType,
} from "../../types/types";
import { SearchBar } from "../../components";

export default function Members() {
  const [memberData, setMemberData] = useState<MemberType[]>([]);
  const [displayMemberData, setDisplayMemberData] = useState<MemberType[]>([]);
  const [activeTab, setActiveTab] = useState<MemberPageTab>(AllTab.ALL);
  const [selectedMemberIds, setSelectedMemberIds] = useState<Set<string>>(
    new Set<string>()
  );
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
    // Get all members from database and set them to memberData
    memberListener((data: MemberType[]) => {
      setMemberData(data);
      setDisplayMemberData(data);
    });
  }, []);

  useEffect(() => {
    // Filter members based on activeTab and set them to displayMemberData
    setDisplayMemberData(
      memberData.filter(
        (member) => member.status === activeTab || activeTab === AllTab.ALL
      )
    );
  }, [activeTab, memberData]);

  return (
    <div className="flex justify-center flex-col p-2">
      <div className="flex justify-end">
        {/* Showcasing all the tabs for the MemberPage */}
        {[
          AllTab.ALL,
          MemberStatus.MEMBER,
          MemberStatus.WAITLISTED,
          MemberStatus.DENIED,
          MemberStatus.UNDECIDED,
        ].map((status: MemberPageTab) => (
          <button
            className="bg-blue-500 text-white p-3 hover:bg-blue-600"
            onClick={() => setActiveTab(status)}
          >
            {status.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="flex ">
        {/* Toolbar for tools such as filtering and sorting members, search bar, etc. */}
        <SearchBar data={memberData} setData={setDisplayMemberData} />
      </div>
      {/* Table showing members' data */}
      <table className="table-auto border border-slate-600">
        <thead>
          <tr>
            <th className="border border-slate-600 p-2">
              <input
                type="checkbox"
                onChange={() => {
                  // If all members are selected, unselect all members
                  // Otherwise, select all members
                  if (selectedMemberIds.size === displayMemberData.length) {
                    setSelectedMemberIds(new Set());
                  } else {
                    setSelectedMemberIds(
                      new Set(displayMemberData.map((member) => member.id))
                    );
                  }
                }}
                checked={
                  // If all members are selected, check the checkbox
                  // Otherwise, uncheck the checkbox
                  selectedMemberIds.size === displayMemberData.length
                    ? true
                    : false
                }
              />
            </th>
            {displayMemberFields.map((field, idx: number) => (
              <th key={idx} className="border border-slate-600">
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayMemberData.map((member) => (
            <tr key={member.id}>
              <td className="border border-slate-600 p-2">
                <input
                  type="checkbox"
                  onChange={() => {
                    // If member is selected, unselect member
                    // Otherwise, select member
                    if (selectedMemberIds.has(member.id)) {
                      selectedMemberIds.delete(member.id);
                      setSelectedMemberIds(new Set(selectedMemberIds));
                    } else {
                      selectedMemberIds.add(member.id);
                      setSelectedMemberIds(new Set(selectedMemberIds));
                    }
                  }}
                  checked={selectedMemberIds.has(member.id) ? true : false}
                />
              </td>
              {displayMemberFields.map((field, idx: number) => (
                <td key={idx} className="border border-slate-600 p-2">
                  {member[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* {memberData.map((member) => (
        <div key={member.id}>
          {displayMemberFields.map((field, idx: number) => (
            <span key={idx}>{member[field]} </span>
          ))}
          <button
            className="bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600"
            onClick={() =>
              updateMemberStatus([member.id], MemberStatus.WAITLISTED)
            }
          >
            Waitlist
          </button>

          <button
            className="bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600"
            onClick={() => updateMemberRole([member.id], MemberRole.ADMIN)}
          >
            Admin
          </button>
          <br />
        </div>
      ))} */}
    </div>
  );
}
