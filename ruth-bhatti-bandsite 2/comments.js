const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

const comments = [
    {name: "Victor Pinto", date: '10/29/2023', text:'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'},
    { name: 'Christina Cabrera', date: '10/28/2023', text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' },
    { name: 'Isaac Tadesse', date: '10/20/2023', text: 'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.' }
];

function renderComments(data) {
    commentsList.innerHTML = '';
    data.forEach(comment => {
        console.log(comment)
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        const avatarElement = document.createElement('img');
        avatarElement.classList.add('comment__avatar');
        avatarElement.src = './assets/images/comment__avatar.jpg'; 

        const contentElement = document.createElement('div');
        contentElement.classList.add('comment__content');

        const headerElement = document.createElement('div');
        headerElement.classList.add(`comment__header`);

        const nameElement = document.createElement('h3');
        nameElement.classList.add('comment__name');
        nameElement.innerText = comment.name;

        const dateElement = document.createElement('span');
        dateElement.classList.add('comment__date');
        dateElement.innerText = comment.date;

        const textElement = document.createElement('p');
        textElement.classList.add('comment__text');
        textElement.innerText = comment.text;

        contentElement.appendChild(headerElement);
        headerElement.appendChild(nameElement);
        headerElement.appendChild(dateElement);
        contentElement.appendChild(textElement);

        commentElement.appendChild(avatarElement);


        commentElement.appendChild(contentElement);

        commentsList.appendChild(commentElement);
    });
};

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    const newComment = {
        name: nameInput.value,
        date: new Date().toLocaleDateString(), 
        text: commentInput.value
    };

    comments.unshift(newComment);

    renderComments(comments);

    nameInput.value = '';
    commentInput.value = '';
});

renderComments(comments);

