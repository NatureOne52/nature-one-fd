"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactoPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const message = messageRef.current?.value.trim();
    if (!name || !email || !message)
      return alert("Por favor, completa todos los campos.");
    const phone = "5621443228";
    const encargado = "Víctor Rumaya";
    const text = `Hola, soy ${name} (${email}).\nQuiero contactar a ${encargado} por Rumaya Café.\nMensaje: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      <section
        className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8"
        aria-label="Contacto Rumaya Café"
      >
        {/* Información de contacto */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-primary">Contáctanos</h1>
          <p className="text-muted-foreground text-lg">
            En{" "}
            <span className="font-semibold text-primary">Rumaya Café</span> estamos
            para escucharte. Si tienes dudas, comentarios o quieres conocer más
            sobre nuestro café tradicional, orgánico y familiar, escríbenos. ¡Tu
            opinión nos ayuda a mejorar!
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-medium">Correo:</span>{" "}
              rumayacafe@gmail.com
            </p>
            <p>
              <span className="font-medium">Teléfono:</span> 5621443228
            </p>
            <p>
              <span className="font-medium">Encargado:</span> Víctor Rumaya (CEO)
            </p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form
          onSubmit={handleSubmit}
          role="form"
          aria-label="Formulario de contacto a WhatsApp"
          autoComplete="off"
        >
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">Déjanos un mensaje</h2>
              <Input ref={nameRef} placeholder="Tu nombre" required />
              <Input
                ref={emailRef}
                type="email"
                placeholder="Tu correo electrónico"
                required
              />
              <Textarea
                ref={messageRef}
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
                required
              />
              <Button className="w-full" type="submit">
                Enviar mensaje por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </form>
      </section>
    </main>
  );
}
