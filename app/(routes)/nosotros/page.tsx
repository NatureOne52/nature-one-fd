"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function NosotrosPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* Encabezado principal */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">¿Quiénes somos?</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          En <span className="font-semibold">NatureOne</span> creemos en el poder de la naturaleza para nutrir y sanar. Somos una empresa comprometida con la salud, el medio ambiente y el consumo responsable.
        </p>
      </div>

      {/* Tarjeta con misión / visión */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Nuestra misión</h2>
          <p>
            Brindar productos orgánicos accesibles y de alta calidad, cultivados sin químicos, que respeten la tierra y el cuerpo de quienes los consumen.
          </p>
          <h2 className="text-2xl font-semibold">Nuestra visión</h2>
          <p>
            Ser líderes en el movimiento hacia un estilo de vida más saludable y sostenible, inspirando a comunidades a reconectar con lo natural.
          </p>
        </CardContent>
      </Card>

      {/* Por qué productos orgánicos */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">¿Por qué elegir productos orgánicos?</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>No contienen pesticidas ni fertilizantes sintéticos.</li>
          <li>Conservan mejor los nutrientes y sabores naturales.</li>
          <li>Respetan el ciclo natural del suelo y la biodiversidad.</li>
          <li>Reducen la huella ecológica y el daño ambiental.</li>
          <li>Apoyan a productores locales y prácticas sostenibles.</li>
        </ul>
      </div>

      {/* Valores */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Nuestros valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium">Transparencia</h3>
              <p className="text-sm text-muted-foreground">Te mostramos con claridad el origen y proceso de nuestros productos.</p>
            </div>
            <div>
              <h3 className="font-medium">Sustentabilidad</h3>
              <p className="text-sm text-muted-foreground">Cuidamos el medio ambiente desde la siembra hasta el empaque.</p>
            </div>
            <div>
              <h3 className="font-medium">Salud</h3>
              <p className="text-sm text-muted-foreground">Promovemos hábitos sanos desde una alimentación natural.</p>
            </div>
            <div>
              <h3 className="font-medium">Compromiso</h3>
              <p className="text-sm text-muted-foreground">Apoyamos a pequeños agricultores y trabajamos con ética.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
