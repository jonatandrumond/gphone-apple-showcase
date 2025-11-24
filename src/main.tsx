import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Adicionar tratamento de erros globais
window.addEventListener("error", (event) => {
  console.error("Erro global capturado:", event.error);
  
  // Detectar se é um erro de recurso (CSS/JS) não encontrado
  if (event.target && (event.target as HTMLElement).tagName) {
    const target = event.target as HTMLElement;
    if (target.tagName === "SCRIPT" || target.tagName === "LINK") {
      const resource = target.tagName === "SCRIPT" 
        ? (target as HTMLScriptElement).src 
        : (target as HTMLLinkElement).href;
      
      console.error(`Recurso não encontrado: ${resource}`);
      
      // Mostrar mensagem de erro no DOM
      const rootElement = document.getElementById("root");
      if (rootElement && !rootElement.querySelector(".resource-error")) {
        rootElement.innerHTML = `
          <div class="resource-error" style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; background: #f5f5f5;">
            <div style="text-align: center; max-width: 600px; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h1 style="color: #dc2626; margin-bottom: 1rem; font-size: 1.5rem;">⚠️ Erro ao carregar recursos</h1>
              <p style="color: #6b7280; margin-bottom: 1rem;">O site está tentando carregar arquivos antigos que não existem mais.</p>
              <p style="color: #9ca3af; font-size: 0.875rem; margin-bottom: 1.5rem;">Recurso não encontrado: <code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 4px;">${resource?.split('/').pop()}</code></p>
              <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin-bottom: 1rem; text-align: left;">
                <strong style="color: #92400e;">Solução:</strong>
                <ol style="color: #78350f; margin: 0.5rem 0 0 1.5rem; padding: 0;">
                  <li>Verifique se o arquivo <code>index.html</code> foi atualizado no servidor</li>
                  <li>Certifique-se de que a pasta <code>assets</code> contém os arquivos mais recentes</li>
                  <li>Limpe o cache do navegador (Ctrl+Shift+R) ou cache do CDN</li>
                  <li>Faça um novo deploy com todos os arquivos da pasta <code>dist</code></li>
                </ol>
              </div>
              <button onclick="window.location.reload()" style="padding: 0.75rem 1.5rem; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: 500;">
                🔄 Tentar Novamente
              </button>
            </div>
          </div>
        `;
      }
    }
  }
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Promise rejeitada não tratada:", event.reason);
});

// Verificar se o elemento root existe antes de renderizar
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Elemento 'root' não encontrado no DOM!");
  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
      <div style="text-align: center;">
        <h1 style="color: #dc2626; margin-bottom: 1rem;">Erro ao carregar a aplicação</h1>
        <p>O elemento raiz não foi encontrado. Verifique se o HTML está correto.</p>
      </div>
    </div>
  `;
} else {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
  } catch (error) {
    console.error("Erro ao renderizar a aplicação:", error);
    rootElement.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
        <div style="text-align: center; max-width: 600px; padding: 2rem;">
          <h1 style="color: #dc2626; margin-bottom: 1rem;">Erro ao carregar a aplicação</h1>
          <p style="color: #6b7280; margin-bottom: 1rem;">Ocorreu um erro ao inicializar a aplicação.</p>
          <p style="color: #9ca3af; font-size: 0.875rem;">Verifique o console do navegador para mais detalhes.</p>
        </div>
      </div>
    `;
  }
}
