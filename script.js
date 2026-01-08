* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #6b46c1;
    --secondary-color: #9333ea;
    --accent-color: #f59e0b;
    --dark-bg: #0f0f23;
    --darker-bg: #0a0a15;
    --light-text: #e2e8f0;
    --mystical-purple: #7c3aed;
    --mystical-blue: #3b82f6;
    --card-bg: rgba(30, 30, 60, 0.8);
    --glow-color: #a855f7;
}

body {
    font-family: 'Crimson Text', serif;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
    color: var(--light-text);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

.stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: 
        radial-gradient(2px 2px at 20px 30px, white, transparent),
        radial-gradient(2px 2px at 40px 70px, white, transparent),
        radial-gradient(1px 1px at 50px 50px, white, transparent),
        radial-gradient(1px 1px at 80px 10px, white, transparent),
        radial-gradient(2px 2px at 130px 80px, white, transparent),
        radial-gradient(1px 1px at 150px 120px, rgba(255, 255, 255, 0.8), transparent),
        radial-gradient(2px 2px at 200px 40px, white, transparent),
        radial-gradient(1px 1px at 250px 90px, rgba(255, 255, 255, 0.6), transparent),
        radial-gradient(3px 3px at 300px 150px, white, transparent),
        radial-gradient(1px 1px at 350px 60px, rgba(255, 255, 255, 0.7), transparent),
        radial-gradient(2px 2px at 400px 180px, white, transparent),
        radial-gradient(1px 1px at 450px 30px, rgba(255, 255, 255, 0.8), transparent),
        radial-gradient(2px 2px at 500px 100px, white, transparent),
        radial-gradient(1px 1px at 550px 140px, rgba(255, 255, 255, 0.6), transparent),
        radial-gradient(3px 3px at 600px 50px, white, transparent);
    background-repeat: repeat;
    background-size: 650px 250px;
    animation: sparkle 15s linear infinite;
    z-index: 1;
}

.stars::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(1px 1px at 100px 200px, rgba(255, 255, 255, 0.4), transparent),
        radial-gradient(2px 2px at 180px 280px, rgba(255, 255, 255, 0.6), transparent),
        radial-gradient(1px 1px at 260px 160px, rgba(255, 255, 255, 0.5), transparent),
        radial-gradient(3px 3px at 340px 240px, rgba(255, 255, 255, 0.7), transparent),
        radial-gradient(1px 1px at 420px 120px, rgba(255, 255, 255, 0.4), transparent),
        radial-gradient(2px 2px at 500px 200px, rgba(255, 255, 255, 0.8), transparent);
    background-repeat: repeat;
    background-size: 600px 320px;
    animation: twinkle 8s ease-in-out infinite;
}

.nebula {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: 
        radial-gradient(ellipse at 20% 30%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 70%, rgba(75, 0, 130, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(147, 112, 219, 0.05) 0%, transparent 60%);
    animation: nebula-drift 30s ease-in-out infinite;
    z-index: 0;
}

.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
}

.particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: float-particle 20s linear infinite;
}

.astrology-stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.flying-star {
    position: absolute;
    width: 4px;
    height: 4px;
    background: radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 215, 0, 0.8));
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
    opacity: 0;
}

.flying-star.active {
    animation: fly-star 8s ease-in-out;
}

@keyframes fly-star {
    0% {
        opacity: 0;
        transform: translate(-100px, 100vh) scale(0.5);
    }
    10% {
        opacity: 1;
        transform: translate(0, 80vh) scale(1);
    }
    30% {
        opacity: 1;
        transform: translate(30vw, 50vh) scale(1.2);
    }
    50% {
        opacity: 1;
        transform: translate(60vw, 30vh) scale(1);
    }
    70% {
        opacity: 1;
        transform: translate(90vw, 10vh) scale(0.8);
    }
    90% {
        opacity: 0.5;
        transform: translate(110vw, -10vh) scale(0.5);
    }
    100% {
        opacity: 0;
        transform: translate(120vw, -20vh) scale(0.3);
    }
}

