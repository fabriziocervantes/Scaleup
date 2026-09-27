# Scale Up Digital — Landing page

Landing de una sola página para Scale Up Digital. Sitio estático (HTML, CSS y JavaScript sin librerías) listo para publicar en Netlify.

## Estructura

- `index.html` — contenido de la página (todas las secciones)
- `aviso-de-privacidad.html` — aviso de privacidad
- `styles.css` — estilos (colores de marca en variables al inicio)
- `main.js` — menú móvil, pestañas de proyectos, preguntas frecuentes, formulario a WhatsApp y animación al hacer scroll
- `assets/` — logo y capturas optimizadas (WebP)
- `favicon.svg`, `apple-touch-icon.png`, `og-image.png` — íconos e imagen para compartir en redes
- `netlify.toml` — configuración de publicación

## Ver en local

```bash
npx serve .
```

## Publicar en Netlify

Conecta este repositorio en Netlify. No necesita comando de build; la carpeta a publicar es la raíz (`.`).
Cuando tengas el dominio propio, cambia `og:image` en `index.html` a la URL completa (por ejemplo `https://tudominio.com/og-image.png`).

## Pendientes

Los datos que faltan están marcados en la página con etiquetas punteadas (`[PENDIENTE]`, `[CONFIRMAR]`):

- Resultados de campañas en la pestaña "Redes y contenido" (solo si hay datos reales)
- Testimonios reales: los tres actuales son de muestra y deben reemplazarse antes de publicar
- Respuestas pendientes en preguntas frecuentes (tiempos, formas de pago, presupuesto de anuncios)
- Aviso de privacidad (`aviso-de-privacidad.html`): falta confirmar si habrá envíos promocionales. Conviene que lo revise un abogado antes de publicar
- Versión horizontal del logo para el encabezado (hoy se usa la versión apilada)
