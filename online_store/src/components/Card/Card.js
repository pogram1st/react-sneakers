import React from "react";
import styles from './Card.module.scss'


function Card({ title, price, onClickPlus, onFavorite, imgUrl }) {
    //useState()--------------------------------------------------------------------------------------
    const [img, setImg] = React.useState("img/plus.jpg");
    const onPlus = () => {
        onClickPlus();
        if (img == "img/plus.jpg") {
            setImg("img/check.jpg");
        } else {
            setImg("img/plus.jpg");
        }
        //------------------------------------------------------------------------------
    } 
    return(
        <div className={styles.card}>
    <div className="favorite">
        <a href="#" className="aLikes" onClick={onFavorite}></a>
        </div>
          <center><img width="133px" height="112px" src={imgUrl} /></center>
          <div className="width">
          <h5>{title}</h5>
          <div className='item_text d-flex justify-between align-center'>
            <div className="item_price d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
                <img className={styles.btnPlus} onClick={onPlus} src={img} />
        </div>
    </div>
</div>
    );
}

export default Card;