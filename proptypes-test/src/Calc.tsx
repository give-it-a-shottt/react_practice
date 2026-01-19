import _React from "react";
import PropTypes from "prop-types";

type CalcPropsTypes = {
  x: number;
  y: number;
  oper: string;
};

const Calc = (props: CalcPropsTypes) => {
  PropTypes.checkPropTypes(Calc.propTypes, props, "prop", "Calc");
  let result: number = 0;
  switch (props.oper) {
    case "+":
      result = props.x + props.y;
      break;
    case "*":
      result = props.x * props.y;
      break;
    default:
      result = 0;
  }

  return (
    <div>
      <h3>연산 방식 : {props.oper}</h3>
      <hr />
      <div>
        {props.x} {props.oper} {props.y} = {result}
      </div>
    </div>
  );
};
const calcChecker = (props: any, propName: string, componentName: string) => {
  if (propName === "oper") {
    const value = props[propName];
    if (value !== "+" && value !== "*") {
      // 콘솔에 빨간색으로 에러를 강제로 출력
      console.error(
        `🚨 유효성 검사 실패! ${componentName}의 ${propName}에 잘못된 값 '${value}'이 들어왔습니다.`
      );

      return new Error(`${propName}속성의 값은 반드시 '+', '*'만 허용합니다.`);
    }
  }
};
Calc.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  oper: calcChecker,
};

export default Calc;
