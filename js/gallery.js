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

	const body = document.querySelector("body");
	body.appendChild(modal);
	body.style.overflow = 'hidden';

	modal.onclick = function (ev) {
		if (ev.target.classList.contains("modal")) {
			closeModal(modal);
		}
	}

    requestAnimationFrame(() => {
        modal.style.animation = "";
        modal.classList.add("fade-in");
    });
}

function closeModal (modal) {
	modal.classList.remove("fade-in");
	modal.classList.add("fade-out");
	setTimeout(() => {
		modal.remove();
		document.querySelector("body").style.overflow = '';
	}, 300);
}
