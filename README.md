# FreeBritney

**FreeBritney** es una aplicación web interactiva, producto de un proyecto universitario de un amigo, que tiene como objetivo proporcionar una forma divertida y educativa de explorar la lucha por la libertad de Britney Spears. A través de una serie de desafíos o "retos", los usuarios avanzan y aprenden sobre la causa de Britney en un formato lúdico.

### **Tecnologías utilizadas**

Este proyecto está desarrollado con las siguientes tecnologías:

- **React** con **TypeScript**
- **Sass (SCSS)**
- **Vite**
- **LocalStorage**: Para almacenar la información del progreso del usuario de forma persistente a través de sesiones.

### **Instalación**

Para ejecutar este proyecto localmente en tu máquina, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/TonyHermann/FreeBritney.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd FreeBritney
    ```

3. Instala las dependencias necesarias:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

### **Uso**

1. Al iniciar la aplicación, verás un botón que dice **#FreeBritney**. Al hacer clic en él, se generará un reto aleatorio.
2. Tras completar un reto, debes clickear en "Completado!".
3. Los **retos completados** se guardan en el `localStorage` de tu navegador, por lo que puedes seguir desde donde lo dejaste.
4. Si no hay más retos disponibles, la aplicación te permitirá reiniciar el juego.

### **Despliegue en GitHub Pages**

Este proyecto está desplegado en GitHub Pages. Si deseas ver el proyecto en acción, puedes acceder a la siguiente URL:

[https://tonyhermann.github.io/FreeBritney/dist/index.html](https://tonyhermann.github.io/FreeBritney/dist/index.html)
