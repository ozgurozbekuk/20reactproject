import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (event) => {
    setShowDropdown(false)
     setSearchParam(event.target.innerText)
    setFilteredUsers([])
  }

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, filteredUsers);
  return (
    <div>
      {loading ? (
        <h1>Loading List.Please Wait!</h1>
      ) : (
        <input
          value={searchParam}
          onChange={handleChange}
          type="text"
          name="search-users"
          placeholder="Search users..."
        />
      )}

      {showDropdown && <Suggestion data={filteredUsers} handleClick={handleClick} />}
    </div>
  );
};

export default SearchAutocomplete;
