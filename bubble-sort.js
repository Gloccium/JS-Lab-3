// Сложность O(n^2) по времени (вложенный цикл), O(1) по памяти

function bubbleSort(arr) {
    const a = arr.slice();
    for (let i = 0; i < a.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < a.length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return a;
}

const arr = [5, 3, 2, 4, 1];
console.log("Исходный массив:", arr);
console.log("Отсортированный массив:", bubbleSort(arr));