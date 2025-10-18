import React, { useState } from 'react';
import { actions, formCard, input, primaryBtn, textarea } from './RegisterForm.styles';
import type { TaskType } from '../../types';

type Props = {
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const RegisterForm = (props: Props) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  /**
   * TODO：新規登録の作成
   */
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに追加ボタン押下時の処理を書く
    props.setTaskList((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          title: title,
          detail: detail
        }
      ];
    }
    )
  };

  return (
    <form style={formCard} onSubmit={(e) => onSubmitForm(e)}>
      <input style={input} type='text' placeholder="タイトル" required={true} value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <textarea style={textarea} required={true} placeholder="TODO" value={detail} onChange={(e) => setDetail(e.target.value)} rows={7}></textarea>
      <div style={actions}>
        <button style={primaryBtn(true)} type='submit'>
          追加
        </button>
      </div>
    </form>
  );
};
