import { registry, Product } from 'nav-sdk'
import React from 'nav-sdk/react'

type Props = { data: Product }

const ProductCard = (props: Props) => {
	return (
		<div style={{
			width: '360px',
			borderRadius: '8px',
			backgroundColor: '#fff',
			padding: '16px',
			fontFamily: 'Inter, sans-serif'
		}}>
			<div style={{
				position: 'relative'
			}}>
				<img
					src="https://res.cloudinary.com/makerinc/image/fetch/c_limit,w_1200,f_auto,q_auto:best,fl_preserve_transparency,dpr_2/https%3A%2F%2Fmaker-devi-dev.s3-accelerate.amazonaws.com%2Fuploads%2Fuser_2sZ8dyEdMxDKw8LX1Mlgz1dOsXn%2Fcm7flm5yr004tstfbc3s9hcmo%2Fmessages%2F1740192385210-6hy58p.webp"
					style={{
						width: '100%',
						height: 'auto',
						borderRadius: '4px'
					}}
				/>
				<button style={{
					position: 'absolute',
					top: '12px',
					right: '12px',
					backgroundColor: '#fff',
					borderRadius: '50%',
					width: '32px',
					height: '32px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					border: 'none',
					cursor: 'pointer'
				}}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2" />
					</svg>
				</button>
			</div>

			<div style={{
				display: 'flex',
				gap: '8px',
				marginTop: '12px'
			}}>
				<span style={{
					backgroundColor: '#FFF4F4',
					color: '#333',
					padding: '4px 8px',
					borderRadius: '4px',
					fontSize: '12px'
				}}>
					Customisable
				</span>
				<span style={{
					backgroundColor: '#FFE4E4',
					color: '#333',
					padding: '4px 8px',
					borderRadius: '4px',
					fontSize: '12px'
				}}>
					New
				</span>
			</div>

			<h3 style={{
				fontSize: '16px',
				fontWeight: 500,
				marginTop: '12px',
				color: '#111'
			}}>
				{props.data.name}
			</h3>

			<div style={{
				marginTop: '8px'
			}}>
				<span style={{
					fontSize: '16px',
					fontWeight: 600,
					color: '#111'
				}}>
					₹4,990
				</span>
			</div>

			<div style={{
				marginTop: '4px',
				fontSize: '14px',
				color: '#B87B0E',
				display: 'flex',
				alignItems: 'center',
				gap: '4px'
			}}>
				<span>Member Price ₹4,491</span>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M9 18l6-6-6-6" strokeWidth="2" />
				</svg>
			</div>
		</div>
	)
}

registry.register('product', "my-custom-product-card", ProductCard)

export default ProductCard