var a=[10,20,30,40]
var b=[9,10,20,21,22]

i = 0,                                 // index for a
    j = 0;                                 // index for b

while (i < a.length && j < b.length) {     // prevent running forever
    while (a[i] < b[j]) {                  // check left side
        ++i;                               // increment index
    }
    while (b[j] < a[i]) {                  // check right side
        ++j;                               // increment
    }
    if (a[i] === b[j]) {                   // check equalness
        console.log(a[i], b[j]);           // output or collect
        ++i;                               // increment indices
        ++j;
    }
}