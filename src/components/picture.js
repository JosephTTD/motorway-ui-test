import LazyLoad from "react-lazyload";
import { useState } from "react";

const Picture = ({ imgUrl, imgDesc, classes, style }) => {
    const [loaded, setLoaded] = useState(false);
  
    return (
      <picture className={`${classes} ${loaded ? 'image-after' : 'image-before'}`}>
        <LazyLoad once>
          <source
            srcSet={`${imgUrl}.webp`}
            type="image/webp"
            className={classes}
            style={style}
          />
        </LazyLoad>
        <LazyLoad once>
          <img
            src={`${imgUrl}.jpg`}
            alt={imgDesc ?? "An image"}
            className={`${classes} ${loaded ? 'image-after' : 'image-before'}`}
            rel="prefetch"
            style={style}
            onLoad={() => setLoaded(true)}
          />
        </LazyLoad>
      </picture>
    );
  };
  
  export default Picture;