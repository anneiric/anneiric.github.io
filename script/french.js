const output = document.getElementById('someText');
const french = [
    "&#9790; bouleversant &#9790; <br> deeply moving",
    "&#9790; mélancholique &#9790; <br> gloomy",
    "&#9790; épouvantable &#9790; <br> frightful",
    "&#9790; dépaysant &#9790; <br> unfamiliar",
    "&#9790; odieux &#9790; <br> obnoxious",
    "&#9790; répugnant &#9790; <br> repugnant",
    "&#9790; délabré &#9790; <br> dilapidated",
    "&#9790; époustouflant &#9790; <br> breath-taking",
    "&#9790; flâner &#9790; <br> meander, walk",
    "&#9790; ravissant &#9790; <br> delightful",
    "&#9790; le dénouement &#9790; <br> ending",
    "&#9790; le recueil &#9790; <br> collection",
    "&#9790; éphémère &#9790 <br> ephemeral",
    "&#9790; le dédale &#9790; <br> labyrinth, maze",
    "&#9790; systématique &#9790; <br> systematic",
    "&#9790; un accroissement &#9790; <br> growth, increase",
    "&#9790; primordial &#9790; <br> essential, vital",
    "&#9790; effrayant &#9790; <br> frightening",
    "&#9790; se priver de &#9790; <br> to deprive onself of",
    "&#9790; insalubre &#9790; <br> unhealthy, unsanitary",
    "&#9790; la recrudescence &#9790; <br> fresh outbreak, increase",
    "&#9790; contraignant &#9790; <br> restrictive, constraining",
    "&#9790; flugurant &#9790; <br> dazzling",
    "&#9790; insinsèquement &#9790; <br> intrinsically",
    "&#9790; tintinnabuler &#9790; <br> tinkle",
    "&#9790; le firmament &#9790; <br>  sky",
    "&#9790; pusillanime &#9790; <br> faint hearted",
    "&#9790; superfétatoire &#9790; <br> superfluous",
    "&#9790; gratifiant &#9790; <br> rewarding",
    "&#9790; somptueux &#9790; <br> magnificent",
    "&#9790; jadis &#9790; <br> once",
    "&#9790; déveine &#9790; <br> devious",
    "&#9790; le paradigme &#9790; <br> paradigm, example",
    "&#9790; ésotérique &#9790; <br> mystic",
    "&#9790; machiavélique &#9790; <br> cunning",
    "&#9790; imperturbablement &#9790; <br> peacefully",
    "&#9790; tergiverser &#9790; <br> procastinate",
    "&#9790; idoine &#9790; <br> suitable",
    "&#9790; capricieux &#9790; <br> temperamental, erratic",
    "&#9790; une apathie &#9790; <br> apathy",
    "&#9790; une péripétie &#9790; <br> adventure",
    "&#9790; évanescent &#9790; <br> evanescent",
    "&#9790; incessamment &#9790; <br> incessantly",
    "&#9790; une pléthore de &#9790; <br> plethora",
    "&#9790; prodigue &#9790; <br> lavish",
    "&#9790; sagace &#9790; <br> wise, sagacious",
    "&#9790; exacerber &#9790; <br> exacerbate, worsen",
    "&#9790; la calamité &#9790; <br> calamity",
    "&#9790; irréfutable &#9790; <br> impossible to deny",
    "&#9790; outremer &#9790; <br> dark blue",
]

function changeText() {
	const item = french[Math.floor(Math.random() * french.length)];
	output.innerHTML = item
}