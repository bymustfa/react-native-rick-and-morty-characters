import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Input, Layout } from "@ui-kitten/components";
import { Search, Times } from "../icons";

const HomeFilter = ({ onSearch, onClear, setLoad }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.trim().length > 0) {
      setLoad(true);
      const delayDebounceFn = setTimeout(() => {
        onSearch(value);
        setLoad(false);
      }, 500);

      return () => clearTimeout(delayDebounceFn);
    } else {
      onClear();
    }
  }, [value]);

  return (
    <Layout style={{ marginBottom: 10 }}>
      <Input
        value={value}
        placeholder="Search by name"
        accessoryRight={() =>
          value.trim().length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                setValue("");
                onClear();
              }}
            >
              <Times width={20} height={20} stroke="#fff" />
            </TouchableOpacity>
          ) : (
            <Search width={20} height={20} stroke="#fff" />
          )
        }
        onChangeText={(nextValue) => setValue(nextValue)}
      />
    </Layout>
  );
};

export default HomeFilter;
