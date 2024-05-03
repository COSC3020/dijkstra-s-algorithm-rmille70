const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

const smallGraph1 = [
    [0, 2, 5],
    [2, 0, 1],
    [5, 1, 0],
];
let expect1 = [0,2,4];

const smallGraph2 = [
    [0, 1],
    [0, 0],
];
let expect2 = [0,1];

const smallGraph3 = [
    [0, -1, 4],
    [2, 0, 3],
    [1, -2, 0],
];
let expect3 = [1,0,3]

const result1 = dijkstra(smallGraph1, 0);
assert(result1, expect1);

const result2 = dijkstra(smallGraph2, 0);
assert(result2, expect2);

const result3 = dijkstra(smallGraph3, 1);
assert(result3, expect3);
