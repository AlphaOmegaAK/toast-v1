const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotification();
    console.log("Clicked !");
})

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = "Thank you for taking the the time for viewing one of my mini-projects"

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);

}