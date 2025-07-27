const gallery = document.querySelector("#gallery");

gallery.addEventListener("click", (ev) => {
	if (ev.target.tagName !== "IMG") {
		return;
	}

	imageModal(ev.target.src);
});

function imageModal(src) {
	const img = document.createElement("IMG");
	img.src = src;
	img.alt = "gallery image";

	const modal = document.createElement("DIV");
	modal.classList.add("modal");
	modal.appendChild(img);
	modal.onclick = function () {
		modal.classList.add("fade-out");
		setTimeout(() => {
			modal.remove();
		}, 300);
	}

	const body = document.querySelector("body");
	body.appendChild(modal);
}
