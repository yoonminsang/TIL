import { ReactNode, FC } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Modal } from './modal';
import { GetProps } from '@/utils';
import { Button } from '../button';

interface Props extends Omit<GetProps<typeof Modal>, 'children' | 'width' | 'height'> {
  width?: GetProps<typeof Modal>['width'];
  height?: GetProps<typeof Modal>['height'];
  onClose: () => void;
  title: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  buttons?: ReactNode[];
}

export const ModalV1: FC<Props> = ({
  visible,
  width = '320px',
  height = 'auto',
  title,
  children,
  footer,
  buttons,
  onClose,
}) => (
  <Modal visible={visible} onClickOverlay={onClose} width={width} height={height}>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 16px;
        header {
          display: flex;
          align-items: center;
          h1 {
            margin: 0;
          }
          button {
            margin-left: auto;
          }
        }
        footer {
          .button-wrapper {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
        }
      `}>
      <header>
        <h1>{title}</h1>
        <Button onClick={onClose}>
          <Image src="/close.svg" width={26} height={26} alt="close" />
        </Button>
      </header>
      {children ? (
        <>
          <Divider />
          {children}
        </>
      ) : null}

      {footer || buttons ? (
        <>
          <Divider />
          <footer>
            {footer}
            <div className="button-wrapper">{buttons}</div>
          </footer>
        </>
      ) : null}
    </div>
  </Modal>
);

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
  background: lightgrey;
`;
