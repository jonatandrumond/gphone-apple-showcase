# Instruções para Adicionar Imagem do iPhone 17 Pro Max

## Passo a Passo

1. **Obtenha uma imagem original do iPhone 17 Pro Max**
   - Use uma imagem de alta qualidade (recomendado: mínimo 800x800px)
   - Formato: JPG ou PNG
   - A imagem deve mostrar o iPhone 17 Pro Max de forma clara e profissional

2. **Salve a imagem na pasta assets**
   - Nome do arquivo: `iphone-17-pro-max.jpg`
   - Localização: `src/assets/iphone-17-pro-max.jpg`

3. **Atualize o código**
   - Abra o arquivo `src/pages/Index.tsx`
   - Descomente a linha: `import iphoneImage from "@/assets/iphone-17-pro-max.jpg";`
   - Comente ou remova a linha: `import iphoneImageFallback from "@/assets/iphone-category.jpg";`
   - Remova ou comente a linha: `const iphoneImage = iphoneImageFallback;`

## Exemplo de Código Final

```typescript
// Importar imagem do iPhone 17 Pro Max
import iphoneImage from "@/assets/iphone-17-pro-max.jpg";
// import iphoneImageFallback from "@/assets/iphone-category.jpg"; // Remover esta linha
// const iphoneImage = iphoneImageFallback; // Remover esta linha
```

## Onde Encontrar Imagens

- Site oficial da Apple
- Banco de imagens como Unsplash, Pexels (busque por "iPhone 17 Pro Max")
- Fotos próprias do produto

