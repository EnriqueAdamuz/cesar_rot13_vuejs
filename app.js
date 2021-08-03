var app = new Vue({
	el: "#app",
	data: {
		textToEncode: "",
		textEncode: "",
	},

	methods: {
		encodeText() {
			let textEncode = [];
			let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm5678901234";
			this.textToEncode.split("").forEach((element) => {
				if (element == " ") textEncode.push(" ");
				textEncode.push(output.charAt(input.indexOf(element)));
			});
			this.textEncode = textEncode.join("");
			this.textToEncode = "";
		},
	},
});
