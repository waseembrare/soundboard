const soundClips = [
    {
        title: "80 million people",
        src: "assets/sounds/80-million-people.mp3"
    },
    {
        title: "are you sure",
        src: "assets/sounds/are-you-sure.mp3"
    },
    {
        title: "bastard",
        src: "assets/sounds/bastard.mp3"
    },
    {
        title: "come down here",
        src: "assets/sounds/come-down-here.mp3"
    },
    {
        title: "does that make you feel stressed",
        src: "assets/sounds/does-that-make-you-feel-stressed.mp3"
    },
    {
        title: "easy to remember",
        src: "assets/sounds/easy-to-remember.mp3"
    },
    {
        title: "fiddle about with it",
        src: "assets/sounds/fiddle-about-with-it.mp3"
    },
    {
        title: "fire",
        src: "assets/sounds/fire.mp3"
    },
    {
        title: "fix my pants",
        src: "assets/sounds/fix-my-pants.mp3"
    },
    {
        title: "flip off",
        src: "assets/sounds/flip-off.mp3"
    },
    {
        title: "forcing unexpected reboot",
        src: "assets/sounds/forcing-unexpected-reboot.mp3"
    },
    {
        title: "have you tried sticking it up",
        src: "assets/sounds/have-you-tried-sticking-it-up.mp3"
    },
    {
        title: "have you tried",
        src: "assets/sounds/have-you-tried.mp3"
    },
    {
        title: "hello it moss",
        src: "assets/sounds/hello-it-2.mp3"
    },
    {
        title: "hello it",
        src: "assets/sounds/hello-it.mp3"
    },
    {
        title: "i am declaring war",
        src: "assets/sounds/i-am-declaring-war.mp3"
    },
    {
        title: "i lie",
        src: "assets/sounds/i-lie.mp3"
    },
    {
        title: "i told her",
        src: "assets/sounds/i-told-her.mp3"
    },
    {
        title: "i'm disabled",
        src: "assets/sounds/im-disabled.mp3"
    },
    {
        title: "i'm sorry",
        src: "assets/sounds/im-sorry.mp3"
    },
    {
        title: "it can't be done",
        src: "assets/sounds/it-cant-be-done.mp3"
    },
    {
        title: "loosing blood",
        src: "assets/sounds/loosing-blood.mp3"
    },
    {
        title: "moss ringtone",
        src: "assets/sounds/moss-ringtone.mp3"
    },
    {
        title: "need to turn it on",
        src: "assets/sounds/need-to-turn-it-on.mp3"
    },
    {
        title: "new emergency number",
        src: "assets/sounds/new-emergency-number.mp3"
    },
    {
        title: "nice screensaver",
        src: "assets/sounds/nice-screensaver.mp3"
    },
    {
        title: "not afraid",
        src: "assets/sounds/pull-down-my-trousers.mp3"
    },
    {
        title: "pull down my trousers",
        src: "assets/sounds/pull-down-my-trousers.mp3"
    },
    {
        title: "sent an email",
        src: "assets/sounds/sent-an-email.mp3"
    },
    {
        title: "stop",
        src: "assets/sounds/stop.mp3"
    },
    {
        title: "the it crowd opening theme",
        src: "assets/sounds/the-it-crowd-opening-theme.mp3"
    },
    {
        title: "you burk",
        src: "assets/sounds/you-burk.mp3"
    },
    {
        title: "you there fix my pants",
        src: "assets/sounds/you-there-fix-my-pants.mp3"
    },
    {
        title: "you're in big trouble",
        src: "assets/sounds/youre-in-big-trouble.mp3"
    }
]

// const soundClips = [
//     {
//         title: "80 million people",
//         src: "assets/sounds/80-million-people.mp3",
//         keystroke: "q"
//     },
//     {
//         title: "are you sure",
//         src: "assets/sounds/are-you-sure.mp3",
//         keystroke: "w"
//     }
// ];

// let outputButtons = document.querySelector('#button-container')
// soundClips.forEach((clip) => {
//     document.querySelector('#button-container').innerHTML += '<div class="button" data-src="' + clip.src + '">' + clip.title + '</div>';
// })

soundClips.forEach((clip) => {
    // outputButtons.innerHTML += '<div id="' + clip.title + '" class="button" data-src="' + clip.src + '">' + clip.title + '</div>';
    document.querySelector('#button-container').innerHTML += '<div id="' + clip.title + '" class="button" data-src="' + clip.src + '">' + clip.title + '</div>';

})

let buttonElements = document.querySelectorAll('.button');
buttonElements.forEach((title)=>{
    title.addEventListener('click', ()=>{
        let audioPath = title.getAttribute('data-src')
        // console.log(audioPath)
        playAudio(audioPath)
    })
});

function playAudio(audioPath) {
    document.querySelector('#audiobar-container').innerHTML =
        '<audio src="' + audioPath +  '"> </audio>';
    return document.querySelector('audio').play();
}

// function playAudio(audioPath) {
//     // '<audio controls src="' + audioPath + '"></audio>'
//
//     return document.querySelector('#audiobar-container').innerHTML =
//         '<audio controls src="' + audioPath +  '" </audio>'
//     document.querySelector('audio').play()
//
// }




