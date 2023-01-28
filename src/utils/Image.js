import React from 'react';

export default function Image({ src, alt, srcSet,...props}) {
    return (
        <picture>
            <source srcSet={srcSet} type="image/webp" />
            <img src={src} alt={alt} {...props} />
        </picture>
    );
}