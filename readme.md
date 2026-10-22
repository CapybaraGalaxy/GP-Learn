<p align="center">
  <img src="https://capsule-render.vercel.app/api?text=Hey Everyone!🕹️&animation=fadeIn&type=waving&color=gradient&height=100"/>
</p>

# GP Learn

**GP Learn** es una biblioteca digital personal para reunir en un mismo lugar libros, bibliotecas digitales, recursos educativos y otras herramientas útiles para estudiantes y lectores.

El proyecto está pensado para ser simple, rápido y completamente gestionable desde el navegador, sin necesidad de una cuenta ni de un servidor propio. La información personal de la biblioteca se guarda localmente en el dispositivo.

> Proyecto personal desarrollado por **Guilleplayer** / **CapybaraGalaxy**.

---

## 📋 Novedades de la versión 1.1

* El color de énfasis monocromático se puede usar junto con el tema oscuro.
* La aplicación ocupa toda la pantalla e incorpora una preferencia para abrir accesos en la pestaña actual o en una nueva.
* Búsqueda flotante con animaciones mejoradas y cierre mediante Escape.
* Creación de colecciones con selección de recursos, nombre y descripción; se guardan en Ajustes para compartirlas o descargarlas.
* Importación de colecciones mediante enlace, archivo JSON, texto pegado o portapapeles, con detección de copias de seguridad.
* Las colecciones recibidas se guardan en Ajustes y se pueden retirar al deshacer la importación.
* La versión actual y el historial de cambios se muestran en la aplicación.

## ✨ Características

### 📚 Biblioteca personal
* Añade accesos a libros, bibliotecas y recursos externos.
* Organiza los recursos mediante etiquetas.
* Añade descripciones, iconos y colores personalizados.
* Marca recursos como favoritos.
* Fija los recursos importantes para tenerlos siempre a mano.
* Elimina recursos sin perderlos inmediatamente gracias a la papelera.
* Recupera elementos eliminados durante un periodo de 30 días.

### 🔎 Búsqueda
* La biblioteca incluye una búsqueda integrada para encontrar rápidamente recursos por su información disponible.
* La búsqueda funciona directamente en el navegador y no necesita ningún servicio externo.
* La barra de búsqueda se despliega con una transición y permite cerrar la búsqueda con Escape.

### 🖼️ Distintos modos de visualización
La biblioteca puede visualizarse de varias formas:
* **Cuadrícula** — para una vista más visual.
* **Lista** — para consultar muchos recursos de forma compacta.
* **Compacta** — para aprovechar mejor el espacio disponible.

También se puede modificar la densidad general de la interfaz:
* Compacta
* Normal
* Cómoda

### 🎨 Personalización
GP Learn permite adaptar la interfaz a las preferencias de cada usuario:
* Modo oscuro.
* Modo claro.
* Diferentes colores de énfasis, incluido el monocromático, independiente del tema.
* Diferentes niveles de densidad.
* Apertura de los accesos en una pestaña nueva o en la pestaña actual.
* Preferencias guardadas automáticamente (se mantienen entre sesiones mediante `localStorage`).

### 🔗 Compartir recursos
Una de las funciones principales del proyecto es poder compartir accesos sin necesitar una base de datos.

Los datos del recurso se pueden codificar directamente dentro de la URL mediante un fragmento `#share=...`. Al abrir el enlace, GP Learn puede detectar los datos compartidos y permitir al usuario revisarlos antes de importarlos.

Esto permite compartir:
* Un recurso individual.
* Colecciones con nombre y descripción, seleccionando los recursos que se quieren incluir.
* Información básica como nombre, descripción, etiquetas, icono, color y URL.

Las colecciones creadas o recibidas se conservan en Ajustes para volver a compartirlas o descargarlas como JSON. También se pueden importar enlaces y JSON de colecciones desde un archivo, pegándolos o leyéndolos del portapapeles; las copias de seguridad se reconocen y se importan como ajustes.

El sistema funciona sin un servidor intermedio: la información viaja dentro del propio enlace.

### 📦 Importación y exportación
La configuración de la biblioteca puede exportarse e importarse para facilitar:
* Copias de seguridad.
* Migraciones entre dispositivos.
* Compartir una colección.
* Restaurar una biblioteca.

La aplicación incluye controles de **Exportar** e **Importar** dentro de los ajustes.

### 🗑️ Papelera
Los accesos eliminados no desaparecen inmediatamente. Se trasladan a una papelera temporal y pueden restaurarse durante 30 días antes de su eliminación definitiva. También existe la posibilidad de deshacer una eliminación inmediatamente después de realizarla.

### 🧰 Editor de presets
El proyecto incluye una herramienta independiente para gestionar los recursos incluidos como presets:

`Media/preset-editor.html`

El **Book Preset Editor** permite editar visualmente la colección de recursos predeterminados sin tener que modificar manualmente el código.

Entre sus funciones se incluyen:
* Añadir libros o recursos.
* Editar información existente.
* Eliminar elementos.
* Modificar nombre, URL y descripción.
* Añadir etiquetas.
* Configurar colores.
* Configurar logotipos.
* Previsualizar los resultados.
* Importar presets.
* Exportar los presets como `preset-books.js`.

Los presets también se guardan localmente en el navegador mientras se trabaja con el editor. Esto facilita mantener la colección inicial de GP Learn sin tener que editar manualmente grandes bloques de código.

### 💡 Sección de consejos
El proyecto también incluye una sección independiente de ayuda:

`Media/consejos.html`

