export function downloadCelebrationCard(userName) {
  const displayName = userName || 'Client'
  const svgContent = `<svg width="700" height="800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#dcfce7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#fee2e2;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="nameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#16a34a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#dc2626;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="700" height="800" fill="url(#bg)" rx="20"/>
    <circle cx="100" cy="100" r="30" fill="#dc2626" opacity="0.3"/>
    <circle cx="600" cy="150" r="25" fill="#16a34a" opacity="0.3"/>
    <circle cx="150" cy="700" r="35" fill="#fbbf24" opacity="0.3"/>
    <circle cx="550" cy="650" r="28" fill="#dc2626" opacity="0.3"/>
    <text x="350" y="150" text-anchor="middle" font-family="Dancing Script, cursive" font-size="80" fill="#16a34a">🎄</text>
    <text x="350" y="250" text-anchor="middle" font-family="Dancing Script, cursive" font-size="56" fill="#16a34a" font-weight="700">Merry Christmas</text>
    <text x="350" y="310" text-anchor="middle" font-family="Dancing Script, cursive" font-size="56" fill="#16a34a" font-weight="700">and Happy New Year</text>
    <text x="350" y="380" text-anchor="middle" font-family="Dancing Script, cursive" font-size="72" fill="url(#nameGradient)" font-weight="600">${displayName}</text>
    <text x="350" y="460" text-anchor="middle" font-family="Poppins, sans-serif" font-size="22" fill="#374151" font-weight="600">from</text>
    <text x="350" y="510" text-anchor="middle" font-family="Poppins, sans-serif" font-size="28" fill="#dc2626" font-weight="700">Juventus Tech World</text>
    <text x="350" y="620" text-anchor="middle" font-family="Poppins, sans-serif" font-size="22" fill="#16a34a" font-style="italic">Wishing you joy and success in the New Year!</text>
  </svg>`
  
  const blob = new Blob([svgContent], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.download = `christmas-celebration-${displayName.toLowerCase().replace(/\s+/g, '-')}.svg`
  link.href = url
  link.click()
  
  setTimeout(() => URL.revokeObjectURL(url), 100)
}

