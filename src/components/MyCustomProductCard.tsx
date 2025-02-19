import { Product, registry } from 'nav-sdk';

type Props = {
	data: Product;
}

export const Component = (props: Props) => {
	return (
		<div>
			<div>
				<b>{props.data.id}</b>
			</div>
			<div>
				{props.data.name}
			</div>
		</div>
	)
}

registry.register('product', "my-custom-product-card", Component);

export default Component;