import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  // 3️⃣ 컴포넌트 렌더링 후 자동 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // [] → 처음 한 번만 실행

  // 4️⃣ 검색어 변경될 때마다 API 호출 시뮬레이션
  useEffect(() => {
    if (!keyword) {
      setResults([]);
      return;
    }

    setLoading(true);

    // 가짜 API (2초 후 검색 결과 반환)
    const timer = setTimeout(() => {
      setResults([`${keyword} 상품1`, `${keyword} 상품2`, `${keyword} 상품3`]);
      setLoading(false);
    }, 2000);

    // cleanup (다른 검색어 입력 시 이전 타이머 제거)
    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <div style={{ padding: 20 }}>
      <h2>🔍 상품 검색</h2>

      <input
        ref={inputRef}
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색어를 입력하세요"
        style={{ width: "300px", padding: "8px" }}
      />

      {loading && <p>로딩 중...</p>}

      <ul>
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
