import { createStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import toDoListReducer from "./components/ReduxStore/reducer";
import indexStyles from './styles/index.css';
import tailwindStyles from './styles/tailwind.css';



export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: indexStyles }
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

const store = createStore(toDoListReducer)


export default function App() {
  return (
    <Provider store={store} >
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
      </html>
      </Provider>
  );
}
