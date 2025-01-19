export class Matrix {
    constructor() {
        this.matrix = [];
    }

    add(values) {
        for (let row of values) {
            this.matrix.push(row);
        }
    }

    print() {
        console.table(this.matrix);
    }

    static addMatrix(matrix1, matrix2) {

        let rows = Math.max(matrix1.length, matrix2.length);
        let cols = Math.max(matrix1[0] ? matrix1[0].length : 0, matrix2[0] ? matrix2[0].length : 0);

        let newMatrix = [];

        for (let i = 0; i < rows; i++) {
            let row = [];


            for (let j = 0; j < cols; j++) {

                let val1 = matrix1[i] && matrix1[i][j] !== undefined ? matrix1[i][j] : 0;
                let val2 = matrix2[i] && matrix2[i][j] !== undefined ? matrix2[i][j] : 0;

                row.push(val1 + val2);
            }
            newMatrix.push(row);
        }

        return newMatrix;
    }
    static subtractMatrix(matrix1, matrix2) {

        let rows = Math.max(matrix1.length, matrix2.length);
        let cols = Math.max(matrix1[0] ? matrix1[0].length : 0, matrix2[0] ? matrix2[0].length : 0);

        let newMatrix = [];

        for (let i = 0; i < rows; i++) {
            let row = [];


            for (let j = 0; j < cols; j++) {

                let val1 = matrix1[i] && matrix1[i][j] !== undefined ? matrix1[i][j] : 0;
                let val2 = matrix2[i] && matrix2[i][j] !== undefined ? matrix2[i][j] : 0;

                row.push(val1 - val2);
            }
            newMatrix.push(row);
        }

        return newMatrix;
    }
    static multiplyMatrix(matrix1, matrix2) {

        let rows = Math.max(matrix1.length, matrix2.length);
        let cols = Math.max(matrix1[0] ? matrix1[0].length : 0, matrix2[0] ? matrix2[0].length : 0);

        let newMatrix = [];

        for (let i = 0; i < rows; i++) {
            let row = [];


            for (let j = 0; j < cols; j++) {

                let val1 = matrix1[i] && matrix1[i][j] !== undefined ? matrix1[i][j] : 0;
                let val2 = matrix2[i] && matrix2[i][j] !== undefined ? matrix2[i][j] : 0;

                row.push(val1 * val2);
            }
            newMatrix.push(row);
        }


        return newMatrix;
    }
    static divideMatrix(matrix1, matrix2) {
        console.warn('Using zero in matrices may lead to Infinity values')
        let rows = Math.max(matrix1.length, matrix2.length);
        let cols = Math.max(matrix1[0] ? matrix1[0].length : 0, matrix2[0] ? matrix2[0].length : 0);

        let newMatrix = [];

        for (let i = 0; i < rows; i++) {
            let row = [];


            for (let j = 0; j < cols; j++) {

                let val1 = matrix1[i] && matrix1[i][j] !== undefined ? matrix1[i][j] : 0;
                let val2 = matrix2[i] && matrix2[i][j] !== undefined ? matrix2[i][j] : 0;

                row.push(val1 / val2);
            }
            newMatrix.push(row);
        }

        return newMatrix;
    }
    static powerMatrix(matrix1, matrix2) {

        let rows = Math.max(matrix1.length, matrix2.length);
        let cols = Math.max(matrix1[0] ? matrix1[0].length : 0, matrix2[0] ? matrix2[0].length : 0);

        let newMatrix = [];

        for (let i = 0; i < rows; i++) {
            let row = [];


            for (let j = 0; j < cols; j++) {

                let val1 = matrix1[i] && matrix1[i][j] !== undefined ? matrix1[i][j] : 0;
                let val2 = matrix2[i] && matrix2[i][j] !== undefined ? matrix2[i][j] : 0;

                row.push(val1 ** val2);
            }
            newMatrix.push(row);
        }

        return newMatrix;
    }
    static matrixMultiplication(matrix1, matrix2) {

        let rows1 = matrix1.length;
        let cols1 = matrix1[0] ? matrix1[0].length : 0;
        let rows2 = matrix2.length;
        let cols2 = matrix2[0] ? matrix2[0].length : 0;


        let maxRows = Math.max(rows1, rows2);
        let maxCols = Math.max(cols1, cols2);



        for (let i = 0; i < maxRows; i++) {
            if (!matrix1[i]) {
                matrix1[i] = [];
            }
            for (let j = matrix1[i].length; j < maxCols; j++) {
                matrix1[i][j] = 0;
            }
        }


        for (let i = 0; i < maxRows; i++) {
            if (!matrix2[i]) {
                matrix2[i] = [];
            }
            for (let j = matrix2[i].length; j < maxCols; j++) {
                matrix2[i][j] = 0;
            }
        }


        let newMatrix = [];


        for (let i = 0; i < maxRows; i++) {
            let row = [];
            for (let j = 0; j < maxCols; j++) {
                let val1 = matrix1[i] && matrix1[i][j] !== undefined ? matrix1[i][j] : 0;
                let val2 = matrix2[i] && matrix2[i][j] !== undefined ? matrix2[i][j] : 0;
                row.push(val1 ** val2);
            }
            newMatrix.push(row);
        }

        return newMatrix;
    }
    firstMultiply() {
        let matrix = this.matrix;
        let newlist = [];
        let row = matrix.length;


        for (let j = 0; j < row; j++) {
            // Only multiply when i = 0 (first row)
            newlist.push(matrix[0][j] * matrix[j][0]);
        }

        return newlist;
    }



    convertToList(){
        return this.matrix.flat()
    }
    isZeroMatrix(){
        for (let row of this.matrix){
            if (row.every(rows => rows === 0)){

            }else{
                return false
            }
        }
        return true


    }
    isSquareMatrix(){
        for (let row of this.matrix){
            if (row.length==this.matrix.length){

            }else{
                return false
            }


        }
        return true
    }
    isIdentityMatrix() {


        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (i === j) {

                    if (this.matrix[i][j] !== 1) {
                        return false;
                    }
                } else {

                    if (this.matrix[i][j] !== 0) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    delete(row=undefined,column=undefined){
        this.matrix.splice(row,1)
        for(let row of this.matrix){
            row.splice(column,1)
        }

    }
    clear(){
        this.matrix = []

    }
    updateRow(index,value){
        this.matrix[index]=value
    }
    updateColumn(index,value){
        let i = 0
        for(let row of this.matrix){
            row[index]=value[i]
            if (i<value.length){
                i++
            }
        }
    }
    isNumberMatrix(){

        for (let row of this.matrix){
            for (let value of row){
                if (typeof value === "number"){
                }else{
                    return false
                }
            }


        }
        return true
    }


}



