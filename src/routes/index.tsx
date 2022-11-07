import React from 'react';
import { useRoutes } from 'react-router-dom';
import Question1 from '../containers/Question1/question1';
import Question2 from '../containers/Question2/question2';
import Question3 from '../containers/Question3/question3';
import Question4 from '../containers/Question4/question4';

export default function Routes() {
  // let element = useRoutes([
  //   {
  //       element: <AuthLayout />,
  //       children: [
  //           { path: '/', element: <Login /> },
  //           { path: 'signup', element: <SignUp /> },
  //       ],
  //   },
  //   {
  //       element: <MainLayout />,
  //       children: [
  //           { path: 'home', element: <Home /> },
  //           { path: 'about', element: <About /> },
  //       ],
  //   },
  // ]);
  // return element;
  const element = useRoutes([
    {
      path: '/',
      element: <Question1 />,
    },
    {
      path: '/q2',
      element: <Question2 />,
    },
    {
      path: '/q3',
      element: <Question3 />,
    },
    {
      path: '/q4',
      element: <Question4 />,
    },
    // {
    //   path: '/books',
    //   children: [
    //     { index: true, element: <BookList /> },
    //     { path: ':id', element: <Book /> }
    //   ]
    // }
  ]);

  return element;
}
