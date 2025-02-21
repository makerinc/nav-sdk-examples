
import { Product, registry, Image } from 'nav-sdk';

type Props = {
	data: Product;
}

export const Component = (props: Props) => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
		}}>
			<div style={{
				position: 'relative',
				width: '100%',
				paddingBottom: '100%',
			}}>
				<Image src="https://placekitten.com/200/300" alt='Kitten' fit="cover" priority={0} />

			</div>
			<div>ID: <b>{props.data.id}</b></div>
			<div>
				Name: <b>{props.data.name}</b>
			</div>
		</div>
	)
}

registry.register('product', "my-custom-product-card", Component);

export default Component;