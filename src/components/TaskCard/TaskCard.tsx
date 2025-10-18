import { useEffect, useState } from 'react';
import type { TaskType } from '../../types';
import * as S from './TaskCard.styles';

type Props = {
  task: TaskType;
  taskList: TaskType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const TaskCard = ({ task, taskList, setTaskList }: Props) => {
  const { id, title, detail } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDetail, setEditedDetail] = useState(detail);
  const [buttonDisabled, setButton] = useState(true);

  useEffect(function () {
    if (editedTitle.length == 0 || editedDetail.length == 0) {
      setButton(true);
    }
    else if (editedTitle.length > 50 || editedDetail.length > 200) {
      setButton(true);
    }
    else if (editedTitle.length > 0 || editedDetail.length > 0) {
      setButton(false);
    }
  }, [editedTitle, editedDetail]);

  // 編集ボタン押下時の処理
  const onClickEditButton = () => {
    setIsEditing((prev) => !prev);
  };

  // キャンセルボタン押下時の処理
  const onClickCancelButton = () => {
    setEditedTitle(title);
    setEditedDetail(detail);
    setIsEditing(false);
  };

  /**
   * TODO：削除の作成
   */
  const onClickDeleteButton = () => {
    // ここに削除ボタン押下時の処理
  };

  // TODO：編集の作成
  const onSubmitEditForm = (e: React.FormEvent) => {
    e.preventDefault();
    const newTaskList = taskList.map((task) => {
      if (task.id == id) {
        task.title = editedTitle;
        task.detail = editedDetail;
      }
      return task;
    })
    setTaskList([...newTaskList]);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <form style={S.card} onSubmit={onSubmitEditForm}>
          <input style={S.editInput} required={true} placeholder='タイトル' value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <br />
          <textarea
            style={S.editTextarea}
            value={editedDetail}
            required={true}
            placeholder='TODOを入力'
            onChange={(e) => setEditedDetail(e.target.value)}
            rows={7}
          />
          <br />
          <div style={S.editActions}>
            <button style={S.primaryBtn(buttonDisabled)} disabled={buttonDisabled} type='submit'>
              更新
            </button>
            <button style={S.pillBtn} onClick={onClickCancelButton} type='button'>
              キャンセル
            </button>
          </div>
        </form>
      ) : (
        <div style={S.card}>
          <h3 style={S.title}>{title}</h3>
          <p style={S.detail}>{detail}</p>
          <div style={S.viewActions}>
            <button style={S.pillBtn} onClick={onClickEditButton}>
              編集
            </button>
            <button style={S.dangerBtn} onClick={onClickDeleteButton} hidden={isEditing}>
              削除
            </button>
          </div>
        </div>
      )}
    </>
  );
};
