import { useState } from "react";
import "./QuadraticSolver.css";
const QuadraticSolver = () => {
  const [a, Seta] = useState(0);
  const [b, Setb] = useState(0);
  const [c, Setc] = useState(0);
  const [result, setResult] = useState(``);
  const handleOnChange = (e, Setter) => {
    Setter(e.target.value);
  };
  const solveEquation = () => {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      setResult("Phương trình vô nghiệm");
    } else if (delta === 0) {
      const x = -b / (2 * a);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      setResult(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 =
	   ${x2}`);
    }
  };

  return (
    <>
      <div className="box">
        <div>
          <label>Nhập hệ số A:</label>
          <input
            type="number"
            value={a}
            placeholder="Nhập hệ số a"
            onChange={(e) => handleOnChange(e, Seta)}
          />
        </div>
        <div>
          <label>Nhập hệ số B:</label>
          <input
            type="number"
            value={b}
            placeholder="Nhập hệ số b"
            onChange={(e) => handleOnChange(e, Setb)}
          />
        </div>
        <div>
          <label>Nhập hệ số C:</label>
          <input
            type="number"
            value={c}
            placeholder="Nhập hệ số c"
            onChange={(e) => handleOnChange(e, Setc)}
          />
        </div>
          <button onClick={solveEquation}>Giải</button>
          {result && <p>Kết Quả: {result}</p>}
      </div>
    </>
  );
};
export default QuadraticSolver;
