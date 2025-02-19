import { Product, registry } from 'nav-sdk';

type Props = {
	data: Product;
}

export const Component = (props: Props) => {
	return (
		<div>
			<div>
				{props.data.name}
			</div>
			<div>
				{props.data.otherVariants[0].price}
			</div>
		</div>
	)
}

registry.register('product', "my-custom-product-card", Component);

export default Component;