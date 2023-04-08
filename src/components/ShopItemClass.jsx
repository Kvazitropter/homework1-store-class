import React from 'react';
import PropTypes from 'prop-types';

class ShopItemClass extends React.Component {
  constructor(props) {
    super(props);

    const { item } = props;
    const { price, currency } = item;
    const strPrice = `${currency}${price.toFixed(2)}`;
    this.state = { ...item, price: strPrice };
  }

  render() {
    const { brand, title, description, descriptionFull, price } = this.state;

    return (
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className="description">
          {descriptionFull}
        </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay" />
        </div>
        <div className="divider" />
        <div className="purchase-info">
          <div className="price">{price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
};

ShopItemClass.propTypes = { 
  item: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currnecy: PropTypes.string,
  }),
};

export default ShopItemClass;
