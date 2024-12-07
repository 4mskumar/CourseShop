import React from "react";
import AcceptTask from "../../Tasklist/AcceptTask";
import Completed from "../../Tasklist/Completed";
import Failed from "../../Tasklist/Failed";
import NewTask from "../../Tasklist/NewTask";

const TaskListPannel = ({ data, failed, incrementFailedCount }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[60%] w-full flex gap-3 mt-10 py-3 "
    >
      {data.tasks.map((task, id) => {
        if (task.active) {
          return <AcceptTask incrementFailedCount = {incrementFailedCount} key={id} data={task}/>;
        }
        if (task.newTask) {
          return <NewTask key={id} data={task}/>;
        }
        if (task.completed) {
          return <Completed key={id} data={task}/>;
        }
        if (task.failed) {
          return <Failed key={id} data={task}/>;
        }
      })}
    </div>
  );
};

export default TaskListPannel;
