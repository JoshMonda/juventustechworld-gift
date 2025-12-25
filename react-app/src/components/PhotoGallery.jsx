import { useState } from 'react'

const galleryItems = [
  {
    id: 'celebration',
    icon: '🎉',
    title: 'Holiday Celebration',
    message: `Dear Client,

What a wonderful time to celebrate! This Christmas and New Year, we're celebrating our partnership and the journey we've shared together.

Thank you for being an important part of our story. Your trust and partnership mean the world to us.

May this festive season bring you joy, peace, and renewed energy for the year ahead!

Merry Christmas and Happy New Year!
Juventus Tech World 🎉🎄`
  },
  {
    id: 'gratitude',
    icon: '🙏',
    title: 'With Gratitude',
    message: `Dear Client,

We want to express our heartfelt gratitude for your partnership and trust. Your collaboration has been instrumental in our shared success.

This holiday season, we celebrate not just the season, but also the meaningful relationships we've built together.

Thank you for being an essential part of our journey.

With deepest appreciation,
Juventus Tech World 🙏✨`
  },
  {
    id: 'future',
    icon: '🌟',
    title: 'Looking Forward',
    message: `Dear Client,

As we celebrate this holiday season and look ahead to the new year, we're filled with excitement and optimism about our continued partnership!

The foundation we've built together sets us up for even greater achievements ahead. We're grateful for the opportunity to work with you and look forward to what the future holds.

Here's to continued success and partnership in the year ahead!

With hope and anticipation,
Juventus Tech World 🌟🎄`
  },
  {
    id: 'partnership',
    icon: '🤝',
    title: 'Partnership & Collaboration',
    message: `Dear Client,

Partnership makes all the difference! We've witnessed the power of collaboration, where our combined efforts create something greater than we could achieve alone.

Your trust, feedback, and partnership have been invaluable. Together, we've navigated challenges and celebrated successes.

Thank you for being such a valued partner.

With appreciation and respect,
Juventus Tech World 🤝❤️`
  },
  {
    id: 'success',
    icon: '🏆',
    title: 'Celebrating Success',
    message: `Dear Client,

What an incredible journey we've shared! Every milestone, every achievement, every success we've reached together represents the strength of our partnership.

Your commitment to excellence and collaboration has been the driving force behind our shared accomplishments.

Here's to celebrating our wins and looking forward to even greater achievements ahead!

With pride and celebration,
Juventus Tech World 🏆✨`
  },
  {
    id: 'blessings',
    icon: '🎄',
    title: 'Holiday Blessings',
    message: `Dear Client,

During this special time of year, we want to take a moment to wish you and your loved ones all the blessings of the season.

May this Christmas bring you peace, joy, and moments of rest and reflection. May the New Year ahead be filled with new opportunities, continued growth, and abundant success.

Thank you for being part of our story.

With warmest holiday wishes,
Juventus Tech World 🎄❤️`
  }
]

export default function PhotoGallery({ onClose }) {
  const [selectedItem, setSelectedItem] = useState(null)

  if (selectedItem) {
    return (
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[2000] flex items-center justify-center"
        onClick={() => setSelectedItem(null)}
      >
      <div 
        className="bg-white rounded-0 p-6 sm:p-[60px] w-full h-screen overflow-y-auto shadow-none flex flex-col justify-center items-center text-center max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6 sm:mb-10 pb-3 sm:pb-5 border-b-2 sm:border-b-4 border-gray-100 w-full max-w-3xl px-4">
          <h3 className="font-dancing text-3xl sm:text-6xl text-green-700 m-0 drop-shadow-md">
            {selectedItem.title}
          </h3>
          <button
            onClick={() => setSelectedItem(null)}
            className="bg-black/10 border-none text-3xl sm:text-5xl text-gray-400 cursor-pointer p-2 sm:p-4 rounded-full transition-all duration-300 w-12 h-12 sm:w-15 sm:h-15 flex items-center justify-center hover:bg-black/20 hover:text-gray-800 hover:scale-110 flex-shrink-0"
          >
            ×
          </button>
        </div>
        <div className="w-full max-w-3xl px-4">
          <p className="text-base sm:text-2xl leading-relaxed text-gray-700 m-0 whitespace-pre-line text-center font-normal">
            {selectedItem.message}
          </p>
        </div>
      </div>
      </div>
    )
  }

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[2000] flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[15px] sm:rounded-[20px] p-4 sm:p-8 max-w-4xl w-[95%] sm:w-[90%] max-h-[85vh] sm:max-h-[80vh] overflow-y-auto shadow-2xl animate-[modalSlideIn_0.5s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 sm:mb-8 pb-3 sm:pb-5 border-b-2 border-gray-100">
          <h2 className="font-dancing text-2xl sm:text-4xl text-green-700 m-0 pr-2">Holiday Gallery</h2>
          <button
            onClick={onClose}
            className="bg-transparent border-none text-2xl sm:text-3xl text-gray-400 cursor-pointer p-1.5 sm:p-2.5 rounded-full transition-all duration-300 hover:bg-gray-100 hover:text-gray-800 flex-shrink-0"
          >
            ×
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 auto-fit">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="aspect-square rounded-[12px] sm:rounded-[15px] overflow-hidden shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-100 to-pink-100 flex flex-col items-center justify-center text-[#8b4513] text-center p-3 sm:p-4 transition-all duration-300 hover:from-orange-200 hover:to-blue-900 hover:text-white hover:-translate-y-1">
                <span className="text-3xl sm:text-4xl mb-2">{item.icon}</span>
                <h4 className="text-base sm:text-lg font-semibold m-0 mb-2 font-dancing">{item.title}</h4>
                <p className="text-xs sm:text-sm font-normal m-0 leading-snug opacity-90">{item.message.split('\n\n')[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

