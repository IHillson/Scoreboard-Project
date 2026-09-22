























const options = {
    years: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
}
const readableDate = date.toLocaleString("en-GB", options)

const formData = {
    location: location,
    timeStamp: readableDate,
    text: text,
    title: title,
}

try {
    formMessageEl.textContent = "Sending..."
    const response = await fetch("./api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    if (response.ok) {
        formMessageEl.innerHTML = `Your sighting was uploaded. View it <a href="/sightings.html">here</a>.`
        form.reset()
    } else {
        formMessageEl.textContent = `The server Ghosted you(!). Please try again later.`
    }
} catch (error) {
    formMessageEl.textContent = `An error occurred while uploading the sighting. Please try again later.`
}