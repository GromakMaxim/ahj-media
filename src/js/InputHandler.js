import DateService from "./DateService";
import GeoService from "./GeoService";

export default class InputHandler {
    constructor() {
        this.setTextInputFunctionality();
    }

    async setTextInputFunctionality() {
        const modalWindow = document.getElementsByClassName('geo-error-modal')[0];
        const textArea = document.getElementsByClassName('feed-input')[0];
        const postContainer = document.getElementsByClassName('feed-posts-container')[0];
        textArea.addEventListener('keypress', async (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                console.log(GeoService.geo)
                try {
                    await InputHandler.checkGeoData(GeoService.geo);
                    let post = await this.buildTxtPost(textArea.value);
                    postContainer.appendChild(post);
                    textArea.value = '';
                    postContainer.scroll(0, -1000);
                } catch (e) {
                    modalWindow.classList.remove('hidden');
                }
            }
        });

        const geoTextArea = document.getElementsByClassName('geo-error-input')[0];
        geoTextArea.addEventListener('keypress', async (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                await validateInput();
            }
        })

        const modalCancelBtn = document.getElementsByClassName('geo-error-cancel-btn')[0];
        modalCancelBtn.addEventListener('click', (event) => {
            event.preventDefault();
            modalWindow.classList.add('hidden');
        });

        const modalOkBtn = document.getElementsByClassName('geo-error-ok-btn')[0];
        modalOkBtn.addEventListener('click', async (event) => {
            event.preventDefault();
            await validateInput();
        });

        async function validateInput() {
            try {
                InputHandler.checkGeoData(geoTextArea.value.trim());
                GeoService.geo = geoTextArea.value.trim();
                geoTextArea.value = '';
                modalWindow.classList.add('hidden');
            } catch (e) {
                GeoService.geo = null;
                geoTextArea.value = '';
            }
        }
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
        postCoordinates.textContent = GeoService.geo;

        let postPic = document.createElement('div');
        postPic.classList.add('feed_post-watched-pic');

        secondLine.append(postCoordinates);
        secondLine.append(postPic);

        feedPost.appendChild(firstLine);
        feedPost.appendChild(secondLine);

        return feedPost;
    }

    static async checkGeoData(geoRaw) {
        if (geoRaw === null || geoRaw === undefined || geoRaw === '') {
            throw new Error('illegal geodata:' + geoRaw);
        }

        if (!geoRaw.includes("[") || !geoRaw.includes("]") || !geoRaw.includes(',') || !geoRaw.includes(' ')) {
            throw new Error('wrong input geodata. missed symbol.');
        }

        if (geoRaw.match(/[a-zA-Z]/)) throw new Error('wrong input geodata. letters not allowed.');
        if (!geoRaw.match(/[0-9]/)) throw new Error('wrong input geodata. digits not found.');

        if (geoRaw.split(".").length - 1 !== 2 && geoRaw.split(".").length - 1 !== 1 && geoRaw.split(".").length - 1 !== 0) throw new Error('wrong input geodata. more than 2 dots.');

        return true;
    }
}
