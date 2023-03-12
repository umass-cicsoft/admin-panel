import React, { Dispatch, SetStateAction, useEffect } from "react";
import { MemberType } from "../../types/types";

export type SearchBarProps = {
  data: MemberType[];
  setData: Dispatch<SetStateAction<MemberType[]>>;
};

const SearchBar = (props: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    const filteredData = props.data.filter((member: MemberType) =>
      Object.values(member)
        .reduce((acc, val) => acc + " " + val, "")
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    props.setData(filteredData);
  }, [props, searchQuery]);

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
