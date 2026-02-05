# ZILA Website - Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **Cyberpunk/Web3 Aesthetic**: Dark backgrounds, neon accents, glassmorphism
- **Premium Crypto Dashboards**: Uniswap, Aave, Phantom Wallet
- **Style**: Futuristic Dark Mode + Neon Glow + 3D Elements + Glassmorphism

### Color Palette
- Primary: #0A0A0F (Deep Black - background)
- Secondary: #1A1A2E (Dark Purple-Blue - sections)
- Accent Purple: #8B5CF6 (Neon Purple - primary accent)
- Accent Blue: #3B82F6 (Electric Blue - secondary accent)
- Accent Yellow/Orange: #F59E0B (CTA buttons)
- Text: #FFFFFF (White), #A0AEC0 (Light Gray - secondary)
- Glow: #8B5CF6 with blur for neon effects

### Typography
- Heading1: Inter font-weight 800 (56px) - Hero titles
- Heading2: Inter font-weight 700 (42px) - Section titles
- Heading3: Inter font-weight 600 (32px) - Card titles
- Body/Normal: Inter font-weight 400 (16px)
- Body/Emphasis: Inter font-weight 600 (16px)
- Navigation: Inter font-weight 600 (18px)

### Key Component Styles
- **Buttons (CTA)**: Yellow-orange gradient (#F59E0B to #EF4444), white text, 12px rounded, glow effect on hover
- **Cards**: Dark background (#1A1A2E), glassmorphism effect (backdrop-blur), 16px rounded, neon purple border on hover
- **Forms/Inputs**: Dark background with neon purple border, focus: enhanced glow
- **Modal/Popup**: Dark purple gradient background, rounded corners, neon borders, smooth fade animation

### Layout & Spacing
- Hero section: Full viewport height with centered 3D token animation
- Section padding: 100px vertical
- Card hover: Glow effect, slight scale-up (1.05), 300ms transition
- Smooth scroll behavior throughout

### Images to Generate
1. **zila-token-3d.png** - 3D rendered ZILA token coin with metallic purple/blue gradient, neon glow edges, floating in space (Style: 3d, futuristic, glowing)
2. **ai-intelligence-layer.jpg** - Abstract AI neural network visualization with purple/blue neon connections, circuit patterns, holographic effect (Style: 3d, cyberpunk, dark background)
3. **web3-infrastructure.jpg** - Blockchain network nodes connected in 3D space, glowing purple connections, decentralized web visualization (Style: 3d, futuristic, neon)
4. **meme-distribution-engine.jpg** - Viral spread visualization with meme icons, social network connections, explosive energy effect (Style: cartoon-3d, vibrant, dynamic)
5. **community-dao-governance.jpg** - Community gathering visualization, DAO voting interface, people silhouettes with neon outlines (Style: 3d, minimalist, glowing)
6. **team-member-1.jpg** - Professional portrait, CEO, confident pose, futuristic background (Style: photorealistic, professional)
7. **team-member-2.jpg** - Professional portrait, CTO, tech-focused, modern background (Style: photorealistic, professional)
8. **team-member-3.jpg** - Professional portrait, AI Lead, innovative look, digital background (Style: photorealistic, professional)
9. **team-member-4.jpg** - Professional portrait, Community Manager, friendly, vibrant background (Style: photorealistic, professional)
10. **partnership-logo-placeholder.png** - Generic tech/crypto company logo, circular, minimalist (Style: vector-style, clean)

---

## Development Tasks

1. **Setup & Structure** - Initialize HTML template, create file structure
2. **Generate Images** - Create all 10 images using ImageCreator.generate_images
3. **HTML Structure** - Build semantic HTML with all sections (Home, Ecosystem, Airdrop, Tokenomics, Roadmap, Partnership)
4. **CSS Styling** - Implement dark mode, glassmorphism, neon glow effects, animations
5. **JavaScript Interactivity** - Navigation, modal popup, pie chart, scroll animations, 3D token rotation
6. **Responsive Design** - Mobile-first approach, breakpoints for tablet and desktop
7. **Final Polish** - Smooth scroll, hover effects, loading animations
8. **Testing** - Cross-browser compatibility, responsive testing
