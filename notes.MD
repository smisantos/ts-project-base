SETUP LAB
- git init
- yarn init -y
-  add typescript (dev)
-  yarn tsc init (para criar o tsconfig.json)
- criar src - server.ts
- add express (@types/express no dev)
- criar rota default
- instalar ts-node-dev (em dev)
- adicionar script no package.json
    * "dev:server": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules src/index.ts"
- mudar a rota para colocar em build
