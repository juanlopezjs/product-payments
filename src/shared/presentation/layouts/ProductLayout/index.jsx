import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductLayout.scss';
import Header from '../../components/latyouts/Header';

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
