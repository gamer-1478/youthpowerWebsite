import React from 'react';

function CardItem(props) {
  console.log(props);
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <div className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Projects'
              src={props.img_src}
            />
          </div>
          <div className='cards__item__info'>
            <h1>{props.name}</h1>
            <h5 className='cards__item__text'>{props.post}</h5>
          </div>
        </div>
      </li>

    </>
  );
}

export default CardItem;
