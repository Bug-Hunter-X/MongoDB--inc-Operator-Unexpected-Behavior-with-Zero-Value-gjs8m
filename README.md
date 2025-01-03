# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates an uncommon error when using the `$inc` operator in MongoDB.  The `$inc` operator is used to increment or decrement a numeric field. However, if you attempt to decrement a field that already has a value of zero, the result is a negative value instead of throwing an error or remaining at zero.

## Bug
The bug is in the incorrect usage of the `$inc` operator.  If a field's value is zero and you decrement it, the value becomes negative rather than staying at zero.

## Solution
The provided solution includes error handling. Before decrementing, we check to ensure the count isn't already zero to avoid negative values.  This provides a more robust approach to count management. 
