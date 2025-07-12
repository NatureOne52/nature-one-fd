"use client";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const lovedItems = useLovedProducts((state) => state.lovedItems);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur bg-background border-b border-border"
      aria-label="Barra de navegación principal"
    >
      <nav
        className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl"
        aria-label="Navegación principal"
        role="navigation"
      >
        {/* Logo y marca */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => router.push("/")}
          aria-label="Ir al inicio"
        >
          <Image
            src="/favicon.ico"
            alt="Rumaya Café icon"
            width={32}
            height={32}
            className="w-10 h-10"
            priority
          />
          <span className="text-3xl font-bold text-primary">
            Rumaya <span className="font-bold">Café</span>
          </span>
        </div>
        {/* Menú principal */}
        <div className="items-center justify-between hidden sm:flex">
          <MenuList />
        </div>
        {/* Menú móvil */}
        <div className="flex sm:hidden">
          <ItemsMenuMobile />
        </div>
        {/* Iconos de acciones */}
        <div className="flex items-center gap-2 sm:gap-7">
          <button
            type="button"
            aria-label="Carrito"
            className="flex items-center gap-1 text-[var(--primary-foreground)]"
            onClick={() => router.push("/cart")}
            style={{ background: "none", border: "none" }}
          >
            {cart.items.length === 0 ? (
              <ShoppingCart strokeWidth={1} />
            ) : (
              <>
                <BaggageClaim strokeWidth={1} />
                <span>{cart.items.length}</span>
              </>
            )}
          </button>
          <button
            type="button"
            aria-label="Favoritos"
            className={`text-[var(--primary-foreground)] ${lovedItems.length > 0 ? "fill-[var(--primary-foreground)]" : ""}`}
            onClick={() => router.push("/loved-products")}
            style={{ background: "none", border: "none" }}
          >
            <Heart strokeWidth={1} />
          </button>
          <button
            type="button"
            aria-label="Cuenta"
            className="text-[var(--primary-foreground)]"
            onClick={() => router.push("/cuenta")}
            style={{ background: "none", border: "none" }}
          >
            <User strokeWidth={1} />
          </button>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;