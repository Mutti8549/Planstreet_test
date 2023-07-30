// document.addEventListener("DOMContentLoaded", function() {
//     const convertButton = document.getElementById("convertButton");
//     const inputText = document.getElementById("inputText");
//     const convertedText = document.getElementById("convertedText");


//     convertButton.addEventListener("click", function() {
//       const text = inputText.value;
//       const converted = text.replace(/[^a-zA-Z0-9]+/g, "_");
//       convertedText.textContent = converted;

//       // Select the converted text for easy copying
//       const range = document.createRange();
//       range.selectNodeContents(convertedText);
//       const selection = window.getSelection();
//       selection.removeAllRanges();
//       selection.addRange(range);

//       // Copy the selected text to clipboard
//       document.execCommand("copy");

//       // Deselect the text after copying
//       selection.removeAllRanges();



//     });
//   });

// ++++++++++++++++

// document.addEventListener("DOMContentLoaded", function() {
//     const convertButton = document.getElementById("convertButton");
//     const inputText = document.getElementById("inputText");
//     const convertedText = document.getElementById("convertedText");

//     convertButton.addEventListener("click", function() {
//       const text = inputText.value;

//       // Replace spaces and special characters with underscores
//       const converted = text.replace(/[^a-zA-Z0-9]+/g, "_");

//       // Remove leading numbers from the converted text
//       const finalConverted = converted.replace(/^\d+/, "");

//       convertedText.textContent = finalConverted;

//       // Select the converted text for easy copying
//       const range = document.createRange();
//       range.selectNodeContents(convertedText);
//       const selection = window.getSelection();
//       selection.removeAllRanges();
//       selection.addRange(range);

//       // Copy the selected text to clipboard
//       document.execCommand("copy");

//       // Deselect the text after copying
//       selection.removeAllRanges();

//       alert("Converted text copied to clipboard!");
//     });
//   });


// +++++++++++

document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const inputText = document.getElementById("inputText");
    const convertedText = document.getElementById("convertedText");

    convertButton.addEventListener("click", function () {
        const text = inputText.value;
        const converted = text.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^(\d+)/, '');
        convertedText.textContent = converted;

        // Select the converted text for easy copying
        const range = document.createRange();
        range.selectNodeContents(convertedText);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        // Copy the selected text to clipboard
        document.execCommand("copy");

        // Deselect the text after copying
        selection.removeAllRanges();

        //   alert("Converted text copied to clipboard!");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "navigation.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.querySelector("nav").innerHTML = xhr.responseText;
            } else {
                console.error("Failed to load navigation.html");
            }
        }
    };
    xhr.send();
});


