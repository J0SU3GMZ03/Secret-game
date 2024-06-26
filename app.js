let secret_number = 0;
let i = 0;
let numbers_list = [];
let max_number = 10;

function asign_text_to_element(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML =  text;
    return;
}

function verify_attempt() {
    let user_number = parseInt(document.getElementById("user_value").value);

    if (user_number === secret_number) {
        asign_text_to_element("p", `Correct, you found it in ${i} ${(i === 1)? "time" : "times"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (user_number > secret_number) {
            asign_text_to_element ("p", "Wrong, the number is minor");
        } else {
            asign_text_to_element("p", "Wrong, the number is higher");
        }
        i++;
        reset();
    }
    return;
}

function reset() {
    document.querySelector("#user_value").value = "";
}

function secret_number_generator() {
    let number =  Math.floor(Math.random()*max_number)+1;
    if (numbers_list. length == max_number) {
        asign_text_to_element ("p", "All the possible numbers where already used");

    } else {
        if (numbers_list.includes(number)) {
            return secret_number_generator();
        } else {
            numbers_list.push(number);
            return number;
        }
    }
}

function intial_conditions() {
    asign_text_to_element("h1", "The Secret Number Game");
    asign_text_to_element("p", `Select a number from 1 to ${max_number}`);
    secret_number = secret_number_generator();
    i = 1;
    return;
}

function restart_game() {
    reset();
    intial_conditions();
    document.querySelector("#reiniciar").setAttribute("disabled", true);
    return;
}

intial_conditions();