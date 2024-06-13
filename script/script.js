


function openWorkout(id) {
    setTimeout(function(){
        const overlay = document.getElementById("workout");
        overlay.style.display = "flex";

        const underlay = document.getElementById("container");
        underlay.style.display = "none";
    ;}, 600);


    let workout = null;

    for (let i = 0; i < workoutArray.length; i++) {
        if (workoutArray[i].id === id) {
            workout = workoutArray[i];
        }
    }

    const container = document.querySelector(` #${workout.id}.uebung`);
    container.classList.add("expandieren");

    setTimeout(function(){
        container.classList.remove("expandieren")
    ;}, 1000);

    if (workout) {
        const h1 = document.querySelector(".h1");
        h1.innerHTML = workout.muskel;

        const h4 = document.querySelector(".h4");
        h4.innerHTML = workout.training;

        const p = document.querySelector(".p");
        p.innerHTML = workout.text;

        const img = document.querySelector(".img");
        img.src = workout.pic;
        img.classList.remove("bein", "brust", "ruecken", "ruder", "bauch")
        img.classList.add(workout.id)
    }

}

function closeWorkout() {
    const overlay = document.getElementById("workout");
    overlay.style.display = "none";

    const underlay = document.getElementById("container");
    underlay.style.display = "block";
    
}
