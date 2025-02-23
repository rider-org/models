sed -i '' "/declare module 'zapatos\/schema' {/d" entities/schema.d.ts
sed -i '' -e '$d' entities/schema.d.ts
