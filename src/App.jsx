import { useState } from 'react';
import Pageswrapper from './data/Pageswrapper';

export default function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  return (
    <>
      {
      // !showMainPage ? (
      //   <Envelope onAnimationComplete={() => setShowMainPage(true)} />
      // ) :
       (
        <Pageswrapper />
        
      )}
    </>
  );
}
