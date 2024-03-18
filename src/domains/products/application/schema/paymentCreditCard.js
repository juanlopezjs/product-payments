import * as yup from 'yup';
import { paymentCreditCardFields } from '../constants/paymentCreditCard';

const paymentCreditCardValidation = {
	[paymentCreditCardFields.NUMBER]: yup.string().required(),
	[paymentCreditCardFields.NAME]: yup.string().required(),
	[paymentCreditCardFields.EXPIRY]: yup.string().required(),
	[paymentCreditCardFields.CVC]: yup.string().required(),
	[paymentCreditCardFields.TYPE_ID]: yup.string().required(),
	[paymentCreditCardFields.NUMBER_ID]: yup.string().required(),
};

export const paymentCreditCardSchema = yup.object().shape(paymentCreditCardValidation);


