import React, { useEffect, useState } from 'react';
import { actions, formCard, input, primaryBtn, textarea } from './RegisterForm.styles';
import type { TaskType } from '../../types';

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
    const noTitle = title.length == 0;
    const noDetail = detail.length == 0;
    const longTitle = title.length > 50;
    const longDetail = detail.length > 200;
    const littleTitle = title.length > 0;
    const littleDetail = detail.length > 0;
    if (noTitle || noDetail) {
      setButtonDisabled(true);
      if (noTitle)
        setErrorBodyTitle("入力してください");
      if (noDetail)
        setErrorBodyDetail("入力してください");
    }
    else if (longTitle || longDetail) {
      setButtonDisabled(true);
      if (longTitle)
        setErrorBodyTitle("テキストが長すぎます");
      if (longDetail)
        setErrorBodyDetail("テキストが長すぎます");
    }
    else if (littleTitle || littleDetail) {
      setButtonDisabled(false);
      setErrorBodyTitle("");
      setErrorBodyDetail("");
    }
  }, [title, detail]);
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
