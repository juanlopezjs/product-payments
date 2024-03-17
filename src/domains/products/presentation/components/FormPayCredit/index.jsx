import React from 'react';
import { useForm, Controller } from 'react-hook-form';
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
	setLoader,
} from '../../../application/slices/products';
import { gePayment } from '../../../application/selectors/products';
import { v4 as uuidv4 } from 'uuid';

const FormPayCredit = () => {
	const dispatch = useDispatch();
	const payment = useSelector(gePayment);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isDirty, isValid },
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
		dispatch(setLoader(true));
		setTimeout(() => {
			dispatch(setLoader(false));
			dispatch(setPayment({ paymentId: uuidv4(), ...values }));
			dispatch(setShowModalCredit(false));
			dispatch(setShowModalSummary(true));
		}, 1000);
	};

	return (
		<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
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
						name={paymentCreditCardFields.ID}
						control={control}
						onFocus={handleInputFocus}
						render={({ field }) => <input {...field} className="input" type="number" onFocus={handleInputFocus} />}
					/>
					<p className="error">{errors[paymentCreditCardFields.ID]?.message}</p>
				</div>
			</div>
			<button type="submit" className="continue-button">
				Continue
			</button>
		</form>
	);
};

export default FormPayCredit;
