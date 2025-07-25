// Birthday celebration functions
function celebrate() {
    // Create fireworks effect
    createFireworks();

    // Play celebration sound (if available)
    playBirthdaySound();

    // Add confetti effect
    createConfetti();

    // Show special message
    showSpecialMessage();
}

function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + '%';
            firework.style.top = Math.random() * 100 + '%';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            fireworksContainer.appendChild(firework);

            // Remove firework after animation
            setTimeout(() => {
                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }
            }, 1000);
        }, i * 100);
    }
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';

    document.body.appendChild(confettiContainer);

    const confettiColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = 'confettiFall 3s linear forwards';

            confettiContainer.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 50);
    }

    // Remove container after all confetti falls
    setTimeout(() => {
        if (confettiContainer.parentNode) {
            confettiContainer.parentNode.removeChild(confettiContainer);
        }
    }, 5000);
}

function showSpecialMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.95);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            text-align: center;
            z-index: 1001;
            animation: specialMessagePop 0.5s ease-out;
        ">
            <h2 style="color: #ff6b6b; margin-bottom: 15px;">🎉 Chúc Mừng Sinh Nhật Gạo! 🎉</h2>
            <p style="color: #333; font-size: 1.1rem; margin-bottom: 15px;">
                Chúc em luôn vui vẻ, hạnh phúc và thành công!
            </p>
            <p style="color: #4ecdc4; font-weight: bold;">
                Người bạn tương lai của em 💕
            </p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                margin-top: 15px;
                padding: 8px 20px;
                background: #4ecdc4;
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
            ">Đóng</button>
        </div>
    `;

    document.body.appendChild(messageDiv);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 5000);
}

function playBirthdaySound() {
    // Create a simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5 note
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
        console.log('Audio not supported');
    }
}

// Add CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    @keyframes specialMessagePop {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Add floating hearts effect
function createFloatingHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '999';
    heart.style.animation = 'floatUp 4s linear forwards';

    document.body.appendChild(heart);

    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 4000);
}

// Add floating hearts CSS
const heartsStyle = document.createElement('style');
heartsStyle.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartsStyle);

// Create floating hearts periodically
setInterval(createFloatingHearts, 3000);

// Add photo hover effects
document.addEventListener('DOMContentLoaded', function () {
    const photos = document.querySelectorAll('.photo-item img');

    photos.forEach(photo => {
        photo.addEventListener('click', function () {
            // Create enlarged view
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                cursor: pointer;
            `;

            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 10px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            `;

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
});