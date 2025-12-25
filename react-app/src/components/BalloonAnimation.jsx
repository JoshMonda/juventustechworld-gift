import { useState, useEffect } from 'react'

export default function BalloonAnimation() {
  const [balloons, setBalloons] = useState([])

  const balloonMessages = [
    { text: '🎉 Merry Christmas 🎄', color: 'from-red-500 to-red-600' },
    { text: '✨ Happy New Year ✨', color: 'from-yellow-500 to-yellow-600' },
  ]

  useEffect(() => {
    // Pop balloons one by one with smooth timing
    balloonMessages.forEach((balloon, index) => {
      setTimeout(() => {
        setBalloons(prev => [...prev, { ...balloon, id: index }])
      }, index * 600)
    })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8 px-3 sm:px-4 mt-2 sm:mt-0">
      {balloons.map((balloon, index) => (
        <div
          key={balloon.id}
          className={`bg-gradient-to-br ${balloon.color} text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl text-center animate-[balloonPop_0.8s_ease-out] transform origin-center`}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold px-2">
            {balloon.text}
          </div>
        </div>
      ))}
    </div>
  )
}

