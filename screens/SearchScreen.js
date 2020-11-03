import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/Button";

export const SearchScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <SearchBar
        setValue={(value) => setValue(value)}
        setReset={() => setValue("")}
        value={value}
      />
      <Button
        title="Details"
        onPress={() => navigation.navigate("Details", { value: value })}
      />
    </>
  );
};
