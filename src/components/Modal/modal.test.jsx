import React from 'react';
import { ThemeProvider } from "react-jss";
import {
  render
} from '@testing-library/react';
import Modal from './index';
import themes from '../../themes/main';


const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Modal />
    </ThemeProvider>
  );

test('should match snapshot', async () => {
  const { asFragment } = renderComponent({ theme: themes });
  expect(asFragment()).toMatchSnapshot()
});
