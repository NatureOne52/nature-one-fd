import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const BannerProduct = () => {
    return (
        <>
        <div className="mt-4 text-center">
            <p>Sumérgete en una experiencia única</p>
            <h4 className="mt-2 text-5xl font-extrabold uppercase text-primary">Productos Saludables</h4>
            <p className="my-2 text-lg">Siente el poder de lo puro</p>
            
            <Link
                href="#"
                className={cn(
                    buttonVariants({ variant: "default" }),
                    "rounded-3xl px-6 py-2"
                )}
            >
                Comprar
            </Link>
        </div>
        <div className="w-full h-[450px] mt-5 overflow-hidden">
            <div
                className="w-full h-full bg-[url('https://res.cloudinary.com/dge5fkefh/image/upload/v1752288350/pexels-ileana-ramona-nae-12897929-6332250_gment9.jpg')] bg-center bg-cover bg-no-repeat
                transition-transform duration-1200 delay-250 ease-in-out
                hover:scale-115 hover:rotate-[5deg]"
            />
        </div>
        </>
    );
};

export default BannerProduct;