import React from "react";
import { Link } from "react-router-dom";

function GalleryItem(props) {
  return (
    <>
          <li className="gallery__item">
        <Link className="gallery__item__link" to={props.path}>
          <figure
            className="gallery__item__pic-wrap"
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="Travel image"
              className="gallery__item__img"
            />
          </figure>
          <div className="gallery__item__info">
            <h5 className="gallery__item__text">{props.description}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default GalleryItem;