.tarot-cards {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.flying-card {
    position: absolute;
    width: 40px;
    height: 60px;
    background: linear-gradient(135deg, #8B4513, #D2691E);
    border: 1px solid #FFD700;
    border-radius: 4px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #FFD700;
    font-weight: bold;
}

.flying-card.active {
    animation: fly-card 15s ease-in-out;
}

.flying-card.reverse.active {
    animation: fly-card-reverse 15s ease-in-out;
}

@keyframes fly-card-reverse {
    0% {
        opacity: 0;
        transform: translate(-20vw, -50px) rotate(0deg) scale(0.5);
    }
    8% {
        opacity: 1;
        transform: translate(0vw, 10vh) rotate(-45deg) scale(0.8);
    }
    20% {
        opacity: 1;
        transform: translate(20vw, 30vh) rotate(-90deg) scale(1);
    }
    32% {
        opacity: 1;
        transform: translate(40vw, 50vh) rotate(-180deg) scale(1.2);
    }
    44% {
        opacity: 1;
        transform: translate(60vw, 40vh) rotate(-270deg) scale(1);
    }
    56% {
        opacity: 1;
        transform: translate(80vw, 60vh) rotate(-360deg) scale(0.8);
    }
    68% {
        opacity: 1;
        transform: translate(100vw, 80vh) rotate(-405deg) scale(0.6);
    }
    80% {
        opacity: 0.8;
        transform: translate(110vw, 90vh) rotate(-450deg) scale(0.4);
    }
    90% {
        opacity: 0.5;
        transform: translate(115vw, 95vh) rotate(-495deg) scale(0.3);
    }
    95% {
        opacity: 0.2;
        transform: translate(118vw, 98vh) rotate(-540deg) scale(0.2);
    }
    100% {
        opacity: 0;
        transform: translate(120vw, 100vh) rotate(-585deg) scale(0.1);
    }
}

@keyframes fly-card {
    0% {
        opacity: 0;
        transform: translate(120vw, -50px) rotate(0deg) scale(0.5);
    }
    8% {
        opacity: 1;
        transform: translate(100vw, 10vh) rotate(45deg) scale(0.8);
    }
    20% {
        opacity: 1;
        transform: translate(80vw, 30vh) rotate(90deg) scale(1);
    }
    32% {
        opacity: 1;
        transform: translate(60vw, 50vh) rotate(180deg) scale(1.2);
    }
    44% {
        opacity: 1;
        transform: translate(40vw, 40vh) rotate(270deg) scale(1);
    }
    56% {
        opacity: 1;
        transform: translate(20vw, 60vh) rotate(360deg) scale(0.8);
    }
    68% {
        opacity: 1;
        transform: translate(0, 80vh) rotate(405deg) scale(0.6);
    }
    80% {
        opacity: 0.8;
        transform: translate(-10vw, 90vh) rotate(450deg) scale(0.4);
    }
    90% {
        opacity: 0.5;
        transform: translate(-15vw, 95vh) rotate(495deg) scale(0.3);
    }
    95% {
        opacity: 0.2;
        transform: translate(-18vw, 98vh) rotate(540deg) scale(0.2);
    }
    100% {
        opacity: 0;
        transform: translate(-20vw, 100vh) rotate(585deg) scale(0.1);
    }
}

.fireflies {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
}

.firefly {
    position: absolute;
    width: 4px;
    height: 4px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.8), rgba(255, 215, 0, 0));
    border-radius: 50%;
    animation: fly-firefly 25s ease-in-out infinite;
}

.background-constellations {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.bg-constellation {
    position: absolute;
    opacity: 0;
    transition: opacity 3s ease-in-out;
}

.bg-constellation.visible {
    opacity: 1;
}

.bg-constellation-star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
}

.bg-constellation-line {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform-origin: left center;
}

/* Различные созвездия для фона */

.bg-constellation-orion {
    top: 10%;
    left: 5%;
}

.bg-constellation-cassiopeia {
    top: 15%;
    right: 10%;
}

