
function retrieveData() {
    const url = document.getElementById("input").value;
    console.log(url);
    let celeb;
    const app = new Clarifai.App({
        apiKey: 'ff472be54e094115b755eaba621826b6',
    });
    app.models
        .predict(
            'e466caa0619f444ab97497640cefc4dc',
            url
        )
        .then(
            function (response) {
                celeb = (response.outputs[0].data.regions[0].data.concepts[0].name);
                alert(`This person looks like ${celeb}!`)
            },
            function (err) {
                console.log(err);
            }
        );

}
// nightMode
document.addEventListener('click', function () {
    var link = document.getElementById('checkbox');
    // onClick's logic below:
    link.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "getText" }, function (response) {
                // alert(response);
            });
        });
    });
});



// document.addEventListener('click', function () {
//     var link = document.getElementsById('button');
//     // onClick's logic below:
//     link.addEventListener('click', function () {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, { type: "celebrity-button" }, function (response) {
//                 // alert(response);

//             });
//         });
//     });
// });


document.addEventListener('click', function () {
    var link = document.getElementById('button');
    // onClick's logic below:
    link.addEventListener('click', function () {
        retrieveData();
    });
});



