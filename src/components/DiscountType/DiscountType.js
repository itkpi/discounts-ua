import React, { Component } from 'react';
import Discount from '../Discount/Discount';
import './DiscountType.css';

class DiscountType extends Component {
  formatDate(date) {
    return (new Date(date)).toLocaleDateString()
  }

  renderDiscount(discount) {
    return (
      <Discount name={discount.name}
                oldPrice={discount.price_old}
                newPrice={discount.price_new}
                imageUrl={discount.img_url}
                imageUrlSmall={discount.small_img_url}
                key={discount.id} />
    )
  }

  render() {
    const startDate = this.formatDate(this.props.startDate)
    const endDate = this.formatDate(this.props.endDate)

    return (
      <section className="DiscountType">
        <h1 className="DiscountTypeInfo">
          {this.props.name} (from {startDate} to {endDate})
        </h1>
        <ul className="DiscountList">
          {this.props.discounts.map(this.renderDiscount)}
        </ul>
      </section>
    )
  }
}

export default DiscountType;