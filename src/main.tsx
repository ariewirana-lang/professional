const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}
