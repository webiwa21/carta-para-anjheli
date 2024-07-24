function playAnimation() {
    const message = document.querySelector('.message');
    message.style.opacity = '1';

    const heart = document.querySelector('.heart');
    heart.style.animation = 'none';
    setTimeout(() => {
        heart.style.animation = '';
    }, 10);

    const bear = document.querySelector('.bear');
    bear.style.animation = 'moveBear 3s ease-in-out infinite';
}
