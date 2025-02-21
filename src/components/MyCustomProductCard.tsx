// import { useState } from 'react';
import { Product, registry } from 'nav-sdk';

type Props = {
	data: Product;
}

export const Component = (props: Props) => {
	// let [count, setCount] = useState(0);
	return (
		<div>
			<div>ID: <b>{props.data.id}</b></div>
			<div>
				Name: <b>{props.data.name}</b>
			</div>
			{/* <div>
				<button onClick={() => setCount(count + 1)}>
					Clicked {count} times
				</button>
			</div> */}
		</div>
	)
}

registry.register('product', "my-custom-product-card", Component);

export default Component;