const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myBOMList'));
}

function setChapterList() {
    localStorage.setItem('myBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    // Remove the character from the end of the string
    chapter = chapter.slice(0, -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
