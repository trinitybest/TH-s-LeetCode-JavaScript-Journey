// Idea from http://bookshadow.com/weblog/2015/08/12/leetcode-zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var originalStr = s;
    //special issues
    if(numRows === 1 || originalStr.length <= numRows)
        return originalStr;
    //create a two dimension array
    var zigzag = new Array(numRows);
    for (var j=0; j<numRows; j++){
    zigzag[j]= new Array();
    }
    //create row and step
    var row = 0, step = 1;
    for(var i = 0; i<originalStr.length; i++){
    		
        zigzag[row]+=originalStr[i];
        //when row equals 0, we move forward 1 step per time
        if(row === 0)
            step = 1;
        //when row equals numRows-1, we move backwards 1 step per time
        else if(row === numRows-1)
            step = -1;
        row += step;
    }
    return zigzag.join("");//join strings together
};
