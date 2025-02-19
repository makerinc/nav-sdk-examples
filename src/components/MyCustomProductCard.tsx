import { Product, registry } from 'nav-sdk';

type Props = {
	data: Product;
}

export const Component = (props: Props) => {
	return (
		<div>
			<b>Hello!!!!</b>
			<div>
				{props.data.name}
			</div>
		</div>
	)
}

registry.register('product', "my-custom-product-card", Component);

export default Component;