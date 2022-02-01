import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  onChange: (foo: string) => void;
}

const Input: React.FC<Props> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          multiline
          rows={6}
          placeholder="適当な単語を改行区切りで入力してください"
          onChange={handleChange}
        />
      </div>
    </Box>
  );
};

export default Input;
