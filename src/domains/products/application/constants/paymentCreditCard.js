export const paymentCreditCardFields = Object.freeze({
	NUMBER: 'number',
	EXPIRY: 'expiry',
	CVC: 'cvc',
    NAME: 'cardName',
    TYPE_ID: 'typeId',
    NUMBER_ID: 'numerId',
    PAYMENT_ID: 'paymentId'
});

export const ID_TYPE_OPTIONS = [
    {
        value: "cc",
        text: "C.C."
    },
    {
        value: "ce",
        text: "C.E."
    },
    {
        value: "nit",
        text: "NIT"
    },
    {
        value: "other",
        text: "OTHER"
    }
    
]