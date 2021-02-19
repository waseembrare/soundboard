// const sounds = [
//     {
//         title: "80 million people",
//         'src': "assets/sounds/80-million-people.mp3"
//     },
//     {
//         title: "Are you sure",
//         'src': "assets/sounds/sounds/Are-you-sure.mp3"
//     },
//     {
//         title: "Bastard",
//         'src': "assets/sounds/Bastard.mp3"
//     },
//     {
//         title: "Come down here",
//         'src': "assets/sounds/Come-down-here.mp3"
//     },
//     {
//         title: "Does that make you feel stressed",
//         'src': "assets/sounds/Does-that-make-you-feel-stressed.mp3"
//     },
//     {
//         title: "Easy to remember",
//         'src': "assets/sounds/Easy-to-remember.mp3"
//     },
//     {
//         title: "Fiddle about with it",
//         'src': "assets/sounds/Fiddle-About-With-It.mp3"
//     },
//     {
//         title: "Fire",
//         'src': "assets/sounds/Fire.mp3"
//     },
//     {
//         title: "Fix my pants",
//         'src': "assets/sounds/Fix-My-Pants.mp3"
//     },
//     {
//         title: "Flip off",
//         'src': "assets/sounds/Flip-off.mp3"
//     },
//     {
//         title: "Forcing unexpected reboot",
//         'src': "assets/sounds/Forcing-unexpected-reboot.mp3"
//     },
//     {
//         title: "Have you tried sticking it up",
//         'src': "assets/sounds/Have-you-tried-sticking-it-up.mp3"
//     },
//     {
//         title: "Have you tried",
//         'src': "assets/sounds/have-you-tried.mp3"
//     },
//     {
//         title: "Hello IT 2",
//         'src': "assets/sounds/Hello-IT-2.mp3"
//     },
//     {
//         title: "Hello IT",
//         'src': "assets/sounds/Hello-IT.mp3"
//     },
//     {
//         title: "I am declaring war",
//         'src': "assets/sounds/I-am-declaring-war.mp3"
//     },
//     {
//         title: "I lie",
//         'src': "assets/sounds/I-lie.mp3"
//     },
//     {
//         title: "I told her",
//         'src': "assets/sounds/I-told-her.mp3"
//     },
//     {
//         title: "I'm disabled",
//         'src': "assets/sounds/Im-Disabled.mp3"
//     },
//     {
//         title: "I'm sorry",
//         'src': "assets/sounds/Im-sorry.mp3"
//     },
//     {
//         title: "It can't be done",
//         'src': "assets/sounds/It-cant-be-done.mp3"
//     },
//     {
//         title: "Loosing blood",
//         'src': "assets/sounds/Loosing-blood.mp3"
//     },
//     {
//         title: "Moss ringtone",
//         'src': "assets/sounds/Moss-ringtone.mp3"
//     },
//     {
//         title: "Need to turn it on",
//         'src': "assets/sounds/Need-to-turn-it-on.mp3"
//     },
//     {
//         title: "New emergency number",
//         'src': "assets/sounds/New-Emergency-Number.mp3"
//     },
//     {
//         title: "Nice screensaver",
//         'src': "assets/sounds/Nice-screensaver.mp3"
//     },
//     {
//         title: "",
//         'src': "assets/sounds/"
//     },
//     {
//         title: "",
//         'src': "assets/sounds/"
//     },
//     {
//         title: "",
//         'src': "assets/sounds/"
//     },
//     {
//         title: "",
//         'src': "assets/sounds/"
//     },
//     {
//         title: "",
//         'src': "assets/sounds/"
//     },
//     {
//         title: "",
//         'src': "assets/sounds/"
//     },
//     {
//         title: "",
//         'src': "assets/sounds/"
//     },
//     {
//         title: "",
//         'src': "assets/sounds/"
//     },
//     {
//         title: "",
//         'src': "assets/sounds/"
//     }
// ]

const soundClips = [
    {
        title: "80 million people",
        src: "assets/sounds/80-million-people.mp3"
    },
    {
        title: "Are you sure",
        src: "assets/sounds/Are-you-sure.mp3"
    }
];



// let outputButtons = document.querySelector('#button-container').innerHTML

// soundClips.forEach((clip) => {
//     document.querySelector('#button-container').innerHTML += '<div class="button" data-src="' + clip.src + '">' + clip.title + '</div>';
// })

soundClips.forEach((clip) => {
    document.querySelector('#button-container').innerHTML += '<div id="' + clip.title + '" class="button" data-src="' + clip.src + '">' + clip.title + '</div>';
})

let buttonElements = document.querySelectorAll('.button');

buttonElements.forEach((title)=>{
    title.addEventListener('click', ()=>{
        // alert(title.getAttribute('data-src'))
        let audioPath = title.getAttribute('data-src')

        console.log(audioPath)
        playAudio(audioPath)
        // console.log(playAudio)

    })
});

function playAudio(audioPath) {
    document.querySelector('#audiobar-container').innerHTML =
        '<audio src="' + audioPath +  '" </audio>';
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

// type="audio/mpeg

// <audio
//     controls
//     src="/media/cc0-audio/t-rex-roar.mp3">
// </audio>

// <audio id="myAudio">
//
//     <source src="horse.ogg" type="audio/ogg">
//         <source src="horse.mp3" type="audio/mpeg">
//             Your browser does not support the audio element.
// </audio>
//


// FOR IN LOOP
// // const  = { a: 1, b: 2, c: 3 };
//
// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

