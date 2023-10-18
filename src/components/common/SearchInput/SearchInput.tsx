import React, { ChangeEvent, useState } from "react";
import {
  InputAdornment,
  TextField,
  createStyles,
  makeStyles,
} from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import { useTheme } from "@mui/material";

type SearchInputProps = {
  onSearchInputChange: (inputValue: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearchInputChange }) => {

  const theme = useTheme();

  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setShowClearIcon(value === "" ? "none" : "flex");
    setSearchInputValue(value);
    onSearchInputChange(value);
  };

  const handleClick = (): void => {
    setShowClearIcon("none");
    setSearchInputValue("");
    onSearchInputChange("");
  };

  return (
    <div>
      <TextField
        size="small"
        variant="outlined"
        onChange={handleInputChange}
        value={searchInputValue}
        sx={{ bgcolor: theme.palette.grey[200] , border:'none'}}
        placeholder="enter your search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <Search sx={{fontSize:'18px'}} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: showClearIcon, cursor: "pointer" }}
              onClick={handleClick}
            >
              <Clear sx={{fontSize:'18px'}}  />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
