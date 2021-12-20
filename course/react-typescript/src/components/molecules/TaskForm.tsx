import React from "react";
import { Task } from "../..";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import AddIcon from "@mui/icons-material/Add";
import TaskFormInput from "../atoms/TaskFormInput";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
};

export const TaskForm: React.FC<Props> = ({
  tasks,
  setTasks,
  newTaskLabel,
  setNewTaskLabel,
}) => {
  // Taskの登録
  const handleAddTask = () => {
    const newTask = { label: newTaskLabel, isDone: false };
    setTasks([...tasks, newTask]);
    setNewTaskLabel("");
  };

  // 完了したTaskを削除する
  const handleClearTask = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  };

  function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
      if (focused) {
        return "This field is being focused";
      }

      return "Helper text";
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: "25ch" }}>
          <TaskFormInput
            setNewTaskLabel={setNewTaskLabel}
            newTaskLabel={newTaskLabel}
          />
          <MyFormHelperText />
        </FormControl>
        <IconButton onClick={handleAddTask} aria-label="delete" size="large">
          <AddIcon fontSize="inherit" />
        </IconButton>
        <br />
        <IconButton onClick={handleClearTask} aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </>
  );
};
