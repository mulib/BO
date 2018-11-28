
// import { Route } from 'react-router-dom'
// import * as React from 'react'

// const fakeAuth: boolean = true

// //if path starts with '/guest' render Component
// // else if path starts with '/auth'
// // if user authenticated
// // render Component
// // else Redirect to '/login'
// export function RouteWithAuth({ component: Component, path:string, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         path.startsWith('/quest') ?  // public routes
//           (
//             <Component {...props} />
//           )
//           : path.startsWith('/auth') && fakeAuth ? // auth routes
//             (
//               <Component {...props} />
//             ) : // bad route or not auth will redirect to login
//             (
//               <Redirect
//                 to={{
//                   pathname: "/login",
//                   state: { from: props.location }
//                 }}
//               />
//             )
//       }
//     />
//   );
// }