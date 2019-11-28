for (var a = [], i = 0; i < 40; ++i) a[i] = i;

function shuffle(array) {
    var tmp, current, top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    return array;
}
a = shuffle(a);
document.getElementById("randomArr").innerHTML += a;

function bubbleSort() {
    let swapped;

    do {
        swapped = false;
        a.forEach((item, index) => {
            if (item > a[index + 1]) {
                let temp = item;
                a[index] = a[index + 1];
                a[index + 1] = temp;
                swapped = true;
            }
        })
    } while (swapped);
    document.getElementById("sortArr").innerHTML += "<div><h2>Отсортированный массив:</h2><br>" + a + "</div>";
}