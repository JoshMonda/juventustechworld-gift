import { useState } from 'react'

const CEO_IMAGE_URL = "https://scontent.fnuu2-1.fna.fbcdn.net/v/t39.30808-6/481296147_617285014411755_9058395112683822557_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeGyqYH1ZiDXyWecbd30uSxj2DUKz7JBubDYNQrPskG5sC-VX9dRkQ_YphHUK5KGBgpV-H0vYamdxf97KWbdoDH3&_nc_ohc=mQo2_HaBCQ4Q7kNvwHmdNRo&_nc_oc=Adkd3fGlCF3erJh_vif3-JK9-zGqYU3nn0CwYoPz14f2sxjLNEYp2d1AzIyV0PHfbDY&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnuu2-1.fna&_nc_gid=HUjbGtetOs4N0P9WpS5PLw&oh=00_Afkjc-cQWt-5FwVYGfcz7g3F9Ayg0Y0Cn3QWr_KXF5v9HQ&oe=695290A1"

export default function CEOMessage({ onClose, userName = '' }) {
  const [showFullMessage, setShowFullMessage] = useState(false)
  const [imageError, setImageError] = useState(false)

  const ceoMessage = [
    "Dear Valued Clients, Partners, and Friends,",
    "",
    `As we celebrate this wonderful holiday season, I wanted to take a moment to express my heartfelt gratitude to each and every one of you. ${userName ? `Especially to you, ${userName},` : 'To you,'} thank you for being an integral part of our journey at Juventus Tech World.`,
    "",
    "This past year has been remarkable, and it is your trust, collaboration, and support that have made our success possible. Your partnership has been invaluable, and we are truly grateful for the opportunity to work alongside you.",
    "",
    "As we approach the end of this year and look forward to the new one, I want to wish you and your loved ones a Merry Christmas filled with joy, peace, and cherished moments. May the New Year bring you prosperity, happiness, and continued success in all your endeavors.",
    "",
    "At Juventus Tech World, we are committed to continuing our journey of innovation and excellence, and we look forward to strengthening our partnerships in the year ahead.",
    "",
    "Thank you for being part of our family. Wishing you a festive holiday season and a prosperous New Year!",
    "",
    "Warmest regards,",
    "",
    "Mr. Joash Monda Mokaya",
    "CEO – Juventus Tech World",
    "",
    "🎄✨🎉"
  ]

  if (!showFullMessage) {
    return (
      <div className="relative bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-xl border-2 border-green-500/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* CEO Photo - Circular */}
          <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-green-600 to-red-600 p-1 shadow-lg overflow-hidden relative">
            {!imageError ? (
              <img 
                src={CEO_IMAGE_URL}
                alt="Mr. Joash Monda Mokaya, CEO - Juventus Tech World"
                className="w-full h-full rounded-full object-cover"
                onError={() => setImageError(true)}
                onLoad={() => setImageError(false)}
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-green-100 to-red-100 flex items-center justify-center text-2xl sm:text-3xl">
                👔
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="font-dancing text-2xl sm:text-3xl text-green-700 mb-2">A Message from the CEO</h3>
            <p className="font-poppins text-sm sm:text-base text-gray-700 mb-2">
              <span className="font-semibold text-gray-800">Mr. Joash Monda Mokaya</span>
            </p>
            <p className="font-poppins text-xs sm:text-sm text-red-600 mb-3 font-semibold">CEO – Juventus Tech World</p>
            <p className="font-poppins text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              Warm wishes for a Merry Christmas and a prosperous New Year to all our clients, partners, and friends.
            </p>
            <button
              onClick={() => setShowFullMessage(true)}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Read Full Message
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[2000] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-4xl w-full shadow-2xl border-2 sm:border-4 border-green-600 my-4 sm:my-8 relative max-h-[95vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={() => setShowFullMessage(false)}
          className="absolute top-3 sm:top-5 right-3 sm:right-5 bg-red-500/90 hover:bg-red-600 border-none text-2xl sm:text-3xl text-white cursor-pointer p-2 sm:p-2.5 rounded-full transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 shadow-lg z-10"
          title="Close"
        >
          ×
        </button>

        <div className="text-center mb-4 sm:mb-6">
          {/* CEO Photo - Circular */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-green-600 to-red-600 p-1.5 sm:p-2 shadow-xl overflow-hidden relative">
              {!imageError ? (
                <img 
                  src={CEO_IMAGE_URL}
                  alt="Mr. Joash Monda Mokaya, CEO - Juventus Tech World"
                  className="w-full h-full rounded-full object-cover"
                  onError={() => setImageError(true)}
                  onLoad={() => setImageError(false)}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-100 to-red-100 flex items-center justify-center text-4xl sm:text-5xl">
                  👔
                </div>
              )}
            </div>
          </div>
          <h2 className="font-dancing text-3xl sm:text-5xl text-green-700 mb-2">A Message from the CEO</h2>
          <p className="font-poppins text-xl sm:text-2xl text-gray-800 font-bold mb-1">
            Mr. Joash Monda Mokaya
          </p>
          <p className="font-poppins text-lg sm:text-xl text-red-600 font-semibold">
            CEO – Juventus Tech World
          </p>
        </div>

        {/* Full Message */}
        <div className="bg-white/90 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-4 sm:mb-6 border-l-4 border-green-600">
          <div className="space-y-3 sm:space-y-4 font-poppins text-sm sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {ceoMessage.map((line, index) => (
              <p 
                key={index} 
                className={
                  line.includes('Mr. Joash') || line.includes('Joash Monda Mokaya') || line.includes('CEO') || line.match(/🎄|✨|🎉/)
                    ? "font-bold text-center text-green-700 text-base sm:text-xl"
                    : line.includes('Dear') || line.includes('Warmest')
                    ? "font-semibold text-gray-800"
                    : ""
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowFullMessage(false)}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
