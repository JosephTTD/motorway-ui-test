import LazyLoad from "react-lazyload";
import { useState } from "react";

const Picture = ({ imgUrl, imgDesc, classes, style }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <picture className={classes} style={style}>
      <LazyLoad once>
        <source srcSet={`${imgUrl}.webp`} type="image/webp" />
      </LazyLoad>
      <LazyLoad once>
        <img
          src={`${imgUrl}.jpg`}
          alt={imgDesc ?? "An image"}
          className={classes}
          style={{ ...style, opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
          rel="prefetch"
          onLoad={handleImageLoad}
        />
      </LazyLoad>
    </picture>
  );
};

export default Picture;
