import { ReactNode } from 'react';
import { FC } from 'react';
import { Modal } from './modal';
import { GetProps } from '@/utils';

interface Props extends GetProps<typeof Modal> {
  visible: boolean;
  onConfirm: () => void;
  onClose: () => void;
  children: ReactNode;
}

export const ExModal: FC<Props> = ({
  visible,
  onConfirm,
  onClose,
  children,
}) => {
  return (
    <Modal visible={visible} onClickOverlay={onClose}>
      <div>
        {children}
        <button onClick={onConfirm}>확인</button>
        <button onClick={onClose}>닫기</button>
      </div>
    </Modal>
  );
};
