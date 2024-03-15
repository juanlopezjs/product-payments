import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../../components/latyouts/Header';
import './ProductLayout.scss';

const ProductLayout = ({ children }) => {
	return (
		<main className="product-layout-container">
			<Header />
			<section className='section-container'>{children}</section>
		</main>
	);
};

ProductLayout.propTypes = {
	children: PropTypes.node,
};

export default ProductLayout;
