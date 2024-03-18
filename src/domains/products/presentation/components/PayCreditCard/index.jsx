import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from 'react-credit-cards-2';
import Sheet from 'react-modal-sheet';
import FormPayCredit from '../FormPayCredit';
import { geFocusElement, getPayment, getShowModalCredit } from '../../../application/selectors/products';
import { setShowModalCredit } from '../../../application/slices/products';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './PayCreditCard.scss';
import { paymentCreditCardFields } from '../../../application/constants/paymentCreditCard';

const PayCreditCard = () => {
	const showModal = useSelector(getShowModalCredit);
	const payment = useSelector(getPayment);
	const focus = useSelector(geFocusElement);
	const dispatch = useDispatch();
	const HandleCloseModal = () => dispatch(setShowModalCredit(false));

	const number = payment[paymentCreditCardFields.NUMBER] || '';
	const expiry = payment[paymentCreditCardFields.EXPIRY] || '';
	const cvc = payment[paymentCreditCardFields.CVC] || '';
	const name = payment[paymentCreditCardFields.NAME] || '';

	return (
		<Sheet isOpen={showModal} onClose={HandleCloseModal} detent="content-height">
			<Sheet.Container>
				<Sheet.Header />
				<Sheet.Content>
					<Sheet.Scroller draggableAt="both">
						<section className="pay-credit-container" data-testid="pay-credit-container">
							<Cards number={number} expiry={expiry} cvc={cvc} name={name} focused={focus} data-testid="cards-component"/>
							<FormPayCredit/>
						</section>
					</Sheet.Scroller>
				</Sheet.Content>
			</Sheet.Container>
			<Sheet.Backdrop />
		</Sheet>
	);
};

export default PayCreditCard;
