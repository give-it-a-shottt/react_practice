import { Link } from "react-router-dom";
function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">MyPortfolio</h1>
          <div className="flex gap-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-blue-500 transition">
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-500 transition">
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-500 transition">
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-500 transition">
              Projects
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">안녕하세요</h1>
          <p className="text-xl text-gray-600 mb-8">저는 풀스택 개발자입니다</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            프로젝트 보기
          </button>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl px-8">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-700">자기소개 내용...</p>
        </div>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl px-8">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">React</h3>
              <p className="text-gray-600 text-sm">프론트엔드 라이브러리</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">FastAPI</h3>
              <p className="text-gray-600 text-sm">
                Python 기반 백엔드 웹 프레임워크
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">TypeScript</h3>
              <p className="text-gray-600 text-sm">타입 안전성</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Tailwind CSS</h3>
              <p className="text-gray-600 text-sm">CSS 프레임워크</p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-6xl px-8 w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Project 1 - TodoList로 링크 */}
            <Link
              to="/todolist"
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-linear-to-br from-purple-400 to-pink-400"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">TodoList</h3>
                <p className="text-gray-600 mb-4">
                  다양한 디자인의 TodoList 모음
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
              </div>
            </Link>

            {/* Project 2 - Timer로 링크 */}
            <Link
              to="/Timer"
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-linear-to-br from-blue-400 to-cyan-400"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Timer</h3>
                <p className="text-gray-600 mb-4">여러 스타일의 계산기</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    React
                  </span>
                </div>
              </div>
            </Link>
            {/* Project 3 - Chatting로 링크 */}
            <Link
              to="/Chatting"
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-linear-to-br from-blue-400 to-cyan-400"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Chatting</h3>
                <p className="text-gray-600 mb-4">여러 스타일 시계</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    React
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl px-8 w-full text-center">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>
          <p className="text-lg text-gray-600 mb-12">
            프로젝트 협업이나 문의사항이 있으시면 연락주세요!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:jeongseonghoon4537@gmail.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition font-semibold">
              Email 보내기
            </a>
            <a
              href="https://github.com/give-it-a-shottt"
              className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition font-semibold">
              GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; 2026 MyPortfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
