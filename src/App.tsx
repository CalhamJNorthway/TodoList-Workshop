import React, { useState } from 'react';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage';
import { Dictionary, ListItem } from './core/Types';
import { Helpers } from './core/Helpers';

function App() {
  const [itemList, setItemList] = useState<Dictionary<ListItem>>({})

  const addItem = (item: ListItem) => {
    const key: string = Helpers.generateKey();
    const listCopy: Dictionary<ListItem> = { ...itemList };
    const newItem: ListItem = {
      ...item,
      key: key,
    };

    listCopy[key] = newItem;
    setItemList(listCopy);
  }


  const removeItem = (item: ListItem): void => {
    const listCopy: Dictionary<ListItem> = { ...itemList };
    delete listCopy[item.key];
    setItemList(listCopy);
  }

  const editItem = (item: ListItem): void => {
    const listCopy: Dictionary<ListItem> = {...itemList};
    listCopy[item.key] = {...item};

    setItemList(listCopy);
  }

  return (
    <div className="App">
      <MainPage
        items={itemList}
        onItemClick={() => null}
        addItem={addItem}
      />
    </div>
  );
}

export default App;
