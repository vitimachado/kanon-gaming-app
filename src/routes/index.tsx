import React from 'react';
import { useRoutes } from 'react-router-dom';
import Question1 from '../containers/Question1/question1';
import Question2 from '../containers/Question2/question2';
import Question3 from '../containers/Question3/question3';
import Question4And5 from '../containers/Question4And5/question4And5';
import Question6 from '../containers/Question6/question6';

export default function Routes() {
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
      path: '/q4and5',
      element: <Question4And5 />,
    },
    {
      path: '/q6',
      element: <Question6 />,
    },
    {
      path: '*',
      element: <Question1 />,
    },
  ]);

  return element;
}