.bg-constellation-scorpius {
    bottom: 20%;
    left: 8%;
}

.bg-constellation-leo {
    top: 25%;
    right: 25%;
}

.bg-constellation-gemini {
    bottom: 30%;
    right: 5%;
}

.bg-constellation-virgo {
    top: 45%;
    left: 15%;
}

.bg-constellation-libra {
    bottom: 40%;
    left: 30%;
}

.bg-constellation-sagittarius {
    top: 60%;
    right: 15%;
}

.smiley-star {
    position: absolute;
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, rgba(255, 215, 0, 1), rgba(255, 255, 255, 0.8));
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(255, 215, 0, 1);
    opacity: 0;
    transform: scale(0);
}

.smiley-star.drawing {
    animation: draw-smiley-star 0.5s ease-out forwards;
}

@keyframes draw-smiley-star {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: scale(1.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.smiley-star.fading {
    animation: fade-smiley-star 2s ease-out forwards;
}

@keyframes fade-smiley-star {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.5);
    }
}

@keyframes sparkle {
    0% { transform: translateY(0); }
    100% { transform: translateY(-250px); }
}

@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

.card-symbol {
    font-size: 20px;
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.8);
}

@keyframes nebula-drift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(-20px, 10px) scale(1.05); }
    50% { transform: translate(10px, -15px) scale(0.95); }
    75% { transform: translate(-10px, -5px) scale(1.02); }
}

@keyframes float-particle {
    0% {
        transform: translateY(100vh) translateX(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) translateX(100px);
        opacity: 0;
    }
}

@keyframes fly-firefly {
    0% {
        transform: translate(0, 0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    25% {
        transform: translate(200px, -100px);
    }
    50% {
        transform: translate(400px, 100px);
    }
    75% {
        transform: translate(200px, 300px);
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

.moon {
    position: fixed;
    top: 10%;
    right: 10%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, #f59e0b 0%, #d97706 100%);
    border-radius: 50%;
    box-shadow: 
        0 0 50px rgba(245, 158, 11, 0.5),
        0 0 100px rgba(245, 158, 11, 0.3),
        inset -10px -10px 20px rgba(0, 0, 0, 0.2);
    animation: moon-glow 4s ease-in-out infinite;
    z-index: 2;
}

.moon::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.2), transparent 70%);
    border-radius: 50%;
    animation: moon-pulse 3s ease-in-out infinite;
}

.moon::after {
    content: '';
    position: absolute;
    top: 20%;
    left: 30%;
    width: 15px;
    height: 15px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    box-shadow: 
        20px 10px 0 3px rgba(0, 0, 0, 0.1),
        10px 20px 0 1px rgba(0, 0, 0, 0.08);
}

@keyframes moon-glow {
    0%, 100% { 
        box-shadow: 
            0 0 50px rgba(245, 158, 11, 0.5),
            0 0 100px rgba(245, 158, 11, 0.3),
            inset -10px -10px 20px rgba(0, 0, 0, 0.2);
    }
    50% { 
        box-shadow: 
            0 0 70px rgba(245, 158, 11, 0.7),
            0 0 120px rgba(245, 158, 11, 0.4),
            inset -10px -10px 20px rgba(0, 0, 0, 0.2);
    }
}

@keyframes moon-pulse {
    0%, 100% { 
        transform: scale(1);
        opacity: 0.5;
    }
    50% { 
        transform: scale(1.1);
        opacity: 0.8;
    }
}

.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(15, 15, 35, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--accent-color);
}

.logo i {
    font-size: 1.8rem;
}

.mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--light-text);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.3s ease;
}

.mobile-menu-toggle:hover {
    color: var(--accent-color);
    transform: scale(1.1);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: var(--light-text);
    text-decoration: none;
    font-family: 'Cinzel', serif;
    font-weight: 400;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: var(--accent-color);
    text-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-color);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    padding: 0 2rem;
}

.hero-content {
    text-align: center;
    max-width: 800px;
    z-index: 20;
}

