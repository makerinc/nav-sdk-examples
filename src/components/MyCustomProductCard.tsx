import React from '@makerinc/nav-sdk/react';
import { Product, registry, Image } from '@makerinc/nav-sdk';

type Props = {
	data: Product;
}

export const Component = (props: Props) => {
	let [hovering, setHovering] = React.useState(false);

	return (
		<div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
			<div style={{
				position: 'relative',
				aspectRatio: '3/4',
				width: '100%',
			}}>
				<Image src={props.data.variants[0].imageLink} alt={props.data.title} fit="cover" priority={1} />
				<div style={{
					opacity: hovering ? 1 : 0,
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: "#fff"
				}}>
					<Image src={props.data.variants[0].additionalImageLinks[0]} alt={props.data.title} fit="cover" priority={1} />
				</div>
			</div>
			<div>
				{props.data.title}
			</div>
		</div>
	)
}

registry.register('product-card', "my-custom-product-card", Component);

export default Component;