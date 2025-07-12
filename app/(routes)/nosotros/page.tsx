"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function NosotrosPage() {
  return (
    <main>
      <section
        className="max-w-5xl mx-auto px-4 py-12 space-y-10"
        aria-label="Acerca de Rumaya Café"
      >
        {/* Encabezado principal */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Nosotros</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Pasión por el café, amor por nuestra tierra
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            <span className="font-semibold text-primary">Rumaya Café</span> nace
            del corazón de Chiapas, inspirado en generaciones de caficultores que
            han cultivado con orgullo y respeto el alma de nuestras montañas.
            Somos una empresa familiar comprometida con la calidad, la
            sostenibilidad y el comercio justo. Desde el grano hasta tu taza,
            cuidamos cada paso para que vivas una experiencia sensorial
            inolvidable.
          </p>
        </header>

        {/* Tarjeta con misión / visión */}
        <article>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Nuestra misión</h2>
              <p>
                Compartir el auténtico sabor del café chiapaneco con el mundo,
                ofreciendo un producto tradicional, orgánico y familiar,
                cultivado bajo los más altos estándares de calidad e higiene.
              </p>
              <h2 className="text-2xl font-semibold">Nuestra visión</h2>
              <p>
                Ser un referente de café de especialidad que impulse a pequeños
                productores locales y promueva el consumo responsable y
                sostenible.
              </p>
            </CardContent>
          </Card>
        </article>

        {/* Por qué elegir Rumaya Café */}
        <article>
          <header>
            <h2 className="text-2xl font-bold">¿Por qué elegir Rumaya Café?</h2>
          </header>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Café 100% mexicano, cultivado en las montañas de Chiapas.</li>
            <li>Tradición familiar y procesos orgánicos certificados.</li>
            <li>Altos estándares de calidad e higiene en cada etapa.</li>
            <li>Respeto por la tierra y apoyo a pequeños productores.</li>
            <li>Comercio justo y compromiso con la sostenibilidad.</li>
            <li>
              Sabor auténtico y experiencia sensorial única en cada taza.
            </li>
          </ul>
        </article>

        {/* Valores */}
        <article>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Nuestros valores</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Calidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Seleccionamos los mejores granos y cuidamos cada proceso para
                    garantizar un café excepcional.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Tradición</h3>
                  <p className="text-sm text-muted-foreground">
                    Honramos el legado de familias caficultoras y mantenemos
                    prácticas ancestrales.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Sustentabilidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Protegemos el medio ambiente con métodos de cultivo
                    responsables y empaques biodegradables.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Comercio justo</h3>
                  <p className="text-sm text-muted-foreground">
                    Trabajamos directamente con productores, asegurando ingresos
                    justos y condiciones dignas de trabajo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </section>
    </main>
  );
}
