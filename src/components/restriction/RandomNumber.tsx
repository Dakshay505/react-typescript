type numberProp ={
    value :number
}

type PositiveCheck = numberProp & {
    isPositive: boolean;
  isNegative?: never;
  isZero?: never;
}
type NegativeCheck = numberProp & {
    isPositive?: never;
  isNegative: boolean;
  isZero?: never;
}
type ZeroCheck = numberProp & {
    isPositive?: never;
  isNegative?: never;
  isZero: boolean;
}

type RandomNumberProp = PositiveCheck | NegativeCheck | ZeroCheck;
// type RandomNumberProp = {
//   value: number;
//   isPositive?: boolean;
//   isNegative?: boolean;
//   isZero?: boolean;
// };

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProp) => {
  return (
    <div>
      {value} {isPositive && "Positive"}
      {value} {isZero && "Zero"}
      {value} {isNegative && "Negative"}
    </div>
  );
};

export default RandomNumber;
