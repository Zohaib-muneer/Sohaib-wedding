import { useState } from 'react';
import WeddingPage from '../pages/WeddingPage';

export default function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  return (
    <>
      {
      // !showMainPage ? (
      //   <Envelope onAnimationComplete={() => setShowMainPage(true)} />
      // ) :
       (
        <WeddingPage />
        
      )}
    </>
  );
}
