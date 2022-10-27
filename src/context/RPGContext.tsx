import React, {useState, useEffect} from 'react';

export const RPGCtx = React.createContext({});

export const RPGCtxProvider = ({
  children,
  data,
}: RPGCtxProviderProps): JSX.Element => {
  const [characterData, setCharacterData] = useState(data);
  return <RPGCtx.Provider value={characterData}>{children}</RPGCtx.Provider>;
};

interface RPGCtxProviderProps {
  children: React.ReactNode;
  data: Object;
}
