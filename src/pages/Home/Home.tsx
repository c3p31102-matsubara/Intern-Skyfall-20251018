/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { TaskList } from '../../components/TaskList/TaskList';
import type { TaskType } from '../../types';
import { homeStyle, mainStyle } from './Home.styles';

export const Home = () => {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  return (
    <div style={homeStyle}>
      <main style={mainStyle}>
        <RegisterForm setTaskList={setTaskList}/>
        <TaskList taskList={taskList} setTaskList={setTaskList}/>
      </main>
    </div>
  );
};
