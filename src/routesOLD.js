// import React from "react";
// import { useSelector } from "react-redux";
// import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import { Footer } from './components/Footer/footer';
// import { Navbar } from './components/Navbar/navbar';
// import { Loading } from "./components/shared/Loading/loading";
// import { Home } from './containers/Home/home';
// import { Product } from "./containers/Product/product";
// import { getLocalAddressPoc, localAddressIsAvailable } from "./store/actions";
// import { Error } from "./components/shared/error/error";

// const Routes = () => {

//     const page = useSelector(state =>  {
//         const isAvailable = localAddressIsAvailable();
//         const location = window.location.pathname;
//         if(isAvailable) {
//             if(location === '/') return "/product";
//         } else if(!isAvailable && location !== '/') return "/";

//         return state.page;
//     } );

//     const RedirectPage = ({page}) => page ? <Redirect to={page}/> : null;

//     return (
//         <>
//             <BrowserRouter>
//                 <RedirectPage page={page}/>
//                 <Navbar />
//                 <Switch>
//                     <Route exact path="/" component={() => <Home />} />
//                     <Route exact path="/product" component={() => <Product />} />
//                 </Switch>
//                 <Footer />
//             </BrowserRouter>
//             <Loading />
//             <Error />
//         </>
//     )
// };

// export default Routes;
