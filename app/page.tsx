import React, { Suspense } from "react";
import BannerDiscount from "@/components/banner-discount";
import CarouselTextBanner from "@/components/carousel-txt-banner";
const FeaturedProducts = React.lazy(() => import("@/components/featured-products"));
const ChooseCategory = React.lazy(() => import("@/components/choose-category"));
const BannerProduct = React.lazy(() => import("@/components/banner-product"));
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main aria-label="Página principal Rumaya Café">
      <HeroSection />
      <Suspense fallback={<div>Cargando productos destacados...</div>}>
        <FeaturedProducts />
      </Suspense>
      <BannerDiscount />
      <Suspense fallback={<div>Cargando categorías...</div>}>
        <ChooseCategory />
      </Suspense>
      <CarouselTextBanner />
      <Suspense fallback={<div>Cargando banner de productos...</div>}>
        <BannerProduct />
      </Suspense>
    </main>
  );
}
