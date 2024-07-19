const _CHAT_ID = "-1002220660893"
const _TG_TOKEN_BOT = "7242279536:AAG-P0IbiiCbArgeEmdTUVcYxVRsGPSbIXk"
const _TG_URL = `https://api.telegram.org/bot${_TG_TOKEN_BOT}/sendMessage`
let input = document.querySelector("input")
let textarea = document.querySelector("textarea")
let button = document.querySelector("button")

button.addEventListener("click", () => {

	if (input.value === "" || textarea.value === "") return

    let message = `Відправник: ${input.value}\n\nПовідомлення:\n${textarea.value}`

	sendData(message)
    alert("Повідомлення було відправлено")
})

async function sendData(message) {
	try {
		return await fetch(_TG_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: _CHAT_ID,
				text: message,
				parse_mode: "html"
			}),
		})
	} catch (error) {
		return error
	}
}
