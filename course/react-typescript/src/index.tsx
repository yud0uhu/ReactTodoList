import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { request } from "./server";
import { TaskList } from "./components/organisms/TaskList";
import { TaskForm } from "./components/organisms/TaskForm";
import Header from "./components/molecules/Header";

// TODOタスクの型
export type Task = { label: string; isDone: boolean };

const App: React.VFC = () => {
  // タスクリストを格納する
  const [tasks, setTasks] = useState<Task[]>([]);

  // 追加前のタスクを格納する
  const [newTaskLabel, setNewTaskLabel] = useState<string>("");

  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
    request.fetchTasks((payload: Task[]) => setTasks(payload));
  }, []);

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      {/* ヘッダー */}
      <Header />

      {/* 一覧表示 */}
      <TaskList {...{ tasks, setTasks }} />

      {/* タスク追加、削除 */}
      <TaskForm {...{ tasks, setTasks, newTaskLabel, setNewTaskLabel }} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
