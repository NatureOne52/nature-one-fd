"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InfoPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
      {/* Texto de bienvenida y contacto */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Bienvenido a NatureOne</h1>
        <p className="text-muted-foreground text-lg">
          Somos una empresa dedicada a ofrecer productos 100% orgánicos, promoviendo el bienestar y el cuidado del medio ambiente. Nuestro compromiso es brindarte calidad, salud y confianza en cada producto que ofrecemos.
        </p>

        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Correo:</span> natureone52@gmail.com</p>
          <p><span className="font-medium">Teléfono:</span> 9612314567</p>
          <p><span className="font-medium">Encargado:</span> José Cruz (CEO)</p>
        </div>
      </div>

      {/* Formulario de mensaje */}
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold">Déjanos un mensaje</h2>
          <Input placeholder="Tu nombre" />
          <Input placeholder="Tu correo electrónico" />
          <Textarea placeholder="Escribe tu mensaje aquí..." rows={4} />
          <Button className="w-full">Enviar mensaje</Button>
        </CardContent>
      </Card>
    </section>
  );
}
