FROM node:20-alpine

WORKDIR /app

# Copy manifests + the local tarball dependency
COPY package.json package-lock.json ./
COPY evil-lib-1.0.0.tgz ./

# Install without running lifecycle scripts
RUN npm ci --ignore-scripts

# Copy app source
COPY index.js ./

EXPOSE 3000
CMD ["node", "index.js"]
