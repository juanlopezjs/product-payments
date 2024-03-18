import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ShortUniqueId from 'short-unique-id'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import './FormPayCredit.scss';
import { ID_TYPE_OPTIONS, paymentCreditCardFields } from '../../../application/constants/paymentCreditCard';
import { paymentCreditCardSchema } from '../../../application/schema/paymentCreditCard';
import { useDispatch, useSelector } from 'react-redux';
import {
	setFocusElement,
	setPayment,
	setShowModalCredit,
	setShowModalSummary,
} from '../../../application/slices/products';
import { gePayment } from '../../../application/selectors/products';

const FormPayCredit = () => {
	const dispatch = useDispatch();
	const payment = useSelector(gePayment);
	const uid = new ShortUniqueId();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(paymentCreditCardSchema),
		defaultValues: payment,
	});

	const handleInputChange = (evt) => {
		const { name, value } = evt.target;
		dispatch(setPayment({ [name]: value }));
	};

	const handleInputFocus = (evt) => {
		dispatch(setFocusElement(evt.target.name));
	};

	const onSubmit = (values) => {
		dispatch(setPayment({ [paymentCreditCardFields.PAYMENT_ID]: uid.rnd(), ...values }));
		dispatch(setShowModalCredit(false));
		dispatch(setShowModalSummary(true));
	};

	return (
		<form className="form-container" onSubmit={handleSubmit(onSubmit)} data-testid="form-container">
			<div className="row">
				<div className="input-group">
					<label>Card number</label>
					<Controller
						name={paymentCreditCardFields.NUMBER}
						control={control}
						render={({ field }) => (
							<input
								{...field}
								className="input"
								type="number"
								maxLength="19"
								onFocus={handleInputFocus}
								onChange={(e) => {
									field.onChange(e);
									handleInputChange(e);
								}}
							/>
						)}
					/>
					<p className="error">{errors[paymentCreditCardFields.NUMBER]?.message}</p>
				</div>
			</div>
			<div className="row">
				<div className="input-group">
					<label>Name on the card</label>
					<Controller
						name={paymentCreditCardFields.NAME}
						control={control}
						render={({ field }) => (
							<input
								{...field}
								className="input"
								type="text"
								maxLength="20"
								onFocus={handleInputFocus}
								onChange={(e) => {
									field.onChange(e);
									handleInputChange(e);
								}}
							/>
						)}
					/>
					<p className="error">{errors[paymentCreditCardFields.NAME]?.message}</p>
				</div>
			</div>
			<div className="row">
				<div className="input-group">
					<label>Expiry</label>
					<Controller
						name={paymentCreditCardFields.EXPIRY}
						control={control}
						render={({ field }) => (
							<input
								{...field}
								className="input"
								type="number"
								maxLength="4"
								onFocus={handleInputFocus}
								onChange={(e) => {
									field.onChange(e);
									handleInputChange(e);
								}}
							/>
						)}
					/>
					<p className="error">{errors[paymentCreditCardFields.EXPIRY]?.message}</p>
				</div>
				<div className="input-group">
					<label>CVC</label>
					<Controller
						name={paymentCreditCardFields.CVC}
						control={control}
						onFocus={handleInputFocus}
						render={({ field }) => (
							<input
								{...field}
								className="input"
								type="number"
								maxLength="4"
								onFocus={handleInputFocus}
								onChange={(e) => {
									field.onChange(e);
									handleInputChange(e);
								}}
							/>
						)}
					/>
					<p className="error">{errors[paymentCreditCardFields.CVC]?.message}</p>
				</div>
			</div>
			<div className="row">
				<div className="input-group">
					<label>Identification</label>
					<select className="input type-id" {...register(paymentCreditCardFields.TYPE_ID)} onFocus={handleInputFocus}>
						{ID_TYPE_OPTIONS.map((item, key) => (
							<option key={key} value={item.value}>
								{item.text}
							</option>
						))}
					</select>
					<p className="error">{errors[paymentCreditCardFields.TYPE_ID]?.message}</p>
				</div>
				<div className="input-group flex-2">
					<label>id</label>
					<Controller
						name={paymentCreditCardFields.NUMBER_ID}
						control={control}
						onFocus={handleInputFocus}
						render={({ field }) => <input {...field} className="input" type="text" maxLength="12" onFocus={handleInputFocus} />}
					/>
					<p className="error">{errors[paymentCreditCardFields.NUMBER_ID]?.message}</p>
				</div>
			</div>
			<button type="submit" className="continue-button">
				Continue
			</button>
		</form>
	);
};

export default FormPayCredit;
