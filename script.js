function nextPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });

    const next = document.getElementById(
        "page" + pageNumber
    );

    next.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function wrongAnswer() {

    const answer =
        document.getElementById("answer");

    answer.innerHTML =
        "Excuse me??? 😭 That's illegal... Try again 😤💗";

}
