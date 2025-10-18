import type { TaskType } from '../../types';
import { TaskCard } from '../TaskCard/TaskCard';
import { listStyle } from './TaskList.styles';

type Props = {
  taskList: TaskType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const TaskList = ({ taskList, setTaskList }: Props) => {
  return (
    <div style={listStyle}>
      {taskList.map((task) => (
        <TaskCard key={task.id} task={task} taskList={taskList} setTaskList={setTaskList}/>
      ))}
    </div>
  );
};
