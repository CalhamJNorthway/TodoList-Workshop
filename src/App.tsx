import React, { useEffect, useState } from 'react';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dictionary, ListItem } from './core/Types';
import { Helpers } from './core/Helpers';
import { DetailsPage } from './pages/detailsPage/DetailsPage';
import {CookieKeys, CookieManager} from "./core/storage";
import Cookies from 'universal-cookie';

const cookieManager = new CookieManager(new Cookies());

function App() {
  const [itemList, setItemList] = useState<Dictionary<ListItem>>({})

  useEffect(() => {
    if (Object.keys(itemList).length === 0) {
      const taskList = cookieManager.getByKey<Dictionary<ListItem>>(CookieKeys.TASK_LIST);
      setItemList(taskList);
    }

    if (Object.keys(itemList).length > 0) {
      cookieManager.set<Dictionary<ListItem>>(CookieKeys.TASK_LIST, itemList);
    }
  }, [itemList]);

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
    const listCopy: Dictionary<ListItem> = { ...itemList };
    listCopy[item.key] = { ...item };
    setItemList(listCopy);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MainPage
              items={itemList}
              addItem={addItem}
            />
          </Route>
          <Route path="/details">
            <DetailsPage
              itemList={itemList}
              editItem={editItem}
              removeItem={removeItem}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
