"use client";

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
	{
		id: 1,
		title: "Café recién tostado",
		description:
			"Disfruta el aroma y sabor de nuestro café recién tostado cada semana.",
		link: "#!",
	},
	{
		id: 2,
		title: "Promoción 2x1 en espresso",
		description: "Llévate dos espressos por el precio de uno. Solo este mes.",
		link: "#!",
	},
	{
		id: 3,
		title: "Envío gratis en pedidos de café",
		description:
			"Haz tu pedido de café y recibe envío gratis en compras superiores a 30€.",
		link: "#!",
	},
	{
		id: 4,
		title: "Descuento en café orgánico",
		description:
			"Obtén un 15% de descuento en nuestra línea de café orgánico.",
		link: "#!",
	},
	{
		id: 5,
		title: "Regalo sorpresa en tu primera compra",
		description: "Recibe un regalo especial en tu primer pedido de café.",
		link: "#!",
	},
];

const CarouselTextBanner = () => {
	const router = useRouter();
	return (
		<section
			aria-label="Promociones de café"
			className="w-full"
			style={{
				background: "var(--primary-foreground)",
			}}
		>
			<Carousel
				className="w-full max-w-4xl mx-auto"
				plugins={[
					Autoplay({
						delay: 2500,
					}),
				]}
			>
				<CarouselContent>
					{dataCarouselTop.map(({ id, title, description, link }) => (
						<CarouselItem
							key={id}
							onClick={() => router.push(link)}
							className="cursor-pointer"
							aria-label={title}
						>
							<Card className="border-none shadow-none bg-transparent">
								<CardContent className="flex flex-col justify-center p-1 items-center text-center">
									<h2
										className="sm:text-lg font-bold text-wrap"
										style={{ color: "var(--background)" }}
										tabIndex={0}
									>
										{title}
									</h2>
									<p
										className="text-xs sm:text-sm text-wrap"
										style={{ color: "var(--muted)" }}
										tabIndex={0}
									>
										{description}
									</p>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};

export default CarouselTextBanner;