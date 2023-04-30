import styled from '@emotion/styled';
import { MouseEvent, MouseEventHandler, ReactNode, CSSProperties } from 'react';
import { FC } from 'react';

interface Props {
  visible: boolean;
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  onClickOverlay?: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

export const Modal: FC<Props> = ({
  visible,
  width,
  height,
  onClickOverlay,
  children,
}) => {
  const onClickModalWrapper = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClickOverlay?.(e);
    }
  };

  return (
    <>
      <Overlay visible={visible} />
      <ModalWrapper visible={visible} onClick={onClickModalWrapper}>
        <ModalInner width={width} height={height}>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0);
  opacity: ${({ visible }) => (visible ? 0.6 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
  z-index: 999;
`;

const ModalWrapper = styled.div<{
  visible: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'all' : 'none')};
  z-index: 1000;
  transform: translateY(${(props) => (props.visible ? '0' : '100%')});
  transition: 'opacity 300ms ease-in-out, transform 300ms ease-out';
`;

const ModalInner = styled.div<{
  width: Props['width'];
  height?: Props['height'];
}>`
  background-color: white;
  width: ${(props) => (props.width ? props.width : '320px')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  border-radius: 16px;
`;
