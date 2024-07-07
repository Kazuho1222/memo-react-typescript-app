import { FC } from 'react';

// 必要なPropsはメモ一覧と削除時に実行する関数
type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = props => {
  const { memos, onClickDelete } = props;

  return (
    <div className='border border-slate-400 p-4 m-2'>
      <p>メモ一覧</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <div className='flex items-center mb-2'>
              <p>{memo}</p>
              <button className='p-2 bg-black rounded-md text-white ml-4' onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
