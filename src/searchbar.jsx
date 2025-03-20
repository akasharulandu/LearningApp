import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <div style={{ display: "flex", alignItems: "center", width: "300px" }}>
      <Input
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
        prefix={<SearchOutlined style={{ color: "#999" }} />}
        suffix={
          searchText && (
            <CloseCircleOutlined
              onClick={clearSearch}
              style={{ color: "#999", cursor: "pointer" }}
            />
          )
        }
        style={{
          borderRadius: "20px",
          padding: "8px 12px",
          fontSize: "14px",
        
        }}
      />
    </div>
  );
};

export default SearchBar;
