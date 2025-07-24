export default function mergeDisplays(obj1, obj2) {
    var display = {};
    if (obj1) {
        if (obj1.display) {
            display = { ...obj1.display }
        }
    }
    if (obj2) {
        if (obj2, display) {
            for (var key in obj2.display) {
                if (display.hasOwnProperty(key)) {
                    display[key].quantity += obj2.display[key].quantity
                } else {
                    display[key] = obj2.display[key]
                }
            }
        }
    }
    return display
}