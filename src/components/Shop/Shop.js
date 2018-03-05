import React, { Component } from 'react';
import DiscountType from '../DiscountType/DiscountType';
import API from '../../utils/api';
import Loading from '../Loading/Loading';

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.fetchShop()
  }

  componentDidUpdate(prevProps) {
    const prevPath = prevProps.match.params.shop
    const newPath = this.props.match.params.shop

    if (prevPath !== newPath) {
      this.fetchShop()
    }
  }

  fetchShop() {
    const path = this.props.match.params.shop
    API.shop(path)
      .then(shop => this.setState({...shop}))
  }

  renderDiscountType(discountType) {
    return (
      <DiscountType name={discountType.name}
                    startDate={discountType.start_date}
                    endDate={discountType.end_date}
                    periodic={discountType.periodic}
                    lastUpdatedAt={discountType.last_updated_at}
                    discounts={discountType.discounts}
                    key={discountType.id} />
    )
  }

  render() {
    if (!this.state.discount_types) return <Loading />

    return (
      <main className="Shop">
        {this.state.discount_types.map(this.renderDiscountType)}
      </main>
    );
  }
}

export default Shop;
