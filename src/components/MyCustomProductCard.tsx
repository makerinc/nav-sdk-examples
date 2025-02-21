

import { Product, registry } from 'nav-sdk';

type Props = {
	data: Product;
}

const ProductCard = (props: Props) => {
	return (
		<div style={{
			border: '1px solid #e1e1e1',
			borderRadius: '8px',
			padding: '16px',
			maxWidth: '300px',
			width: '100%',
			boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
			backgroundColor: 'white',
			margin: '20px',
			transition: 'transform 0.2s ease',
			cursor: 'pointer',
		}}>
			<div style={{
				width: '100%',
				paddingTop: '75%',
				position: 'relative',
				overflow: 'hidden',
				borderRadius: '4px',
			}}>
				<img
					src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
					alt="Premium Headphones"
					style={{
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</div>

			<div style={{
				marginTop: '16px',
			}}>
				<h2 style={{
					fontSize: '1.25rem',
					fontWeight: '600',
					color: '#333',
					marginBottom: '8px',
				}}>
					{props.data.name}
				</h2>

				<p style={{
					fontSize: '0.875rem',
					color: '#666',
					marginBottom: '16px',
					lineHeight: '1.5',
				}}>
					{props.data.description}</p>

				<div style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
					<span style={{
						fontSize: '1.25rem',
						fontWeight: '700',
						color: '#2c5282',
					}}>
						$299.99
					</span>

					<button style={{
						backgroundColor: '#2c5282',
						color: 'white',
						padding: '8px 16px',
						borderRadius: '4px',
						border: 'none',
						cursor: 'pointer',
						fontSize: '0.875rem',
						fontWeight: '500',
						transition: 'background-color 0.2s ease',
					}}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

registry.register('product', "my-custom-product-card", ProductCard);

export default ProductCard;