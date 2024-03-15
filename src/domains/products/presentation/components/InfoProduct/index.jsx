import React from 'react';
import Proptypes from 'prop-types';
import './InfoProduct.scss';

const InfoProduct = ({ title, description, price }) => {
	const formatPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
    });
    
	return (
		<section className="info-product-container">
			<h1 className="title-product">{title}</h1>
            <span className="price-product">{formatPrice.format(price)}</span>
            <p className='description-product'>{description}</p>
		</section>
	);
};

InfoProduct.propTypes = {
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
	price: Proptypes.number.isRequired,
};

export default InfoProduct;
