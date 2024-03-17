import React from 'react';
import Proptypes from 'prop-types';
import './InfoProduct.scss';
import { formatPrice } from '../../../application/helpers/format';

const InfoProduct = ({ title, description, price }) => {  
	return (
		<section className="info-product-container">
			<h1 className="title-product" data-testid="title-product">{title}</h1>
            <span className="price-product" data-testid="price-product">{formatPrice.format(price)}</span>
            <p className='description-product' data-testid="description-product">{description}</p>
		</section>
	);
};

InfoProduct.propTypes = {
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
	price: Proptypes.number.isRequired,
};

export default InfoProduct;
