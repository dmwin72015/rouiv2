import type { Meta } from '@storybook/react';
import { useState } from 'react';
import Dialog from '../src/Root';
import './demo.scss';

import DialogDemo from './Dialog';

const meta = {
  title: 'Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;

export const ControllDemo = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>凯斯</button>
      <Dialog open={open} onOpenChange={setOpen}>
        我是呢日哦哦那天
        <button
          onClick={() => setOpen2(true)}
          className="bg-blue-500 px-2 py-1.5 rounded"
        >
          另一个dialog
        </button>
      </Dialog>

      <Dialog open={open2} onOpenChange={setOpen2}>
        我是第二个dialog
      </Dialog>
    </div>
  );
};

//

export const OriginDemo = () => {
  return <DialogDemo />;
};
