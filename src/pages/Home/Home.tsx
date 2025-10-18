/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { TaskList } from '../../components/TaskList/TaskList';
import type { TaskType } from '../../types';
import { homeStyle, mainStyle } from './Home.styles';

export const Home = () => {
  const [taskList, setTaskList] = useState<TaskType[]>([
    { id: 1, title: 'タイトル1', detail: '詳細1' },
    { id: 2, title: 'タイトル2', detail: '詳細2' },
    { id: 3, title: 'タイトル3', detail: '詳細3' },
  ]);

  return (
    <div style={homeStyle}>
      <main style={mainStyle}>
        <RegisterForm />
        <TaskList taskList={taskList} />
      </main>
    </div>
  );
};
