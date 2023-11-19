<p align="center">
    <img src="./public/logo.png" width=250>
    <p align="center">Creadores de impacto para tu marca</p>
</p>

## Desarrollo

Si quieres contribuir con Linkfluence (y deberías hacerlo), continúa leyendo.

Necesitarás NodeJS 🔞 (+18) y algún editor de código.

```sh
# Clonar el repositorio
git clone https://github.com/damarizz/linkfluence.git

# Entrar a la carpeta
cd linkfluence

# Instalar las dependencias
npm install
```

Para empezar a desarrollar, en la raíz del proyecto, correr:

```sh
npm run dev
```

El entorno de desarrollo se levantará automáticamente (por defecto en <http://localhost:5173/>) para
que empieces a contribuir con Linkfluence.

## Estructura del proyecto

```py
├── src
│   ├── css
│   └── js
├── public
│   └── logo.png
│
├── checkout
│   └── index.html
├── influencers
│   └── index.html
├── profile
│   └── index.html
├── index.html
│
├── README.md
├── package.json
├── package-lock.json
└── vite.config.js
```

### Importar scripts

Imagina que estás en `src/js/main.js` y quieres importar un script en
`src/js/utilities/utility.js`. Puedes hacerlo de dos formas:

```js
// Desde la raíz del proyecto
import { someUtility } from '/src/js/utilities/utility'

// Relativamente
import { someUtility } from './utilities/utility'
```

### Importando estilos

En vite los archivos .css se importan [dentro de JavaScript](https://vitejs.dev/guide/features.html#css).
 Esto permite la actualización en tiempo real a medida
que vas editando código
([HMR: Hot Module Replacement](https://vitejs.dev/guide/features#hot-module-replacement)).

```js
import 'src/css/some-style.css'
```

### Usando imágenes, fuentes, etc (contenido estático)

Todos los archivos estáticos que no necesiten de pre-procesamiento van en
`public/`. Si tienes una imágen en `public/logo.png`, simplemente refiérte
a ella como:

```html
<img src="/logo.png" />
```

También puedes
["importar" archivos estáticos](https://vitejs.dev/guide/assets.html#importing-asset-as-url)
dentro de JavaScript.
Esto te dará una ruta (string) que puedes usar como url.

```js
import imgUrl from './img.png'

document.getElementById('hero-img').src = imgUrl
```
