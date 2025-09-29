// Сложность по времени O(log(n)), сложность по памяти O(1)

// Возвращаем индекс найденного элемента, если не нашли, то -1
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const midVal = arr[mid];

        if (midVal === target) return mid;
        if (midVal < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

const arr = [1, 3, 3, 4, 6, 8, 10];
console.log("Индекс искомого элемента:", binarySearch(arr, 4));
console.log("Индекс элемента, которого нет в массиве:", binarySearch(arr, 5));