.hero-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: clamp(1rem, 4vw, 1.2rem);
    margin-bottom: 2rem;
    opacity: 0.9;
    line-height: 1.6;
    padding: 0 1rem;
}

.glow {
    color: var(--accent-color);
    text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 1rem;
}

.btn-primary, .btn-secondary, .btn-mystic {
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 50px;
    font-family: 'Cinzel', serif;
    font-weight: 600;
    font-size: clamp(0.9rem, 3vw, 1rem);
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 44px;
    touch-action: manipulation;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent-color), #d97706);
    color: white;
    box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(245, 158, 11, 0.4);
}

.btn-secondary {
    background: transparent;
    color: var(--light-text);
    border: 2px solid var(--mystical-purple);
}

.btn-secondary:hover {
    background: var(--mystical-purple);
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
}

.btn-mystic {
    background: linear-gradient(135deg, var(--mystical-purple), var(--secondary-color));
    color: white;
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
}

.btn-mystic:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(124, 58, 237, 0.4);
}

.floating-orbs {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
}

.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(1px);
    animation: float 6s ease-in-out infinite;
}

.orb1 {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.3), transparent);
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.orb2 {
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent);
    top: 60%;
    right: 10%;
    animation-delay: 2s;
}

.orb3 {
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.2), transparent);
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}

.divination-section {
    padding: 5rem 0;
    position: relative;
    z-index: 10;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.section-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    text-align: center;
    margin-bottom: 1rem;
    color: var(--accent-color);
    text-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
    padding: 0 1rem;
}

.section-description {
    text-align: center;
    font-size: clamp(1rem, 3vw, 1.1rem);
    margin-bottom: 3rem;
    opacity: 0.9;
    padding: 0 1rem;
    line-height: 1.6;
}

.tarot-spread {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(124, 58, 237, 0.3);
}

.question-input {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.question-input input {
    flex: 1;
    min-width: 250px;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 10px;
    color: var(--light-text);
    font-family: inherit;
    font-size: 1rem;
}

.question-input input::placeholder {
    color: rgba(226, 232, 240, 0.6);
}

.question-input input:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.2);
}

.cards-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.card-slot {
    width: 120px;
    height: 200px;
    perspective: 1000px;
    cursor: pointer;
}

.card-back {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--mystical-purple), var(--secondary-color));
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    transition: all 0.6s ease;
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
    position: relative;
    overflow: hidden;
}

.card-back::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.6s ease;
}

.card-slot:hover .card-back {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(124, 58, 237, 0.4);
}

.card-slot:hover .card-back::before {
    animation: shimmer 0.6s ease;
}

@keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.card-slot.flipped .card-back {
    transform: rotateY(180deg);
}

.card-slot.revealed .card-back {
    background: linear-gradient(135deg, var(--accent-color), #d97706);
}

.interpretation {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.interpretation h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.runes-container {
    text-align: center;
}

.rune-pouch {
    margin-bottom: 2rem;
}

.pouch-animation {
    display: inline-block;
    font-size: 4rem;
    color: var(--mystical-purple);
    margin-bottom: 1rem;
    animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.rune-result {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(124, 58, 237, 0.3);
    max-width: 500px;
    margin: 0 auto;
}

.rune-symbol {
    font-size: 4rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
    text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
}

.rune-result h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.numerology-calculator {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
}

.input-group {
    margin-bottom: 2rem;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
}

.input-group input {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 10px;
    color: var(--light-text);
    font-family: inherit;
    font-size: 1rem;
}

.input-group input:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.2);
}

.numerology-result {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(124, 58, 237, 0.3);
}

.life-path-number {
    font-size: 4rem;
    font-weight: bold;
    color: var(--accent-color);
    text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
    margin-bottom: 1rem;
}

.numerology-result h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.life-path-traits {
    margin-top: 1.5rem;
    text-align: left;
}

.life-path-traits h4 {
    color: var(--mystical-purple);
    margin-bottom: 0.5rem;
}

.life-path-traits ul {
    list-style: none;
    padding-left: 0;
}

.life-path-traits li {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(124, 58, 237, 0.2);
}

.crystals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.crystal-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(124, 58, 237, 0.3);
    backdrop-filter: blur(10px);
}

