export function getArrayIndexByKey(arr, key, value) {

    if (!arr) {
        throw new Error("Please provide a valid array");
    }

    let index = null;

    arr.forEach((item, i) => {
        if (item[key] == value) {
            index = i;
        }
    })

    return index;
}

export function setDymanicHeight(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
}