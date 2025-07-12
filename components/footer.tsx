import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
    { id: 1, name: "Sobre nosotros", link: "/about" },
    { id: 2, name: "Productos", link: "/about" },
    { id: 3, name: "Mi cuenta", link: "/about" },
    { id: 4, name: "Política de privacidad", link: "/about" }
];

const Footer = () => (
    <footer className="mt-4" aria-label="Pie de página">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <p>
                    <strong className="font-bold">Rumaya Café</strong>
                </p>
                <nav aria-label="Enlaces del pie de página">
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map(({ id, name, link }) => (
                            <li key={id}>
                                <Link href={link} className="hover:underline me-4 md:me-6">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-6" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; {new Date().getFullYear()}{" "}
                <Link href="/" className="footer-brand-link" aria-label="Ir a inicio">
                    <span className="font-bold footer-brand-text">Rumaya Café</span>
                </Link>{" "}
                Todos los derechos reservados.
            </span>
            <div className="w-full flex justify-end">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    Design &amp; Development by{" "}
                    <span className="team3-brand">Team 3</span>
                </span>
            </div>
        </div>
    </footer>
);

export default Footer;