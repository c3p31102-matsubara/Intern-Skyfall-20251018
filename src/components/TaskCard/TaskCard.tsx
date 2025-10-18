import { useState } from 'react';
import type { TaskType } from '../../types';
import * as S from './TaskCard.styles';

type Props = {
  task: TaskType;
};

export const TaskCard = ({ task }: Props) => {
  const { title, detail } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDetail, setEditedDetail] = useState(detail);

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
    // ここに更新ボタン押下時の処理
  };

  return (
    <>
      {isEditing ? (
        <form style={S.card} onSubmit={onSubmitEditForm}>
          <input style={S.editInput} value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <br />
          <textarea
            style={S.editTextarea}
            value={editedDetail}
            onChange={(e) => setEditedDetail(e.target.value)}
            rows={7}
          />
          <br />
          <div style={S.editActions}>
            <button style={S.primaryBtn(true)} type='submit'>
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
