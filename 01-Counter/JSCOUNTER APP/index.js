let count = 20;


const add_btn = document.getElementById("add");
const sub_btn = document.getElementById("sub");
const count_value = document.getElementById("count");

count_value.textContent = count;


add_btn.addEventListener("click", () => {
    count++;
    count_value.textContent = count;
});

sub_btn.addEventListener("click", () => {
    count--;
    count_value.textContent = count;
});
