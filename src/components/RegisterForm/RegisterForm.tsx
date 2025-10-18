import { useState } from 'react';
import { actions, formCard, input, primaryBtn, textarea } from './RegisterForm.styles';

export const RegisterForm = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  /**
   * TODO：新規登録の作成
   */
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに追加ボタン押下時の処理を書く
  };

  return (
    <form style={formCard} onSubmit={(e) => onSubmitForm(e)}>
      <input style={input} type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <textarea style={textarea} value={detail} onChange={(e) => setDetail(e.target.value)} rows={7}></textarea>
      <div style={actions}>
        <button style={primaryBtn(true)} type='submit'>
          追加
        </button>
      </div>
    </form>
  );
};
