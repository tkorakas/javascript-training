const isNullFalsey = Boolean(null);
const isUndefinedFalsey = Boolean(undefined);
const isZeroFalsey = Boolean(0);
const isMinusZeroFalsey = Boolean(-0);
const isEmptyStringFalsey = Boolean("");
const isFalseFalsey = Boolean(false);
const isNaNFalsey = Boolean(NaN);
const isBigIntZeroFalsey = Boolean(0n);

const isTrueTruthy = Boolean(true);
const isObjTruthy = Boolean({});
const isArrayTruthy = Boolean([]);
const isNumTruthy = Boolean(42);
const isStringZeroTruthy = Boolean("0");
const isStringFalseTruthy = Boolean("false");
const isDateTruthy = Boolean(new Date());
const isNegativeIntTruthy = Boolean(-42);
const isPositiveBigIntTruthy = Boolean(12n);
const isFloatTruthy = Boolean(3.14);
const isNegativeFloatTruthy = Boolean(-3.14);
const isInfinityTruthy = Boolean(Infinity);
const isNegativeInfinityTruthy = Boolean(-Infinity);

document.write(`
  <h2> Falsey values: </h2>
  <div>Null: ${isNullFalsey}</div>
  <div>Undefined: ${isUndefinedFalsey}</div>
  <div> Zero: ${isZeroFalsey} </div>
  <div> Minus zero: ${isMinusZeroFalsey}</div>
  <div> Empty string: ${isEmptyStringFalsey} </div>
  <div> False: ${isFalseFalsey} </div>
  <div> NaN: ${isNaNFalsey} </div>
  <div> BigInt zero: ${isBigIntZeroFalsey} </div>
  <hr />
  <h2> Truthy values: </h2>
  <div> True: ${isTrueTruthy}</div>
  <div> Object: ${isObjTruthy}</div>
  <div> Array: ${isArrayTruthy}</div>
  <div> Number: ${isNumTruthy}</div>
  <div> String zero: ${isStringZeroTruthy}</div>
  <div> String false: ${isStringFalseTruthy}</div>
  <div> Date: ${isDateTruthy}</div>
  <div> Negative integer: ${isNegativeIntTruthy}</div>
  <div> Positive BigInt: ${isPositiveBigIntTruthy}</div>
  <div> Float: ${isFloatTruthy}</div>
  <div> Negative float: ${isNegativeFloatTruthy}</div>
  <div> Infinity: ${isInfinityTruthy}</div>
  <div> Negative Infinity: ${isNegativeInfinityTruthy}</div>
  `);
