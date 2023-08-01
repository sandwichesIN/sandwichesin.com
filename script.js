document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button_dr');
    const audio = document.getElementById('crunch-sound');

    // Check if the button and audio elements are found before adding the event listener
    if (button && audio) {
        button.addEventListener('click', function () {
            audio.play();
            setTimeout(function () {
                window.location.href = 'door-step_del.html';
            }, 1000); // Add a delay of 1 second before navigating to the next page
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button_pk');
    const audio = document.getElementById('crunch-sound');

    // Check if the button and audio elements are found before adding the event listener
    if (button && audio) {
        button.addEventListener('click', function () {
            audio.play();
            setTimeout(function () {
                window.location.href = 'cl_kitchen_pk.html';
            }, 1000); // Add a delay of 1 second before navigating to the next page
        });
    }
});