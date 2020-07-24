// Adding Clarifai script
const scriptTag = document.createElement('script');
scriptTag.type = 'text/javascript';
scriptTag.src = 'https://sdk.clarifai.com/js/clarifai-latest.js';
// document.querySelector('body').appendChild(scriptTag);

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//     if (message.txt === 'hello') {

//         let outterDiv = document.createElement('div');
//         outterDiv.id = "img-div";

//         let inputBox = document.createElement('input');
//         inputBox.type = "text";
//         inputBox.id = "input"

//         let button = document.createElement('button');
//         button.innerText = 'Click me'
//         button.onclick = retrieveData;

//         outterDiv.appendChild(inputBox)
//         outterDiv.appendChild(button)



//         document.querySelector('body').prepend(outterDiv)
//     }
// }

// function retrieveData() {
//     const url = document.getElementById("input").value;
//     // console.log(url);
//     // console.log(this);
//     let celeb;
//     const app = new Clarifai.App({
//         apiKey: 'ff472be54e094115b755eaba621826b6',
//     });
//     app.models
//         .predict(
//             'e466caa0619f444ab97497640cefc4dc',
//             url
//         )
//         .then(
//             function (response) {
//                 celeb = (response.outputs[0].data.regions[0].data.concepts[0].name);
//                 alert(`This person looks like ${celeb}!`)
//             },
//             function (err) {
//                 console.log(err);
//             }
//         );

// }



chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        console.log(message);
        if (message.type === "getText") nightMode();
        else console.log("hi")
    }
);



function nightMode() {
    (
        function () {
            // the css we are going to inject
            const css = 'html {-webkit-filter: invert(100%);'
                + '-moz-filter: invert(100%);'
                + '-o-filter: invert(100%);'
                + '-ms-filter: invert(100%); }';

            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            // injecting the css to the head
            head.appendChild(style);
        }());

    (
        function () {
            // the css we are going to inject
            const css = 'html img {-webkit-filter: invert(100%);}';

            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            // injecting the css to the head
            head.appendChild(style);
        }());

    (
        function () {
            // the css we are going to inject
            const css = 'html video {-webkit-filter: invert(100%);}';

            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            // injecting the css to the head
            head.appendChild(style);
        }());
}






// function popup(e) {
//     var link = document.URL;
//     alert("clicked");
// }

// var checkBox = document.querySelector('.checkbox');
// plusBtn.addEventListener('click', popup);
