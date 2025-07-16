"use client";

import { useState, useEffect } from "react";

const heroSlides = [
	{
		image: "https://res.cloudinary.com/dge5fkefh/image/upload/v1752288350/pexels-roberto-cervantes-425704-2262812_mid10x.jpg",
		title: "Descubre el sabor auténtico",
		subtitle: "Café artesanal, recién tostado para ti.",
	},
	{
		image: "https://res.cloudinary.com/dge5fkefh/image/upload/v1752288350/pexels-ignacio-vazquez-434388493-30444141_lcae3m.jpg",
		title: "Promoción especial",
		subtitle: "2x1 en espresso todo el mes.",
	},
	{
		image: "https://res.cloudinary.com/dge5fkefh/image/upload/v1752288351/pexels-naderaymanphotography-19286175_r3ksqa.jpg",
		title: "Envío gratis",
		subtitle: "En pedidos superiores a $600.",
	},
];

const HeroSection = () => {
	const [active, setActive] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev + 1) % heroSlides.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			className="relative w-full h-[60vh] sm:h-[80vh] lg:h-[720px] overflow-hidden"
			aria-label="Hero principal"
		>
			{heroSlides.map((slide, idx) => (
				<article
					key={idx}
					className={`absolute inset-0 transition-opacity duration-700 ${
						active === idx ? "opacity-100 z-10" : "opacity-0 z-0"
					}`}
					aria-hidden={active !== idx}
					tabIndex={active === idx ? 0 : -1}
				>
					<div
						className="w-full h-full flex group"
						role="img"
						aria-label={slide.title}
						style={{
							backgroundImage: `url(${slide.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className="w-full h-full flex flex-col justify-center items-center bg-black/40 group-hover:bg-black/60 transition-all duration-500">
							<h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg mb-2 text-center px-4">
								{slide.title}
							</h1>
							<h2 className="text-lg sm:text-2xl text-white/80 drop-shadow text-center px-4">
								{slide.subtitle}
							</h2>
						</div>
					</div>
				</article>
			))}
		</section>
	);
};

export default HeroSection;