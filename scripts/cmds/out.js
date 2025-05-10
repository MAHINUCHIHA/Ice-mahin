module.exports = {
	config: {
		name: "out",
		version: "1.0",
		author: "XyryllPanget",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "",
			en: "kick 🦶 bot from gc by owner bot"
		},
		longDescription: {
			vi: "",
			en: "remove bot from group "
		},
		category: "owner",
		guide: {
			vi: "",
			en: "just write غادر"
		}
 },
	onStart: async function ({ api, args, message, event }) {
		const permission = ["100091756643026","100030451953891"];
  if (!permission.includes(event.senderID)) {
    api.sendMessage("Amare bahir korar tui ke bol Razu and Mahin boss chara keo parbe na bujhcchos?!🐸Hatt boka🌚
		    ami mahin re valo vasi.", event.threadID, event.messageID);
    return;
  }

			if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
				if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
	}
}
