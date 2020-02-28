import { useEffect, useState, useCallback } from "react";

const MENU_STATE = {
  isOpen: false
};

function useMenu() {
  const [menuState, setMenuState] = useState(MENU_STATE);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!(e.target && (e.target as HTMLDivElement).closest(".menu_more"))) {
        setMenuState({ isOpen: false });
      }
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, []);

  const onMenuToggle = useCallback(() => {
    setMenuState(beforeState => ({
      isOpen: !beforeState.isOpen
    }));
  }, []);

  return {
    menuState,
    onMenuToggle
  };
}

export default useMenu;
