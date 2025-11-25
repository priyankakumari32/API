const card = document.getElementById("card");
const btn = document.getElementById("btn");
const typeSelect = document.getElementById("type");


async function getActivity() {
    card.innerHTML = "Loading...";

    let type = typeSelect.value;
    let url = "https://www.boredapi.com/api/activity";

    if (type) {
        url += `?type=${type}`;
    }

    try {
        let res = await fetch(url);
        if (!res.ok) throw new Error("API failed");

        let data = await res.json();

        card.innerHTML = `
            <h2>${data.activity}</h2>
            <p><b>Type:</b> ${data.type}</p>
            <p><b>Participants:</b> ${data.participants}</p>
        `;
    } catch (error) {
        card.innerHTML = "❌ Oops! Something went wrong. Please try again.";
    }
}

getActivity();
btn.addEventListener("click", getActivity);
