const addStamp = () => {
    // Create image tag
    const img = document.createElement('img');
    img.setAttribute('class', 'stamp');
    img.src = 'https://cdn.discordapp.com/attachments/634800474083557397/643095035902165020/1993_normal_1435891142_coderdojo-logo.png';
    
    // Append image tag
    document.getElementById('stamps').appendChild(img);
}

const addStampButton = document.getElementById('stamp-button')
addStampButton.addEventListener('click', addStamp)