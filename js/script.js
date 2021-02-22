
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


const escalerasAlMar = document.getElementById("EscalerasAlMar")
const playPauseEAM = document.getElementById("playEAM")

playPauseEAM.addEventListener("click", () => {
	if (escalerasAlMar.paused || escalerasAlMar.ended) {
		playPauseEAM.querySelector(".pause-btn").classList.toggle("hide")
		playPauseEAM.querySelector(".play-btn").classList.toggle("hide")
		escalerasAlMar.play()
		} else {
			escalerasAlMar.pause()
			playPauseEAM.querySelector(".pause-btn").classList.toggle("hide")
			playPauseEAM.querySelector(".play-btn").classList.toggle("hide")
		}
	

})

const descansoYolvido = document.getElementById("DescansoyOlvido")
const playPauseDYO = document.getElementById("playDYO")

playPauseDYO.addEventListener("click", () => {
	if (descansoYolvido.paused || descansoYolvido.ended) {
		playPauseDYO.querySelector(".pause-btn").classList.toggle("hide")
		playPauseDYO.querySelector(".play-btn").classList.toggle("hide")
		descansoYolvido.play()
		} else {
			descansoYolvido.pause()
			playPauseDYO.querySelector(".pause-btn").classList.toggle("hide")
			playPauseDYO.querySelector(".play-btn").classList.toggle("hide")
		}
	
})

