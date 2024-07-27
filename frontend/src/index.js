// import React from "react";
// import ReactDOM from "react-dom/client";
// import "glider-js/glider.min.css";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";

// import App from "./App";
// // import { PersistGate } from "redux-persist/integration/react";
// // import { Provider } from "react-redux";
// // import reduxStore from "./redux";
// import { AppProvider } from "./Context/ContextSearch";
// import { PaginationProvider } from "./Context/PaginationContext";
// import { ProductProvider } from "./Context/ProductContext";

// // const { store, persistor } = reduxStore();
// // {persistor={persistor}}
// // store={store}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <Provider>

//   // </Provider>
//   // <PersistGate loading={null}>

//   // </PersistGate>
//   <BrowserRouter>
//     <AppProvider>
//       <PaginationProvider>
//         <ProductProvider>
//           <App />
//         </ProductProvider>
//       </PaginationProvider>
//     </AppProvider>
//   </BrowserRouter>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "glider-js/glider.min.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context/ContextSearch";
import { PaginationProvider } from "./Context/PaginationContext";
import { ProductProvider } from "./Context/ProductContext";
import { AuthProvider } from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <PaginationProvider>
        <ProductProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ProductProvider>
      </PaginationProvider>
    </AppProvider>
  </BrowserRouter>
);
