const soundClips = [
    {
        title: "80 million people",
        src: "assets/sounds/80-million-people.mp3",
        keystroke: "1"
    },
    {
        title: "are you sure",
        src: "assets/sounds/are-you-sure.mp3",
        keystroke: "2"
    },
    {
        title: "bastard",
        src: "assets/sounds/bastard.mp3",
        keystroke: "3"
    },
    {
        title: "come down here",
        src: "assets/sounds/come-down-here.mp3",
        keystroke: "4"
    },
    {
        title: "does that make you feel stressed",
        src: "assets/sounds/does-that-make-you-feel-stressed.mp3",
        keystroke: "5"
    },
    {
        title: "easy to remember",
        src: "assets/sounds/easy-to-remember.mp3",
        keystroke: "6"
    },
    {
        title: "fiddle about with it",
        src: "assets/sounds/fiddle-about-with-it.mp3",
        keystroke: "7"
    },
    {
        title: "fire",
        src: "assets/sounds/fire.mp3",
        keystroke: "8"
    },
    {
        title: "fix my pants",
        src: "assets/sounds/fix-my-pants.mp3",
        keystroke: "9"
    },
    {
        title: "flip off",
        src: "assets/sounds/flip-off.mp3",
        keystroke: "0"
    },
    {
        title: "forcing unexpected reboot",
        src: "assets/sounds/forcing-unexpected-reboot.mp3",
        keystroke: "q"
    },
    {
        title: "have you tried sticking it up",
        src: "assets/sounds/have-you-tried-sticking-it-up.mp3",
        keystroke: "w"
    },
    {
        title: "have you tried",
        src: "assets/sounds/have-you-tried.mp3",
        keystroke: "e"
    },
    {
        title: "hello it moss",
        src: "assets/sounds/hello-it-2.mp3",
        keystroke: "r"
    },
    {
        title: "hello it",
        src: "assets/sounds/hello-it.mp3",
        keystroke: "t"
    },
    {
        title: "i am declaring war",
        src: "assets/sounds/i-am-declaring-war.mp3",
        keystroke: "y"
    },
    {
        title: "i lie",
        src: "assets/sounds/i-lie.mp3",
        keystroke: "u"
    },
    {
        title: "i told her",
        src: "assets/sounds/i-told-her.mp3",
        keystroke: "i"
    },
    {
        title: "i'm disabled",
        src: "assets/sounds/im-disabled.mp3",
        keystroke: "o"
    },
    {
        title: "i'm sorry",
        src: "assets/sounds/im-sorry.mp3",
        keystroke: "p"
    },
    {
        title: "it can't be done",
        src: "assets/sounds/it-cant-be-done.mp3",
        keystroke: "a"
    },
    {
        title: "loosing blood",
        src: "assets/sounds/loosing-blood.mp3",
        keystroke: "s"
    },
    {
        title: "moss ringtone",
        src: "assets/sounds/moss-ringtone.mp3",
        keystroke: "d"
    },
    {
        title: "need to turn it on",
        src: "assets/sounds/need-to-turn-it-on.mp3",
        keystroke: "f"
    },
    {
        title: "new emergency number",
        src: "assets/sounds/new-emergency-number.mp3",
        keystroke: "g"
    },
    {
        title: "nice screensaver",
        src: "assets/sounds/nice-screensaver.mp3",
        keystroke: "h"
    },
    {
        title: "not afraid",
        src: "assets/sounds/not-afraid.mp3",
        keystroke: "j"
    },
    {
        title: "pull down my trousers",
        src: "assets/sounds/pull-down-my-trousers.mp3",
        keystroke: "k"
    },
    {
        title: "sent an email",
        src: "assets/sounds/sent-an-email.mp3",
        keystroke: "l"
    },
    {
        title: "stop",
        src: "assets/sounds/stop.mp3",
        keystroke: "z"
    },
    {
        title: "the it crowd opening theme",
        src: "assets/sounds/the-it-crowd-opening-theme.mp3",
        keystroke: "x"
    },
    {
        title: "you burk",
        src: "assets/sounds/you-burk.mp3",
        keystroke: "c"
    },
    {
        title: "you there fix my pants",
        src: "assets/sounds/you-there-fix-my-pants.mp3",
        keystroke: "v"
    },
    {
        title: "you're in big trouble",
        src: "assets/sounds/youre-in-big-trouble.mp3",
        keystroke: "b"
    }
]

// const soundClips = [
//     {
//         title: "80 million people",
//         src: "assets/sounds/80-million-people.mp3",
//         keystroke: "a"
//     },
//     {
//         title: "are you sure",
//         src: "assets/sounds/are-you-sure.mp3",
//         keystroke: "s"
//     }
// ];

// let outputButtons = document.querySelector('#button-container')
// soundClips.forEach((clip) => {
//     document.querySelector('#button-container').innerHTML += '<div class="button" data-src="' + clip.src + '">' + clip.title + '</div>';
// })

soundClips.forEach((clip) => {
    // outputButtons.innerHTML += '<div id="' + clip.title + '" class="button" data-src="' + clip.src + '">' + clip.title + '</div>';
    document.querySelector('#button-container').innerHTML += '<div id="' + clip.title + '" class="button" data-src="' + clip.src + '" data-key="' + clip.keystroke + '">' + clip.title + ' - <span class="keystroke">' + clip.keystroke + '</span></div>';

})

let buttonElements = document.querySelectorAll('.button');
buttonElements.forEach((title)=>{
    title.addEventListener('click', ()=>{
        let audioPath = title.getAttribute('data-src')
        playAudio(audioPath)
    })
});


document.addEventListener('keydown', (e)=>{
    soundClips.forEach((title)=>{
        if(title.keystroke === e.key) {
            let audioPath = title.src
            playAudio(audioPath)
        }
    })

})


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


// document.addEventListener('keydown', (e)=>{
// })


