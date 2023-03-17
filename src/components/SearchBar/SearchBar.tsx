import React, { Dispatch, SetStateAction, useEffect } from "react";
import { MemberType } from "../../types/types";

export type SearchBarProps = {
  data: MemberType[];
  setData: Dispatch<SetStateAction<MemberType[]>>;
};

const SearchBar = (props: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const searchFields: (keyof MemberType)[] = [
    "first_name",
    "github_link",
    "graduation_year",
    "id",
    "last_name",
    "linkedin_link",
    "major",
    "role",
    "status",
    "umass_email",
  ];

  useEffect(() => {
    const filteredData = props.data.filter((member: MemberType) =>
      searchFields
        .reduce((acc, val) => {
          return member[val] !== undefined ? acc + " " + member[val] : acc;
        }, "")
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    props.setData(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      className="bg-gray-200 p-3 rounded-md"
      placeholder="Search..."
    />
  );
};

export default SearchBar;
