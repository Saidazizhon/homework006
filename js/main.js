document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");
    const form = document.querySelector(".form");

    // Formani yuborilishining oldini olish
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    btn.addEventListener("click", () => {
        let inputvalue = input.value;

        const TEL_NUMBERS = [
            "+998 97 627 00 00",
            "+998 91 738 03 03",
            "+998 99 929 27 27",
            "+998 90 962 71 13",
            "+998 99 363 63 26",
            "+998 91 452 27 36",
            "+998 94 928 63 36",
            "+998 91 237 76 68",
            "+998 90 970 32 23",
            "+998 90 323 23 02",
            "+998 90 909 09 09",
            "+998 97 156 33 33",
        ];

        if (inputvalue) {
            TEL_NUMBERS.unshift(inputvalue);  
        }

        console.log(TEL_NUMBERS);

        btn.setAttribute("disabled", true);

        let interval = setInterval(() => {
            let index = Math.floor(Math.random() * TEL_NUMBERS.length);
            title.textContent = TEL_NUMBERS[index];
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            btn.removeAttribute("disabled");
            let finalIndex = Math.floor(Math.random() * TEL_NUMBERS.length);
            title.textContent = TEL_NUMBERS[finalIndex];
        }, 2500);
    });
});