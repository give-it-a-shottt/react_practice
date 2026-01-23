// src/pages/TodoList/TodoList.tsx
import { Link } from "react-router-dom";

function Chatting() {
  const versions = [
    {
      id: 1,
      title: "TodoList v1 - 미니멀",
      description: "심플한 디자인",
      image: "썸네일 이미지 or 그라디언트",
      path: "/Chatting/Chatting_v1",
    },
    {
      id: 2,
      title: "TodoList v2 - 다크모드",
      description: "다크 테마 적용",
      path: "/todolist/TodoList_v2",
    },
    {
      id: 3,
      title: "TodoList v3 - 애니메이션",
      description: "모션 효과 추가",
      path: "/todolist/TodoList_v3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-12">Chatting 버전들</h1>

        {/* 그리드로 카드 배치 */}
        <div className="grid grid-cols-3 gap-8">
          {versions.map((version) => (
            <Link key={version.id} to={version.path}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden">
                {/* 썸네일 영역 */}
                <div className="h-48 bg-linear-to-br from-blue-400 to-purple-400"></div>

                {/* 설명 영역 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{version.title}</h3>
                  <p className="text-gray-600">{version.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chatting;
