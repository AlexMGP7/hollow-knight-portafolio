# 1. Imagen base oficial de Bun
FROM oven/bun:latest

# 2. Crea un directorio de trabajo
WORKDIR /app

# 3. Copia el package.json, bun.lockb y otros archivos necesarios
COPY package.json bun.lockb tsconfig.json vite.config.ts ./

# 4. Instala las dependencias con Bun
RUN bun install

# 5. Copia el resto del código
COPY . .

# 6. Expone el puerto que usa Vite (por defecto 5173)
EXPOSE 5173

# 7. Comando para iniciar el servidor de desarrollo
CMD ["bun", "run", "dev", "--host", "0.0.0.0"]
