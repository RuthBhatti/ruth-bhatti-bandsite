import BandSiteApi from './band-site-api.js';

// API key
const apiKey = 'c5744128-f754-4ef7-9732-fbe842a0a47c';
const api = new BandSiteApi(apiKey);

const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

async function loadComments() {
    const comments = await api.getComments();
    renderComments(comments);
}

async function addComment(event) {
    event.preventDefault();  // Prevent the form from refreshing the page

    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    const newComment = {
        name: nameInput.value,
        comment: commentInput.value
    };

    await api.postComment(newComment);
    loadComments();

    nameInput.value = '';
    commentInput.value = '';
}

function renderComments(comments) {
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        const avatarElement = document.createElement('img');
        avatarElement.classList.add('comment__avatar');
        avatarElement.src = './assets/images/comment__avatar.jpg';

        const contentElement = document.createElement('div');
        contentElement.classList.add('comment__content');

        const headerElement = document.createElement('div');
        headerElement.classList.add('comment__header');

        const nameElement = document.createElement('h3');
        nameElement.classList.add('comment__name');
        nameElement.innerText = comment.name;

        const dateElement = document.createElement('span');
        dateElement.classList.add('comment__date');
        dateElement.innerText = new Date(comment.timestamp).toLocaleDateString();

        const textElement = document.createElement('p');
        textElement.classList.add('comment__text');
        textElement.innerText = comment.comment;

        const likeButton = document.createElement('button');
        likeButton.classList.add('comment__like-button');
        likeButton.innerText = `Like (${comment.likes})`;
        likeButton.addEventListener('click', async () => {
            await api.likeComment(comment.id);
            loadComments();
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('comment__delete-button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', async () => {
            await api.deleteComment(comment.id);
            loadComments();
        });

        contentElement.appendChild(headerElement);
        headerElement.appendChild(nameElement);
        headerElement.appendChild(dateElement);
        contentElement.appendChild(textElement);
        contentElement.appendChild(likeButton);
        contentElement.appendChild(deleteButton);

        commentElement.appendChild(avatarElement);
        commentElement.appendChild(contentElement);

        commentsList.appendChild(commentElement);
    });
}

commentForm.addEventListener('submit', addComment);

// Initial load of comments
loadComments();
