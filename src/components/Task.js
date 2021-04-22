import React from 'react';

const Task = props => {
  const { task, updateTaskRequest, deleteTaskRequest, isReadMore } = props;

  return (
    <div>
      <h3>Task ID: {task.id}</h3>
      <p>{task.body}</p>
      <p>{`${new Date(task.deadline).toDateString()}`}</p>
      <input
        type='checkbox'
        checked={task.isDone}
        onChange={({ target: { checked } }) => {
          updateTaskRequest({
            taskId: task.id,
            values: {
              isDone: checked,
            },
          });
        }}
      />
      {!isReadMore && <a href={`/tasks/${task.id}`}>Read more</a>}
      <button onClick={() => deleteTaskRequest(task.id)}>Delete task</button>
    </div>
  );
};

export default Task;
