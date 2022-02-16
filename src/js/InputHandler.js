import DateService from "./DateService";

export default class InputHandler {
    constructor() {
        this.setTextInputFunctionality();
    }

    async setTextInputFunctionality() {
        const textArea = document.getElementsByClassName('feed-input')[0];
        const postContainer = document.getElementsByClassName('feed-posts-container')[0];
        textArea.addEventListener('keypress', async (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                let post = await this.buildTxtPost(textArea.value);
                postContainer.appendChild(post);
                textArea.value = '';
            }
        })
    }

    async buildTxtPost(txt) {
        let feedPost = document.createElement('div');
        feedPost.classList.add('feed-post');

        let firstLine = document.createElement('div');
        firstLine.classList.add('feed-post-first_line');

        let postContent = document.createElement('div');
        postContent.classList.add('feed-post-content');
        postContent.textContent = txt;

        let postDate = document.createElement('div');
        postDate.classList.add('feed-post-date');
        postDate.textContent = DateService.getCurrentDate() + ' ' + DateService.getCurrentTime();

        firstLine.append(postContent);
        firstLine.append(postDate);

        let secondLine = document.createElement('div');
        secondLine.classList.add('feed-post-second_line');

        let postCoordinates = document.createElement('div');
        postCoordinates.classList.add('feed-post-coordinate');
        postCoordinates.textContent = 'aaaaaaaaaaaaaaaaaaaaaa';

        let postPic = document.createElement('div');
        postPic.classList.add('feed_post-watched-pic');

        secondLine.append(postCoordinates);
        secondLine.append(postPic);

        feedPost.appendChild(firstLine);
        feedPost.appendChild(secondLine);

        return feedPost;
    }
}
