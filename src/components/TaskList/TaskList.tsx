import type { TaskType } from '../../types';
import { TaskCard } from '../TaskCard/TaskCard';
import { listStyle } from './TaskList.styles';

type Props = {
  taskList: TaskType[];
};

export const TaskList = ({ taskList }: Props) => {
  return (
    <div style={listStyle}>
      {taskList.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
