"use client";

import React, { useContext, useState } from "react";

const initialValue = {
  level: null,
  setLevel: (newLevel: GridContentLevel) => {}
};

type GridContentLevel = '1' | '2' | null | undefined;

const GridAnimateContext = React.createContext<{
  level: GridContentLevel,
  setLevel: (newLevel: GridContentLevel) => void
}>(initialValue);

function GridAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // the level will be used to control when to show the details of a grid item content
  // level 1 will show initial/brief detials which correspond to the initial zoom
  // level 2 will show the full details which correspond to a more focused zoom
  const [level, setLevel] = useState<GridContentLevel>(null);
  return (
    <GridAnimateContext.Provider value={{level, setLevel}}>
      {children}
    </GridAnimateContext.Provider>
  );
}

function useGridContext() {
    const context = useContext(GridAnimateContext);
    if (typeof context === 'undefined') {
        throw new Error('useGridContext must be used within a GridAnimationProvider');
    }
    return context;
}


export { useGridContext, GridAnimationProvider };


