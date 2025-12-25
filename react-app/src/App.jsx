import { useState, useEffect } from 'react'
import BackgroundEffects from './components/BackgroundEffects'
import ConversationInterface from './components/ConversationInterface'
import GiftBox from './components/GiftBox'
import CelebrationCard from './components/CelebrationCard'
import PhotoGallery from './components/PhotoGallery'
import WishMaker from './components/WishMaker'
import ChristmasCake from './components/ChristmasCake'
import VoiceRecorder from './components/VoiceRecorder'
import AudioControls from './components/AudioControls'
import CursorTrail from './components/CursorTrail'
import BalloonAnimation from './components/BalloonAnimation'
import CEOMessage from './components/CEOMessage'
import TeamMembers from './components/TeamMembers'

function App() {
  const [currentView, setCurrentView] = useState('conversation') // conversation, gift, card
  const [userName, setUserName] = useState('')
  const [showGallery, setShowGallery] = useState(false)
  const [showWish, setShowWish] = useState(false)
  const [showCake, setShowCake] = useState(false)
  const [showVoice, setShowVoice] = useState(false)
  const [showCEOMessageModal, setShowCEOMessageModal] = useState(false)
  const [showTeamMembers, setShowTeamMembers] = useState(false)
  const [isAudioEnabled, setIsAudioEnabled] = useState(false)

  const handleConversationComplete = (name) => {
    setUserName(name)
    setCurrentView('gift')
  }

  const handleGiftOpened = () => {
    setCurrentView('card')
    // Show special features after card is revealed - with longer delays to avoid overlap
    setTimeout(() => setShowWish(true), 3000)
    setTimeout(() => setShowCake(true), 5000)
    setTimeout(() => setShowVoice(true), 7000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-red-600 overflow-x-hidden overflow-y-auto relative flex items-center justify-center p-3 sm:p-5 py-5 sm:py-8">
      <BackgroundEffects />
      <CursorTrail />
      <AudioControls isEnabled={isAudioEnabled} onToggle={setIsAudioEnabled} />
      
      {currentView === 'conversation' && (
        <ConversationInterface onComplete={handleConversationComplete} />
      )}
      
      {currentView === 'gift' && (
        <GiftBox onOpen={handleGiftOpened} />
      )}
      
      {currentView === 'card' && (
        <div className="w-full max-w-7xl mx-auto pb-24 sm:pb-8 px-3 sm:px-4">
          {/* Brand Header */}
          <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-0">
            <h1 className="font-poppins text-2xl sm:text-4xl font-bold text-white drop-shadow-lg">
              Juventus Tech World
            </h1>
          </div>

          {/* Balloon Animation */}
          <BalloonAnimation />

          {/* Celebration Card */}
          <CelebrationCard 
            userName={userName}
            onDownload={() => {}}
            onShowGallery={() => setShowGallery(true)}
          />

          {/* CEO Message - Inline */}
          <CEOMessage 
            userName={userName}
            onClose={() => setShowCEOMessageModal(false)}
          />

          {/* Credits */}
          <div className="text-center mt-4 sm:mt-6 text-white/80 text-xs sm:text-sm px-4 pb-4">
            <p>✨ Merry Christmas and Happy New Year ✨</p>
            <p className="mt-1">From Juventus Tech World</p>
          </div>
        </div>
      )}
      
      {showGallery && (
        <PhotoGallery onClose={() => setShowGallery(false)} />
      )}
      
      {showWish && (
        <WishMaker onClose={() => setShowWish(false)} />
      )}
      
      {showCake && (
        <ChristmasCake onClose={() => setShowCake(false)} />
      )}
      
      {showVoice && (
        <VoiceRecorder userName={userName} onClose={() => setShowVoice(false)} />
      )}
      
      {showCEOMessageModal && (
        <CEOMessage userName={userName} onClose={() => setShowCEOMessageModal(false)} />
      )}
      
      {showTeamMembers && (
        <TeamMembers onClose={() => setShowTeamMembers(false)} />
      )}
    </div>
  )
}

export default App

