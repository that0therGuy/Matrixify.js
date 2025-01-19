
# Matrix Class Documentation

This module defines a `Matrix` class that provides utility methods for basic matrix operations such as addition, subtraction, multiplication, division, exponentiation, and other matrix transformations. The class also includes methods for matrix manipulation, such as flattening the matrix, checking its properties, and updating its elements.

## Methods

### Constructor: `constructor()`
- Initializes an empty matrix (`this.matrix`).
- **Usage:**
  ```js
  const matrix = new Matrix();
  ```

### Method: `add(values)`
- Adds rows of values to the matrix.
- **Parameters:**
  - `values`: An array of arrays, where each array represents a row in the matrix.
- **Usage:**
  ```js
  matrix.add([[1, 2], [3, 4]]);
  ```

### Method: `print()`
- Prints the matrix in a tabular format to the console.
- **Usage:**
  ```js
  matrix.print();
  ```

### Static Method: `addMatrix(matrix1, matrix2)`
- Adds two matrices element-wise.
- **Parameters:**
  - `matrix1`: The first matrix (array of arrays).
  - `matrix2`: The second matrix (array of arrays).
- **Returns:** A new matrix representing the element-wise sum of `matrix1` and `matrix2`.
- **Usage:**
  ```js
  const result = Matrix.addMatrix(matrix1, matrix2);
  ```

### Static Method: `subtractMatrix(matrix1, matrix2)`
- Subtracts the second matrix from the first matrix element-wise.
- **Parameters:**
  - `matrix1`: The first matrix (array of arrays).
  - `matrix2`: The second matrix (array of arrays).
- **Returns:** A new matrix representing the element-wise difference of `matrix1` and `matrix2`.
- **Usage:**
  ```js
  const result = Matrix.subtractMatrix(matrix1, matrix2);
  ```

### Static Method: `multiplyMatrix(matrix1, matrix2)`
- Multiplies two matrices element-wise.
- **Parameters:**
  - `matrix1`: The first matrix (array of arrays).
  - `matrix2`: The second matrix (array of arrays).
- **Returns:** A new matrix representing the element-wise product of `matrix1` and `matrix2`.
- **Usage:**
  ```js
  const result = Matrix.multiplyMatrix(matrix1, matrix2);
  ```

### Static Method: `divideMatrix(matrix1, matrix2)`
- Divides the elements of the first matrix by the corresponding elements of the second matrix element-wise.
- **Parameters:**
  - `matrix1`: The first matrix (array of arrays).
  - `matrix2`: The second matrix (array of arrays).
- **Returns:** A new matrix representing the element-wise quotient of `matrix1` and `matrix2.
- **Usage:**
  ```js
  const result = Matrix.divideMatrix(matrix1, matrix2);
  ```

### Static Method: `powerMatrix(matrix1, matrix2)`
- Raises the elements of the first matrix to the powers of the corresponding elements of the second matrix element-wise.
- **Parameters:**
  - `matrix1`: The first matrix (array of arrays).
  - `matrix2`: The second matrix (array of arrays).
- **Returns:** A new matrix representing the element-wise power of `matrix1` raised to `matrix2`.
- **Usage:**
  ```js
  const result = Matrix.powerMatrix(matrix1, matrix2);
  ```

### Static Method: `matrixMultiplication(matrix1, matrix2)`
- Performs matrix multiplication between two matrices.
- **Parameters:**
  - `matrix1`: The first matrix (array of arrays).
  - `matrix2`: The second matrix (array of arrays).
- **Returns:** A new matrix representing the result of the matrix multiplication of `matrix1` and `matrix2`.
- **Usage:**
  ```js
  const result = Matrix.matrixMultiplication(matrix1, matrix2);
  ```

### Method: `firstMultiply()`
- Multiplies the elements of the first row with the corresponding elements of the first column in the matrix.
- **Returns:** A new array representing the multiplication result.
- **Usage:**
  ```js
  const result = matrix.firstMultiply();
  ```

### Method: `convertToList()`
- Flattens the matrix into a one-dimensional array.
- **Returns:** A one-dimensional array containing all the matrix elements.
- **Usage:**
  ```js
  const list = matrix.convertToList();
  ```

### Method: `isZeroMatrix()`
- Checks if the matrix is a zero matrix (all elements are zeros).
- **Returns:** `true` if the matrix is a zero matrix, `false` otherwise.
- **Usage:**
  ```js
  const result = matrix.isZeroMatrix();
  ```

### Method: `isSquareMatrix()`
- Checks if the matrix is a square matrix (same number of rows and columns).
- **Returns:** `true` if the matrix is square, `false` otherwise.
- **Usage:**
  ```js
  const result = matrix.isSquareMatrix();
  ```

### Method: `isIdentityMatrix()`
- Checks if the matrix is an identity matrix (diagonal elements are 1 and others are 0).
- **Returns:** `true` if the matrix is an identity matrix, `false` otherwise.
- **Usage:**
  ```js
  const result = matrix.isIdentityMatrix();
  ```

### Method: `delete(row=undefined, column=undefined)`
- Deletes a specified row or column from the matrix.
- **Parameters:**
  - `row`: The index of the row to be deleted (optional).
  - `column`: The index of the column to be deleted (optional).
- **Usage:**
  ```js
  matrix.delete(0, 1); // Deletes row 0 and column 1
  ```

### Method: `clear()`
- Clears the matrix, removing all elements.
- **Usage:**
  ```js
  matrix.clear();
  ```

### Method: `updateRow(index, value)`
- Updates a specific row in the matrix.
- **Parameters:**
  - `index`: The index of the row to update.
  - `value`: The new row values.
- **Usage:**
  ```js
  matrix.updateRow(0, [1, 2, 3]);
  ```

### Method: `updateColumn(index, value)`
- Updates a specific column in the matrix.
- **Parameters:**
  - `index`: The index of the column to update.
  - `value`: The new values for the column.
- **Usage:**
  ```js
  matrix.updateColumn(1, [1, 2, 3]);
  ```

## Example Usage:

```js
// Create a new matrix
const matrix = new Matrix();

// Add rows to the matrix
matrix.add([[1, 2], [3, 4]]);

// Print the matrix
matrix.print();

// Matrix operations
const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];

// Add matrices
const sum = Matrix.addMatrix(matrix1, matrix2);
console.log(sum);

// Multiply matrices
const product = Matrix.multiplyMatrix(matrix1, matrix2);
console.log(product);

// Matrix multiplication
const multiplicationResult = Matrix.matrixMultiplication(matrix1, matrix2);
console.log(multiplicationResult);

// Flatten matrix to list
const list = matrix.convertToList();
console.log(list);

```



