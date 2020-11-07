import React from "react";


const ImageSliderOneSingle = ({ data, sliderClass }) => {
  return (
    <div className={`single-image ${sliderClass ? sliderClass : ""}`}>
      <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + data.link}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${process.env.NEXT_PUBLIC_PUBLIC_URL + data.image}`}
          />
          <source
            type="image/jpeg"
            srcSet={`${process.env.NEXT_PUBLIC_PUBLIC_URL + data.image}?fm=jpg`}
          />
          <img src={`${process.env.NEXT_PUBLIC_PUBLIC_URL + data.image}?fm=jpg`} />
        </picture>
      </a>
    </div>
  );
};

export default ImageSliderOneSingle;
