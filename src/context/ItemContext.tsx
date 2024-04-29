import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Item {
  name: string;
  description: string;
}

interface ItemContextType {
  clickedItemInfo: Item | null;
  setClickedItemInfo: (itemInfo: Item | null) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clickedItemInfo, setClickedItemInfo] = useState<Item | null>(null);

  return (
    <ItemContext.Provider value={{ clickedItemInfo, setClickedItemInfo }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('O contexto deve ser usado dentro de um ItemProvider');
  }
  return context;
};
