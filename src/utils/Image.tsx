import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  srcSet: string;
  [key: string]: any;
};

export default function Image({ src, alt, srcSet, ...props }: ImageProps) {
  return (
    <picture>
      <source srcSet={srcSet} type="image/webp" />
      <img src={src} alt={alt} {...props} />
    </picture>
  );
}
