import React from 'react';
import Sheet from 'react-modal-sheet';
import './SummaryPayment.scss';
import { useDispatch, useSelector } from 'react-redux';
import { gePayment, geShowModalSummary } from '../../../application/selectors/products';
import { setLoader, setShowModalSummary } from '../../../application/slices/products';
import { formatPrice } from '../../../application/helpers/format';
import { history } from "../../../../../shared/application/helpers/history";
import { successPaymentRoute } from '../../../infrastructure/routing/routes';

const SummaryPayment = () => {
	const showModal = useSelector(geShowModalSummary);
	const payment = useSelector(gePayment);
	const dispatch = useDispatch();
	const HandleCloseModal = () => dispatch(setShowModalSummary(false));

    const HandleConfirm = () => {
        dispatch(setLoader(true));
       setTimeout(() => {
            dispatch(setLoader(false));
            history.push(successPaymentRoute(1));
        }, 1000);
    }

	return (
		<Sheet isOpen={showModal} onClose={HandleCloseModal} detent="content-height">
			<Sheet.Container>
				<Sheet.Header />
				<Sheet.Content>
					<Sheet.Scroller draggableAt="both">
						<section className="summary-payment-container">
							<div className="title-container">
								<h2 className="title">Confirm Payment</h2>
								<span className="description">Review details of this transaction and hit Confirm to proceed</span>
							</div>
							<div className="detail-container">
								<span className="detail-title">Product</span>
								<span className="detail-description">{payment?.title}</span>
							</div>
							<div className="detail-container">
								<span className="detail-title">Recipient</span>
								<span className="detail-description">{payment?.cardName}</span>
							</div>
							<div className="total-container">
								<span>Total amount</span>
								<span>{formatPrice.format(payment?.price)}</span>
							</div>
							<button className="confirm-button" onClick={HandleConfirm}>Confirm</button>
						</section>
					</Sheet.Scroller>
				</Sheet.Content>
			</Sheet.Container>
			<Sheet.Backdrop />
		</Sheet>
	);
};

export default SummaryPayment;
