const translatte = require('translatte');
const language = {
    afrikaans: "af",
    albanian: "sq",
    arabic: "ar",
    armenian: "hy",
    bengali: "bn",
    bulgarian: "bg",
    chinese: "zh-tw",
    croatian: "hr",
    czech: "cs",
    danish: "da",
    dutch: "nl",
    english: "en",
    finnish: "fi",
    french: "fr",
    german: "de",
    greek: "el",
    haitian: "ht",
    hebrew: "iw",
    hungarian: "hu",
    icelandic: "is",
    indonesian: "id",
    irish: "ga",
    italian: "it",
    japanese: "ja",
    korean: "ko",
    kurdish: "ku",
    lao: "lo",
    latin: "la",
    malay: "ms",
    mongolian: "mn",
    nepali: "ne",
    norwegian: "no",
    persian: "fa",
    polish: "pl",
    portuguese: "pt",
    punjabi: "pa",
    romanian: "ro",
    russian: "ru",
    serbian: "sr",
    spanish: "es",
    swahili: "sw",
    swedish: "sv",
    thai: "th",
    turkish: "tr",
    ukrainian: "uk",
    vietnamese: "vi",
    welsh: "cy",
    yiddish: "yi"
};

module.exports = (client, interaction) => {
    var langs = interaction.data.options[0].value.split(":");

    if (langs.length < 2) return;

    let lang_from = language[langs[0]] || langs[0];
    let lang_to = language[langs[1]] || langs[1];
    let text = interaction.data.options[1].value;

    translatte(text, { from: lang_from, to: lang_to })
        .then(res => respond(res.text, client, interaction))
        .catch(err => respond("An error occured while translating :-(\nCheck if you spelled the langauges right!", client, interaction));
};

function respond(text, client, interaction) {
    client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: {
                content: text
            }
        }
    });
}