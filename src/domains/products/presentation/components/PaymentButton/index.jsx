import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setLoader, setPayment, setShowModalCredit } from '../../../application/slices/products';
import './PaymentButton.scss';

const PaymentButton = ({ productId, title, price }) => {
	const dispatch = useDispatch();
	const HandlePayCredit = () => {
		dispatch(setLoader(true));
		setTimeout(() => {
			dispatch(setLoader(false));
			dispatch(
				setPayment({
					productId,
					title,
					price,
				}),
			);
			dispatch(setShowModalCredit(true));
		}, 1000);
	};

	return (
		<section className="payment-button-container">
			<button className="payment-button" onClick={HandlePayCredit}>
				Pay with credit card
			</button>
		</section>
	);
};

PaymentButton.propTypes = {
	productId: Proptypes.number.isRequired,
	title: Proptypes.string.isRequired,
	price: Proptypes.number.isRequired,
};

export default PaymentButton;
