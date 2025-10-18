import React, { useEffect, useState } from 'react';
import { actions, formCard, input, primaryBtn, textarea } from './RegisterForm.styles';
import type { TaskType } from '../../types';
import { loadLocalStorage } from "../../util";
type Props = {
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const RegisterForm = (props: Props) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorBodyTitle, setErrorBodyTitle] = useState("");
  const [errorBodyDetail, setErrorBodyDetail] = useState("");


  useEffect(function () {
    const titleMaxLength = 50;
    const titleMinLength = 0;
    const detailMaxLength = 200;
    const detailMinLength = 0;

    const noTitle = title.length == 0;
    const noDetail = detail.length == 0;
    const longTitle = title.length > titleMaxLength;
    const longDetail = detail.length > detailMaxLength;
    const littleTitle = titleMinLength > title.length;
    const littleDetail = detailMinLength > detail.length;
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
  }, [title, detail]);
  /**
   * TODO：新規登録の作成
   */
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに追加ボタン押下時の処理を書く
    const newId = Math.random();
    const newTask: TaskType = { id: newId, title: title, detail: detail }
    const prev = loadLocalStorage();
    prev.push(newTask);
    localStorage.setItem(`tasklist`, JSON.stringify(prev));
    props.setTaskList(prev);
  };

  return (
    <form style={formCard} onSubmit={(e) => onSubmitForm(e)}>
      <input style={input} type='text' placeholder="タイトル" required={true} value={title} onChange={(e) => setTitle(e.target.value)} />
      <a>{buttonDisabled && errorBodyTitle}</a>
      <br />
      <textarea style={textarea} required={true} placeholder="TODO" value={detail} onChange={(e) => setDetail(e.target.value)} rows={7}></textarea>
      <a>{buttonDisabled && errorBodyDetail}</a>
      <div style={actions}>
        <button style={primaryBtn(buttonDisabled)} disabled={buttonDisabled} type='submit'>
          追加
        </button>
      </div>
    </form>
  );
};
