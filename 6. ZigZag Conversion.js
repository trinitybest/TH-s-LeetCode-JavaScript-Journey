/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var originalStr = s;
    if(numRows === 1 || originalStr.length <= numRows)
        return originalStr;
    var zigzag = new Array(numRows);
    for (var j=0; j<numRows; j++){
    zigzag[j]= new Array();
    }
    console.log(zigzag);
    var row = 0, step = 1;
    for(var i = 0; i<originalStr.length; i++){
    		
        zigzag[row]+=originalStr[i];
        //console.log("i", originalStr[i], "row", row)
        //console.log("zigzag",zigzag[row])
        if(row === 0)
            step = 1;
        else if(row === numRows-1)
            step = -1;
        row += step;
    }
    return zigzag.join("");
};

