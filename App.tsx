import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ChatScreen from './components/ChatScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState<'welcome' | 'chat'>('welcome');

  const startChat = () => {
    setScreen('chat');
  };

  const goBackToWelcome = () => {
    setScreen('welcome');
  };

  return (
    <div className="h-screen w-screen bg-gray-900 overflow-hidden">
      {screen === 'welcome' ? (
        <WelcomeScreen onStart={startChat} />
      ) : (
        <ChatScreen onBack={goBackToWelcome} />
      )}
    </div>
  );
};

export default App;
