import React from '@makerinc/nav-sdk/react';
import { Product, registry, Image } from '@makerinc/nav-sdk';

type Props = {
	data: Product;
}

export const Component = (props: Props) => {
	let [state, setState] = React.useState(0);

	const handleClick = () => {
		setState(state + 1);
	};

	return (
		<div>
			<div style={{
				position: 'relative',
				aspectRatio: '3/4',
				width: '100%',
			}}>
				<Image src={props.data.variants[0].imageLink} alt={props.data.title} fit="cover" priority={1} />
			</div>
			<div>
				{props.data.title}
			</div>
			<button onClick={handleClick}>Clicked {state} times</button>
		</div>
	)
}

registry.register('product', "my-custom-product-card", Component);

export default Component;