.crystal-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
    border-color: var(--accent-color);
}

.crystal-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-size: 2rem;
    color: white;
}

.crystal-icon.amethyst {
    background: linear-gradient(135deg, #9333ea, #7c3aed);
}

.crystal-icon.rose-quartz {
    background: linear-gradient(135deg, #ec4899, #db2777);
}

.crystal-icon.citrine {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.crystal-icon.obsidian {
    background: linear-gradient(135deg, #374151, #111827);
}

.crystal-card h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
}

.crystal-card p {
    opacity: 0.8;
    font-size: 0.9rem;
}

.crystal-message {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(124, 58, 237, 0.3);
    max-width: 600px;
    margin: 0 auto;
}

.crystal-message h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.footer {
    background: var(--darker-bg);
    padding: 2rem 0;
    text-align: center;
    border-top: 1px solid rgba(124, 58, 237, 0.3);
    position: relative;
    z-index: 10;
}

.footer p {
    margin-bottom: 0.5rem;
    opacity: 0.8;
}

.footer .contacts {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 215, 0, 0.2);
}

.footer .contacts p {
    margin-bottom: 0.3rem;
    opacity: 0.9;
    font-size: 0.9rem;
}

.footer .contacts p:first-child {
    font-weight: bold;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
}

.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
}

.modal-content {
    background: linear-gradient(135deg, var(--dark-bg), var(--card-bg));
    margin: 5% auto;
    padding: 1.5rem;
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 20px;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    backdrop-filter: blur(10px);
}

.close {
    color: var(--light-text);
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close:hover {
    color: var(--accent-color);
}

.modal h2 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.modal ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
}

.modal li {
    margin-bottom: 0.5rem;
}

.shop-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.product-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(124, 58, 237, 0.3);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.product-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.1), transparent);
    transition: left 0.6s ease;
}

.product-card:hover::before {
    left: 100%;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
    border-color: var(--accent-color);
}

.product-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-size: 2rem;
    color: white;
    background: linear-gradient(135deg, var(--mystical-purple), var(--secondary-color));
    position: relative;
}

.product-icon::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, var(--accent-color), var(--mystical-purple));
    border-radius: 50%;
    z-index: -1;
    opacity: 0.5;
}

.product-card h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.product-card p {
    opacity: 0.8;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.4;
}

.product-price {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--accent-color);
    margin-bottom: 1rem;
    text-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
}

.cart-modal {
    max-width: 600px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
}

.cart-modal .modal-content {
    display: flex;
    flex-direction: column;
    max-height: inherit;
}

#cart-items {
    flex: 1;
    overflow-y: auto;
    max-height: 400px;
    padding-right: 0.5rem;
    margin-bottom: 1rem;
}

#cart-items::-webkit-scrollbar {
    width: 8px;
}

#cart-items::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
}

#cart-items::-webkit-scrollbar-thumb {
    background: var(--mystical-purple);
    border-radius: 4px;
}

#cart-items::-webkit-scrollbar-thumb:hover {
    background: var(--accent-color);
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    margin-bottom: 1rem;
    border: 1px solid rgba(124, 58, 237, 0.2);
}

.cart-item-info {
    flex: 1;
}

.cart-item-name {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 0.25rem;
}

.cart-item-price {
    opacity: 0.8;
    font-size: 0.9rem;
}

.cart-item-remove {
    background: rgba(239, 68, 68, 0.2);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #ef4444;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cart-item-remove:hover {
    background: rgba(239, 68, 68, 0.3);
    transform: scale(1.05);
}

.cart-summary {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(124, 58, 237, 0.3);
    background: rgba(255, 255, 255, 0.02);
    border-radius: 10px;
    padding: 1rem;
}

.total {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
    text-align: right;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
}

.form-group input {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 10px;
    color: var(--light-text);
    font-family: inherit;
    font-size: 1rem;
}

