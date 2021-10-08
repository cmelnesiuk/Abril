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

const ylcca = document.getElementById("YLCCA")
const playPauseYLCCA = document.getElementById("playYLCCA")

playPauseYLCCA.addEventListener("click", () => {
	if (ylcca.paused || ylcca.ended) {
		playPauseYLCCA.querySelector(".pause-btn").classList.toggle("hide")
		playPauseYLCCA.querySelector(".play-btn").classList.toggle("hide")
		ylcca.play()
		} else {
			ylcca.pause()
			playPauseYLCCA.querySelector(".pause-btn").classList.toggle("hide")
			playPauseYLCCA.querySelector(".play-btn").classList.toggle("hide")
		}	
})

const pensamientosImposibles = document.getElementById("PensamientosImposibles")
const playPausePI = document.getElementById("playPI")

playPausePI.addEventListener("click", () => {
	if (pensamientosImposibles.paused || pensamientosImposibles.ended) {
		playPausePI.querySelector(".pause-btn").classList.toggle("hide")
		playPausePI.querySelector(".play-btn").classList.toggle("hide")
		pensamientosImposibles.play()
		} else {
			pensamientosImposibles.pause()
			playPausePI.querySelector(".pause-btn").classList.toggle("hide")
			playPausePI.querySelector(".play-btn").classList.toggle("hide")
		}	
})

const descansoYolvido = document.getElementById("DescansoyOlvido")
const playPauseDYO = document.getElementById("playDyO")

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



	
