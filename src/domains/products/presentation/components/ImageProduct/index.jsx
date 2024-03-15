import React from 'react';
import Proptypes from 'prop-types';
import './ImageProduct.scss';

const ImageProduct = ({ url }) => {
	return (
		<section className="image-product-container">
			<img className="image" src={url} />
		</section>
	);
};

ImageProduct.propTypes = {
	url: Proptypes.string.isRequired,
};

export default ImageProduct;
