import React, { useEffect } from 'react';
import ImageProduct from '../../components/ImageProduct';
import InfoProduct from '../../components/InfoProduct';
import PaymentButton from '../../components/PaymentButton';
import './DetailProduct.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../application/slices/products';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getLoading, getProduct } from '../../../application/selectors/products';
import Spinner from '../../../../../shared/presentation/components/Spinner';
import PayCreditCard from '../../components/PayCreditCard';
import SummaryPayment from '../../components/SummaryPayment';

const DetailProduct = () => {
	const dispatch = useDispatch();
	const product = useSelector(getProduct);
	const loading = useSelector(getLoading);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getProductById(id));
	}, [id]);

	return (
		<section className="detail-product-container">
			{loading ? (
				<Spinner />
			) : (
				<>
					<ImageProduct url={product.image} />
					<InfoProduct title={product.title} description={product.description} price={product.price} />
					<PaymentButton productId={product.id} title={product.title} price={product.price} />
					<PayCreditCard />
					<SummaryPayment />
				</>
			)}
		</section>
	);
};

export default DetailProduct;
