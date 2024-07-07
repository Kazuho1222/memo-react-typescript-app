import { ChangeEvent, useCallback, useState } from 'react';
import './App.css';
import { MemoList } from './components/MemoList';
import { useMemoList } from './hooks/useMemoList';

export default function App() {
  // カスタムフックからそれぞれ取得
  const { memos, addTodo, deleteTodo } = useMemoList();
  // テキストボックスState
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  // ［追加］ボタン押下後
  const onClickAdd = () => {
    // カスタムフックのメモ追加ロジック実行
    addTodo(text);
    // テキストボックスを空に
    setText("");
  };

  // ［削除］ボタン押下時（何番目が押されたかを引数で受け取る）
  const onClickDelete = useCallback((index: number) => {
    // カスタムフックのメモ削除ロジック実行
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <>
      <div>
        <h1 className='font-bold text-4xl mb-4'>簡単なメモアプリ</h1>
        <input className='border border-gray-600 ml-2' type="text" value={text} onChange={onChangeText} />
        <button className='p-2 bg-black rounded-md text-white ml-4' onClick={onClickAdd}>追加</button>
        <MemoList memos={memos} onClickDelete={onClickDelete} />
      </div>
    </>
  )
}
