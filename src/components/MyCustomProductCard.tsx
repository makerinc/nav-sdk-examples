import { registry, Product } from '@makerinc/nav-sdk'

type Props = { data: Product }

const MyCustomProductCard = (props: Props) => {
	return (
		<div style={{
			width: '100%',
			maxWidth: '400px',
			padding: '20px',
			fontFamily: 'Inter, sans-serif'
		}}>
			<div style={{
				position: 'relative'
			}}>
				<img
					src="https://res.cloudinary.com/makerinc/image/fetch/c_limit,w_1200,f_auto,q_auto:best,fl_preserve_transparency,dpr_2/https%3A%2F%2Fmaker-devi-dev.s3-accelerate.amazonaws.com%2Fuploads%2Fuser_2sZ8dyEdMxDKw8LX1Mlgz1dOsXn%2Fcm7fkch9l004gstfb47hgehfb%2Fmessages%2F1740190253681-ku9uzi.png"
					style={{
						width: '100%',
						height: 'auto',
						borderRadius: '8px'
					}}
					alt="Product"
				/>
				<button style={{
					position: 'absolute',
					top: '10px',
					right: '10px',
					background: 'white',
					border: 'none',
					borderRadius: '50%',
					width: '36px',
					height: '36px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer'
				}}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="black" strokeWidth="2" />
					</svg>
				</button>
			</div>

			<div style={{
				display: 'flex',
				gap: '8px',
				marginTop: '12px'
			}}>
				<span style={{
					background: '#FFF4F4',
					color: '#333',
					padding: '4px 12px',
					borderRadius: '4px',
					fontSize: '14px'
				}}>
					Customisable
				</span>
				<span style={{
					background: '#FFE8E8',
					color: '#FF4444',
					padding: '4px 12px',
					borderRadius: '4px',
					fontSize: '14px'
				}}>
					New
				</span>
			</div>

			<h3 style={{
				fontSize: '16px',
				fontWeight: '500',
				margin: '12px 0'
			}}>
				{props.data.name}
			</h3>

			<div style={{
				fontSize: '18px',
				fontWeight: '600',
				marginBottom: '8px'
			}}>
				₹4,990
			</div>

			<div style={{
				color: '#996515',
				fontSize: '14px',
				display: 'flex',
				alignItems: 'center',
				gap: '4px'
			}}>
				Member Price ₹4,491
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M9 18l6-6-6-6" />
				</svg>
			</div>
		</div>
	)
}

registry.register('product', "my-custom-product-card", MyCustomProductCard)

export default MyCustomProductCard