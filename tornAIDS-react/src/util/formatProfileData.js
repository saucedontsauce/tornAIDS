export default function formatProfileData(input) {
    var output = { ...input, display: {} };
    for (var i in input.display) {
        output.display[input.display[i].ID] = input.display[i];
    }
    return output
}