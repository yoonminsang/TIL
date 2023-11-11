import { css } from '@emotion/react';
import { FC, useEffect, useRef } from 'react';

export function ImageLazyLoadingPage() {
  return (
    <main css={wrapperCSS}>
      <h1>ImageLazyLoadingPage</h1>
      <h2>Scroll Down 👇</h2>
      <ImageEditor
        imageList={RANDOM_IMAGE_LIST}
        options={{ root: null, rootMargin: '0px 0px 100px 0px', threshold: 0 }}
      />
    </main>
  );
}

const RANDOM_IMAGE_LIST = Array(100)
  .fill(null)
  .map((_, i) => ({ src: `https://picsum.photos/600/400/?random?${i}`, alt: 'random image' }));

const wrapperCSS = css`
  width: 660px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    margin-bottom: 500px;
  }

  .image-editor {
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
  const ref = useRef<HTMLDivElement>(null);

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

    const images = ref.current?.querySelectorAll('.image');
    if (!images) return;
    images.forEach((el) => {
      io.observe(el);
    });

    return () => {
      io.disconnect();
      //   images.forEach((el) => {
      //     io.unobserve(el);
      //   });
    };
  }, []);

  return (
    <section className="image-editor" ref={ref}>
      {imageList.map(({ src, alt }) => (
        <img data-src={src} alt={alt} className="image" key={src} />
      ))}
    </section>
  );
};
