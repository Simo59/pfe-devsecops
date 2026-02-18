# ---- build stage ----
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
COPY evil-lib-1.0.0.tgz ./

# install without scripts
RUN npm ci --ignore-scripts

COPY index.js ./

# ---- runtime stage ----
FROM node:20-alpine AS runtime
WORKDIR /app

# copy only what is needed at runtime
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/index.js ./index.js

# runtime hardening: remove npm/npx to avoid shipping tooling deps
RUN rm -rf /usr/local/lib/node_modules/npm \
    && rm -f /usr/local/bin/npm /usr/local/bin/npx

EXPOSE 3000
CMD ["node", "index.js"]