Esta página reúne recomendaciones y pequeñas guías para sacar más partido a la biblioteca. Está integrada visualmente con GP Learn y comparte algunas preferencias con la aplicación principal, como el tema y el color de acento.

---

## 💾 Almacenamiento y privacidad

GP Learn funciona principalmente de forma local. Los datos creados por el usuario, como:
* recursos personalizados,
* favoritos,
* elementos fijados,
* preferencias,
* papelera,
* historial de recursos recibidos,

se almacenan en el navegador mediante `localStorage`. No existe una cuenta de usuario ni una base de datos propia para almacenar la biblioteca personal.

### Importante sobre los enlaces compartidos
Los enlaces compartidos mediante `#share=` contienen los datos necesarios para reconstruir los recursos compartidos. Por ello:
* **No incluyas información privada o sensible** dentro de los datos de un recurso compartido.
* Aunque no exista un servidor propio que almacene esos datos, cualquier persona que tenga el enlace puede acceder a la información que este contiene.

---

## 🛠️ Tecnologías utilizadas

GP Learn está construido principalmente con tecnologías web estándar:
* HTML5
* CSS3
* JavaScript
* `localStorage`
* Web APIs del navegador
* Lucide Icons
* Outfit (como tipografía principal)

La aplicación no necesita un framework frontend ni un backend para funcionar. El diseño está planteado para funcionar tanto en escritorio como en dispositivos móviles.

---

## 📁 Estructura del proyecto

```text
acceso-libros/
│
├── index.html
│
└── Media/
    ├── consejos.html
    └── preset-editor.html
```
​* **`index.html`**: Aplicación principal de GP Learn. Contiene la interfaz, estilos y lógica necesaria para gestionar la biblioteca.
* **`Media/preset-editor.html`**: Editor visual utilizado para crear y mantener los presets de recursos.
* **`Media/consejos.html`**: Página de consejos y documentación para los usuarios de la aplicación.

---

## 🚀 Uso

No es necesario instalar dependencias para utilizar GP Learn. Puedes abrir `index.html` directamente en un navegador compatible o servir el proyecto desde cualquier servidor web estático.

Al tratarse de una aplicación basada en tecnologías web estándar, también puede alojarse fácilmente en servicios como GitHub Pages.

---

## 🤖 Uso de inteligencia artificial

Durante el desarrollo de GP Learn se han utilizado herramientas de inteligencia artificial como apoyo para programación, diseño, generación de ideas, depuración y desarrollo de determinadas partes del proyecto.

La IA forma parte del proceso de desarrollo, pero el proyecto, su estructura, selección de funcionalidades, diseño final, configuración y decisiones de implementación han sido revisados y adaptados durante su desarrollo.

Este repositorio no pretende presentar el proyecto como si hubiera sido desarrollado íntegramente de forma manual sin asistencia de IA.

---

## 🖼️ Imágenes, logotipos y contenido de terceros

GP Learn utiliza algunos recursos visuales externos, incluyendo imágenes, logotipos, iconos o material asociado a servicios y marcas enlazados desde la aplicación.

* Estos materiales **no son propiedad del autor** de GP Learn.
* Los nombres comerciales, marcas, logotipos e imágenes pertenecen a sus respectivos propietarios. Su presencia dentro de la aplicación sirve únicamente para identificar los servicios o recursos externos a los que se enlaza.
* En particular, el hecho de que un servicio aparezca como recurso dentro de GP Learn **no implica afiliación, patrocinio, autorización ni relación oficial** con dicho servicio.
* Si algún propietario de contenido considera que un recurso utilizado en el proyecto no debería aparecer aquí, puede solicitar su revisión o retirada.

---

## ⚖️ Derechos y licencia

El código y los elementos originales desarrollados específicamente para este proyecto pertenecen a su autor, salvo que se indique expresamente lo contrario. Los recursos de terceros mantienen sus correspondientes derechos y condiciones de uso.

GP Learn no reclama la propiedad de las marcas, logotipos, imágenes o contenidos externos que aparecen asociados a los recursos enlazados.

Este repositorio **no incluye actualmente una licencia de software específica**. Por tanto, la publicación del código en GitHub no debe interpretarse automáticamente como una concesión de derechos para reutilizarlo, modificarlo o redistribuirlo. Si en el futuro se añade una licencia, esta sección deberá actualizarse para reflejarla.

---

## 🔐 Seguridad y limitaciones

GP Learn está diseñado como una herramienta personal para organizar accesos a recursos externos.
* **No controla** el contenido de las páginas a las que enlaza ni garantiza su disponibilidad, seguridad, legalidad o funcionamiento.
* Los enlaces y servicios externos pueden cambiar, desaparecer o modificar sus condiciones de uso independientemente de este proyecto.
* Por la misma razón, GP Learn debe considerarse una **interfaz de organización y acceso**, no una plataforma que aloje o distribuya los libros o contenidos externos mostrados en ella.

---

## 📌 Estado del proyecto

GP Learn es un proyecto en desarrollo. Las funciones pueden cambiar, mejorarse o sustituirse con el tiempo. Algunas partes están pensadas específicamente para uso personal y pueden no estar preparadas para escenarios de producción a gran escala.

---

## 👤 Autor

**Guilleplayer**  
GitHub: [@CapybaraGalaxy](https://github.com/CapybaraGalaxy)

---

## 📄 Nota final

GP Learn nace como un proyecto para hacer más cómodo el acceso a recursos digitales relacionados con lectura, educación y estudio, reuniéndolos en una interfaz sencilla y personalizable.

El objetivo no es sustituir los servicios enlazados, sino ofrecer un punto de acceso práctico para tenerlos organizados en un único lugar.
