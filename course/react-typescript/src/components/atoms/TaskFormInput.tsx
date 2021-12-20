import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";

type Props = {
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
};

const TaskFormInput: React.FC<Props> = ({ setNewTaskLabel, newTaskLabel }) => {
  // フォームの値を保持する
  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };
  return (
    <OutlinedInput
      placeholder="Enter the task"
      fullWidth
      label="fullWidth"
      id="fullWidth"
      onChange={handleNewTaskLabel}
      type="text"
      value={newTaskLabel}
    />
  );
};

export default TaskFormInput;
