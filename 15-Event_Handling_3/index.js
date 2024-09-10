const feedbackForm = document.getElementById('feedbackForm');

const responseDiv = document.getElementById('response');

console.log(feedbackForm);

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();  //prevent auto submission data's

    const formData = new FormData(this);

    console.log(formData);

    //converting into jason type

    const formDataJson = {};

    formData.forEach((value, key) => {
        formDataJson[key] = value;
    });

    console.log(formDataJson); //form data displayed in the console

    //display data in ui

    const jsonString = JSON.stringify(formDataJson, null, 2);

    responseDiv.innerHTML = `<pre>${jsonString}</pre>`;

    feedbackForm.reset();
});