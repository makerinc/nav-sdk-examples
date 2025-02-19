import { Product, registry } from 'nav-sdk';

type Props = {
	data: Product;
}

export const Component = (props: Props) => {
	return (
		<div>
			<b>Hey guys this really cool!!!!</b>
			<div>{props.data.id}</div>
			<div>
				{props.data.name}
			</div>
		</div>
	)
}

registry.register('product', "my-custom-product-card", Component);

export default Component;