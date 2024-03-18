import React from 'react';
import successLogo from '/success.svg';
import './SuccessPayment.scss';
import { getPayment } from '../../../application/selectors/products';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../../../shared/application/helpers/history';
import { productRoute } from '../../../infrastructure/routing/routes';
import { setResetState } from '../../../application/slices/products';

const SuccessPayment = () => {
	const dispatch = useDispatch();
	const payment = useSelector(getPayment);

	const HandleViewOtherProduct = () => {
		dispatch(setResetState());
		history.push(productRoute(Math.floor(Math.random() * (20 - 1) + 1)));
    };
    
	return (
		<section className="success-payment-container">
			<div className="description-container">
				<img src={successLogo} className="logo" alt="Vite logo" />
				<div className="transaction-container">
					<span>Payment successfully</span>
					<span>transaction id {payment?.paymentId}</span>
				</div>
			</div>
			<div className="button-container">
				<button className="button" onClick={HandleViewOtherProduct}>
					View other product
				</button>
			</div>
		</section>
	);
};

export default SuccessPayment;