.form-group input:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.2);
}

.checkout-info {
    margin-bottom: 2rem;
}

.checkout-info h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.checkout-info ol {
    margin: 1rem 0;
    padding-left: 1.5rem;
}

.checkout-info li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

.payment-contacts {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid rgba(124, 58, 237, 0.3);
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
}

.contact-item i {
    color: var(--accent-color);
    font-size: 1.2rem;
}

.payment-note {
    font-style: italic;
    opacity: 0.8;
    margin-top: 1rem;
    text-align: center;
}

.checkout-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}

.empty-cart {
    text-align: center;
    padding: 2rem;
    opacity: 0.8;
}

.empty-cart i {
    font-size: 3rem;
    color: var(--mystical-purple);
    margin-bottom: 1rem;
}

.mediums-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.medium-card {
    background: var(--card-bg);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(124, 58, 237, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    position: relative;
}

.medium-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), var(--mystical-purple), var(--secondary-color));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.medium-card:hover::before {
    opacity: 1;
}

.medium-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(124, 58, 237, 0.3);
    border-color: var(--accent-color);
}

.medium-photo {
    position: relative;
    height: 300px;
    overflow: hidden;
    background: linear-gradient(135deg, var(--mystical-purple), var(--secondary-color));
}

.medium-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.medium-card:hover .medium-photo img {
    transform: scale(1.05);
}

.photo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.3);
}

.medium-info {
    padding: 2rem;
}

.medium-info h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
    text-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
}

.medium-title {
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    color: var(--mystical-purple);
    margin-bottom: 1rem;
    font-style: italic;
}

.medium-description {
    line-height: 1.6;
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

.medium-specialties {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.specialty-tag {
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.3);
    color: var(--accent-color);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.specialty-tag:hover {
    background: rgba(245, 158, 11, 0.2);
    transform: scale(1.05);
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.about-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(124, 58, 237, 0.3);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.about-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.1), transparent);
    transition: left 0.6s ease;
}

.about-card:hover::before {
    left: 100%;
}

.about-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
    border-color: var(--accent-color);
}

.about-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-size: 2rem;
    color: white;
    background: linear-gradient(135deg, var(--mystical-purple), var(--secondary-color));
    position: relative;
}

.about-icon::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, var(--accent-color), var(--mystical-purple));
    border-radius: 50%;
    z-index: -1;
    opacity: 0.5;
}

.about-card h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.about-card p {
    line-height: 1.6;
    opacity: 0.9;
}

.taro-info-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
}

.taro-history, .taro-types, .taro-meaning {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(124, 58, 237, 0.3);
    backdrop-filter: blur(10px);
}

.taro-history h3, .taro-types h3, .taro-meaning h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.taro-history p, .taro-meaning p {
    line-height: 1.6;
    margin-bottom: 1rem;
}

.spread-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.spread-type {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid rgba(124, 58, 237, 0.2);
    transition: all 0.3s ease;
}

.spread-type:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
}

.spread-type h4 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
}

.spread-type p {
    font-size: 0.9rem;
    opacity: 0.8;
    line-height: 1.4;
}

.astrology-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
}

.astrology-basics, .zodiac-signs, .astrology-types, .astrology-modern {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(124, 58, 237, 0.3);
    backdrop-filter: blur(10px);
}

.astrology-basics h3, .zodiac-signs h3, .astrology-types h3, .astrology-modern h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.astrology-basics p, .astrology-modern p {
    line-height: 1.6;
    margin-bottom: 1rem;
}

.zodiac-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.zodiac-element {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid rgba(124, 58, 237, 0.2);
    text-align: center;
    transition: all 0.3s ease;
}

.zodiac-element:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
}

.zodiac-element h4 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.zodiac-element p {
    font-size: 0.9rem;
    opacity: 0.8;
    line-height: 1.4;
}

.astro-services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.astro-service {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid rgba(124, 58, 237, 0.2);
    text-align: center;
    transition: all 0.3s ease;
}

