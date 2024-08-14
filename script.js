function spinWheel(wheelId) {
    const wheel = document.getElementById(wheelId);
    const options = wheelId === 'dinnerWheel' 
        ? ['盖浇饭', '冒菜', '面粉饵块', '火锅', '汉堡'] 
        : ['包子稀饭', '手抓饼', '豆浆油条', '肉夹馍'];

    const randomDegree = Math.floor(Math.random() * 360) + (360 * 3); // Ensures full rotations
    const chosenIndex = Math.floor(randomDegree / (360 / options.length)) % options.length;

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        alert(`你可以吃：${options[chosenIndex]}`);
        wheel.style.transition = 'none';
        wheel.style.transform = 'rotate(0deg)';
    }, 4000);
}
