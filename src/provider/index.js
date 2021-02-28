import React, {useState} from 'react';

export const DataContext = React.createContext({});

const Provider = ({children}) => {
  const [itensCheckout, setItensCheckout] = useState([]);

  return (
    <DataContext.Provider
      value={{
        itensCheckout,

        adicionarItem: (novoItem) => {
          let copiaItensCheckout = [...itensCheckout];
          let itemFiltrado = copiaItensCheckout.find(
            (itensCheckout) => itensCheckout.id === novoItem.id,
          );
          if (itemFiltrado) {
            itemFiltrado.qty = itemFiltrado.qty + 1;
          } else {
            novoItem.qty = 1;
            copiaItensCheckout = [...copiaItensCheckout, novoItem];
          }
          setItensCheckout(copiaItensCheckout);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
