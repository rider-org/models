sed -i '' '1s;^;/* eslint-disable */\n// @ts-nocheck\n;' entities/schema.d.ts
sed -i '' "/declare module 'zapatos\/schema' {/d" entities/schema.d.ts
sed -i '' -e '$d' entities/schema.d.ts
