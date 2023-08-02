const emojiSelectorIcon = document.getElementById('emojiSelectorIcon');

const emojiSelector = document.getElementById('emojiSelector');

const emojiList = document.getElementById('emojiList');

const emojiSearch = document.getElementById('emojiSearch');

emojiSelectorIcon.addEventListener('click', () => {

    emojiSelector.classList.toggle('active');
});

fetch('https://emoji-api.com/emojis?access_key=bcfe9eddef3dc1df0743ea53c1a25961c1497bb8')

    .then(res => res.json())

    .then(data => loadEmoji(data))

function loadEmoji(data) {

    data.forEach(emoji => {

        let li = document.createElement('li');
        li.setAttribute('emoji-name', emoji.slug);

        li.textContent = emoji.character;
        emojiList.appendChild(li);
    });
}

emojiSearch.addEventListener('keyup', e => {
    let value = e.target.value;
    let emoji = document.querySelectorAll('#emojiList li');
    emojis.forEach(emoji => {
        if (emoji.getAttribute('emoji-name').toLowerCase().includes(value)) {
            emoji.style.display = 'flex';

        }
        else {
            emoji.style.display = 'none';
        }
    })
})