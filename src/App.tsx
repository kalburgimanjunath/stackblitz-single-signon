import { FC } from 'react';
import { Header } from '../components/';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Header />
    </div>
  );
};
