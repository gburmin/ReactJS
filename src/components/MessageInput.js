import { useState, useRef, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Paper, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MessageInput = (props) => {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const resetValue = () => {
    setValue("");
  };

  const onChangeMessage = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSend(value);
    resetValue();
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Paper
      sx={{ m: 5, display: "flex", justifyContent: "space-between" }}
      component="form"
      onSubmit={onSubmit}
    >
      <TextField
        sx={{ flexGrow: 1 }}
        id="standard-basic"
        label=" Введите сообщение"
        variant="standard"
        onChange={onChangeMessage}
        value={value}
        inputRef={inputRef}
        type="text"
      />

      <IconButton aria-label="send" type="submit">
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

// eslint-disable-next-line react/no-typos
MessageInput.propTypes = {
  onSend: PropTypes.func,
};
