import { css } from '@emotion/react';
import { FC, useEffect, useRef } from 'react';

export function ImageLazyLoadingPage() {
  return (
    <main css={wrapperCSS}>
      <h1>ImageLazyLoadingPage</h1>
      <h2>Scroll Down 👇</h2>
      <div>dataset을 이용해서 lazy load하는 방식입니다.</div>
      <ImageEditor
        imageList={RANDOM_IMAGE_LIST}
        options={{ root: null, rootMargin: '0px 0px 100px 0px', threshold: 0 }}
      />
    </main>
  );
}

const RANDOM_IMAGE_LIST = Array(100)
  .fill(null)
  .map((_, i) => ({ src: `https://picsum.photos/600/400/?random?${i}&w=10`, alt: 'random image' }));

const wrapperCSS = css`
  width: 660px;
  margin-left: auto;
  margin-right: auto;

  .image-editor {
    margin-top: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    background: #eee;
    .image {
      min-width: 300px;
      width: 300px;
      min-height: 200px;
      height: 200px;
    }
  }
`;

interface ImageEditorProps {
  imageList: {
    src: string;
    alt: string;
  }[];
  options?: IntersectionObserverInit;
}

const ImageEditor: FC<ImageEditorProps> = ({ imageList, options }) => {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('isIntersecting', entry);
          const target = entry.target as HTMLImageElement;
          target.src = target.dataset.src ?? '';
          observer.unobserve(target);
        }
      });
    }, options);

    imgRefs.current.forEach((img) => img && io.observe(img));

    return () => {
      io.disconnect();
      //   images.forEach((el) => {
      //     io.unobserve(el);
      //   });
    };
  }, []);

  return (
    <section className="image-editor">
      {imageList.map(({ src, alt }, index) => (
        <img data-src={src} alt={alt} className="image" key={src} ref={(el) => (imgRefs.current[index] = el)} />
      ))}
    </section>
  );
};
