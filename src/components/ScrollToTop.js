import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Move o scroll para o topo (x = 0, y = 0)
  }, [pathname]); // Roda este efeito sempre que o pathname muda

  return null; // Não renderiza nada
}

export default ScrollToTop;