.astro-service:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
}

.astro-service h4 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
}

.order-details-modal {
    max-width: 900px;
    width: 95%;
}

.order-details-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1rem;
}

.order-summary {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(124, 58, 237, 0.3);
}

.order-summary h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

#order-items {
    margin-bottom: 1rem;
}

.order-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.order-item:last-child {
    border-bottom: none;
}

.order-item-name {
    font-weight: 500;
}

.order-item-price {
    color: var(--accent-color);
    font-weight: 600;
}

.order-total {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--accent-color);
    text-align: right;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid rgba(245, 158, 11, 0.3);
}

.order-form {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(124, 58, 237, 0.3);
}

.order-form h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent-color);
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

#order-form .form-group {
    margin-bottom: 1rem;
}

#order-form label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--light-text);
    font-weight: 500;
}

#order-form input,
#order-form textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--light-text);
    font-family: 'Crimson Text', serif;
    font-size: 1rem;
    transition: all 0.3s ease;
}

#order-form input:focus,
#order-form textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.2);
}

#order-form textarea {
    resize: vertical;
    min-height: 80px;
}

.rules-checkbox {
    margin: 1.5rem 0;
}

.checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    cursor: pointer;
    line-height: 1.5;
    color: var(--light-text);
    font-size: 0.9rem;
}

.checkbox-label input[type="checkbox"] {
    width: auto;
    margin: 0;
    margin-top: 2px;
}

.checkmark {
    display: none;
}

#screenshot-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, var(--accent-color), #d97706);
    color: white;
    border: none;
    border-radius: 10px;
    font-family: 'Cinzel', serif;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

#screenshot-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(245, 158, 11, 0.4);
}

#screenshot-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: linear-gradient(135deg, #666, #444);
}

@media (max-width: 768px) {
    .mobile-menu-toggle {
        display: block;
    }
    
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(15, 15, 35, 0.95);
        backdrop-filter: blur(10px);
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;
        border-top: 1px solid rgba(124, 58, 237, 0.3);
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .navbar {
        position: relative;
    }
    
    .hero {
        min-height: 100vh;
        padding: 2rem 0;
    }
    
    .hero-content {
        padding: 0 1rem;
    }
    
    .shop-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .product-card {
        padding: 1.5rem;
    }
    
    .cart-item {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .checkout-actions {
        flex-direction: column;
    }
    
    .mediums-grid {
        grid-template-columns: 1fr;
    }
    
    .medium-photo {
        height: 200px;
    }
    
    .medium-info {
        padding: 1.5rem;
    }
    
    .medium-info h3 {
        font-size: 1.3rem;
    }
    
    .about-grid {
        grid-template-columns: 1fr;
    }
    
    .about-card {
        padding: 1.5rem;
    }
    
    .spread-types {
        grid-template-columns: 1fr;
    }
    
    .zodiac-grid {
        grid-template-columns: 1fr;
    }
    
    .astro-services {
        grid-template-columns: 1fr;
    }
    
    .taro-history, .taro-types, .taro-meaning {
        padding: 1.5rem;
    }
    
    .astrology-basics, .zodiac-signs, .astrology-types, .astrology-modern {
        padding: 1.5rem;
    }
    
    .divination-section {
        padding: 3rem 0;
    }
    
    .order-details-modal {
        max-width: 95%;
        width: 95%;
    }
    
    .order-details-container {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .order-summary,
    .order-form {
        padding: 1rem;
    }
    
    .checkbox-label {
        font-size: 0.8rem;
        line-height: 1.4;
    }
    
    .particles,
    .fireflies {
        display: none;
    }
    
    .stars {
        background-size: 300px 150px;
    }
    
    .stars::before {
        background-size: 280px 200px;
    }
    
    .nebula {
        display: none;
    }
    
    .background-constellations {
        display: none;
    }
    
    .astrology-stars,
    .tarot-cards {
        display: none;
    }
    
    .moon {
        width: 60px;
        height: 60px;
        top: 5%;
        right: 5%;
    }
}
