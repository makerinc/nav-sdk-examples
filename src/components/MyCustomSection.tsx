import { registry, Link } from '@makerinc/nav-sdk'

type item = {
	tag: string,
	title: string,
	image: string,
	specialTag?: string
}

const HeroSection = () => {
	const gridItems: item[] = [
		{
			tag: "Flash deals",
			title: "Dog toys",
			image: "https://res.cloudinary.com/makerinc/image/fetch/c_limit,w_1200,f_auto,q_auto:best,fl_preserve_transparency,dpr_2/https%3A%2F%2Fmaker-devi-dev.s3-accelerate.amazonaws.com%2Fuploads%2Fuser_2sZ8dyEdMxDKw8LX1Mlgz1dOsXn%2Fcm7fqly900064stfbbcycxx41%2Fmessages%2F1740200773294-5qgk7j.png"
		},
		{
			tag: "New in",
			title: "Cameras",
			image: "https://res.cloudinary.com/makerinc/image/fetch/c_limit,w_1200,f_auto,q_auto:best,fl_preserve_transparency,dpr_2/https%3A%2F%2Fmaker-devi-dev.s3-accelerate.amazonaws.com%2Fuploads%2Fuser_2sZ8dyEdMxDKw8LX1Mlgz1dOsXn%2Fcm7fqly900064stfbbcycxx41%2Fmessages%2F1740200773293-oqcxs8.png"
		},
		{
			tag: "Ready to wear",
			title: "What's trending",
			image: "https://res.cloudinary.com/makerinc/image/fetch/c_limit,w_1200,f_auto,q_auto:best,fl_preserve_transparency,dpr_2/https%3A%2F%2Fmaker-devi-dev.s3-accelerate.amazonaws.com%2Fuploads%2Fuser_2sZ8dyEdMxDKw8LX1Mlgz1dOsXn%2Fcm7fqly900064stfbbcycxx41%2Fmessages%2F1740200773294-a4r0pd.webp",
			specialTag: "SHOP THE LOOK"
		},
		{
			tag: "New in",
			title: "Headphones",
			image: "https://res.cloudinary.com/makerinc/image/fetch/c_limit,w_1200,f_auto,q_auto:best,fl_preserve_transparency,dpr_2/https%3A%2F%2Fmaker-devi-dev.s3-accelerate.amazonaws.com%2Fuploads%2Fuser_2sZ8dyEdMxDKw8LX1Mlgz1dOsXn%2Fcm7fqly900064stfbbcycxx41%2Fmessages%2F1740200773294-x7m49p.webp"
		},
		{
			tag: "Bestsellers",
			title: "Home Decor",
			image: "https://res.cloudinary.com/makerinc/image/fetch/c_limit,w_1200,f_auto,q_auto:best,fl_preserve_transparency,dpr_2/https%3A%2F%2Fmaker-devi-dev.s3-accelerate.amazonaws.com%2Fuploads%2Fuser_2sZ8dyEdMxDKw8LX1Mlgz1dOsXn%2Fcm7fqly900064stfbbcycxx41%2Fmessages%2F1740200773294-7djr6.png"
		}
	]

	const GridItem = ({ item }: { item: item }) => (
		<div style={{
			position: 'relative',
			borderRadius: '12px',
			overflow: 'hidden',
			height: '100%'
		}}>
			<img
				src={item.image}
				alt={item.title}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover'
				}}
			/>
			<div style={{
				position: 'absolute',
				bottom: '20px',
				left: '20px',
				color: 'white'
			}}>
				<div style={{
					fontSize: '14px',
					marginBottom: '4px'
				}}>
					{item.tag}
				</div>
				<div style={{
					fontSize: '24px',
					fontWeight: '600',
					marginBottom: '12px'
				}}>
					{item.title}
				</div>
				<div style={{
					display: 'flex',
					gap: '8px',
					alignItems: 'center'
				}}>
					<Link target="category" categoryId='lia3UFlCDu' style={{
						backgroundColor: '#F8E469',
						color: 'black',
						padding: '8px 16px',
						borderRadius: '20px',
						fontSize: '14px',
						fontWeight: '500',
						textDecoration: 'none',
						display: 'inline-block',
					}}>
						Shop now
					</Link>
					<Link target="_blank" href="https://example.com/products/premium-cotton-tshirt?variant=V12345" style={{
						color: 'white',
						fontSize: '14px',
						fontWeight: '500',
						textDecoration: 'underline',
						display: 'inline-block',
					}}>Learn More</Link>
				</div>
			</div>
			{item.specialTag && (
				<div style={{
					position: 'absolute',
					top: '20px',
					right: '20px',
					backgroundColor: '#D1E9DB',
					padding: '6px 12px',
					borderRadius: '16px',
					color: 'black',
					fontSize: '12px',
					fontWeight: '500'
				}}>
					{item.specialTag}
				</div>
			)}
		</div>
	)

	return (
		<div style={{
			padding: '32px',
			maxWidth: '1200px',
			margin: '0 auto'
		}}>
			<div style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(6, 1fr)',
				gap: '16px',
				gridAutoRows: '280px'
			}}>
				<div style={{ gridColumn: 'span 2' }}>
					<GridItem item={gridItems[0]} />
				</div>
				<div style={{ gridColumn: 'span 2' }}>
					<GridItem item={gridItems[1]} />
				</div>
				<div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
					<GridItem item={gridItems[2]} />
				</div>
				<div style={{ gridColumn: 'span 3' }}>
					<GridItem item={gridItems[3]} />
				</div>
				<div style={{ gridColumn: 'span 3' }}>
					<GridItem item={gridItems[4]} />
				</div>
			</div>
		</div>
	)
}

registry.register('banners-section', "my-custom-banner-section", HeroSection)

export default HeroSection