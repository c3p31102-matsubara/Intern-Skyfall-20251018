import { useEffect, useState } from 'react';
import type { TaskType } from '../../types';
import * as S from './TaskCard.styles';
import { loadLocalStorage } from '../../util';

type Props = {
  task: TaskType;
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const TaskCard = ({ task, setTaskList }: Props) => {
  const { id, title, detail } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDetail, setEditedDetail] = useState(detail);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorBodyTitle, setErrorBodyTitle] = useState("");
  const [errorBodyDetail, setErrorBodyDetail] = useState("");

  useEffect(function () {
    const titleMaxLength = 50;
    const titleMinLength = 0;
    const detailMaxLength = 200;
    const detailMinLength = 0;

    const noTitle = editedTitle.length == 0;
    const noDetail = editedDetail.length == 0;
    const longTitle = editedTitle.length > titleMaxLength;
    const longDetail = editedDetail.length > detailMaxLength;
    const littleTitle = titleMinLength > editedTitle.length;
    const littleDetail = detailMinLength > editedDetail.length;
    let errorBodyTitle = "";
    let errorBodyDetail = "";

    if (noTitle)
      errorBodyTitle += "入力してください\n";
    if (noDetail)
      errorBodyDetail += "入力してください\n";
    if (longTitle)
      errorBodyTitle += `長すぎます(${titleMaxLength}文字以下)\n`;
    if (longDetail)
      errorBodyDetail += `長すぎます(${detailMaxLength}文字以下)\n`;
    if (littleTitle)
      errorBodyTitle += "短すぎます\n";
    if (littleDetail)
      errorBodyDetail += "短すぎます\n";

    setButtonDisabled(noTitle || noDetail || longTitle || longDetail || littleTitle || littleDetail);
    setErrorBodyTitle(errorBodyTitle);
    setErrorBodyDetail(errorBodyDetail);
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
    let taskList = loadLocalStorage();
    taskList = taskList.map((task) => {
      if (task.id == id) {
        task.title = editedTitle;
        task.detail = editedDetail;
      }
      return task;
    })
    localStorage.setItem("tasklist", JSON.stringify(taskList));
    setTaskList(taskList);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <form style={S.card} onSubmit={onSubmitEditForm}>
          <input style={S.editInput} required={true} placeholder='タイトル' value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <a>{buttonDisabled && errorBodyTitle}</a>
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
          <a>{buttonDisabled && errorBodyDetail}</a>
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
