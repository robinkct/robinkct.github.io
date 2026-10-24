import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      {/* Decorative Vibrant Background Blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-amber-300/30 via-blue-400/20 to-purple-500/20 blur-3xl dark:from-amber-500/10 dark:via-blue-600/15 dark:to-purple-600/15" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-gradient-to-tl from-blue-400/25 via-indigo-400/20 to-pink-400/20 blur-3xl dark:from-blue-500/15 dark:via-indigo-500/10 dark:to-pink-500/10" />

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="text-center">
          {/* Avatar Image */}
          <div className="relative inline-block mb-8 group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-400 via-blue-500 to-purple-600 opacity-80 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-blue-500 to-purple-600 shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
              <Image
                src="/me.webp"
                alt="Robin Kuo"
                width={176}
                height={176}
                priority
                className="w-full h-full rounded-full object-cover bg-white dark:bg-gray-800"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-blue-600 to-purple-600">Robin Kuo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Software Engineer passionate about building innovative solutions and sharing knowledge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors font-medium"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-4">
        {/* Highlight Current Project Button: Around World */}
        <div className="mb-10">
          <a
            href="https://readseeks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full rounded-2xl p-[2px] bg-gradient-to-r from-amber-500 via-blue-600 to-purple-600 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-8 py-7 md:py-8 overflow-hidden">
              {/* Subtle background glow on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-500/5 via-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-5 text-center sm:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 mb-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                    Current Project
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    Around World
                  </h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-400 text-base md:text-lg">
                    Explore the world through reading, discovery, and global perspectives at readseeks.com
                  </p>
                </div>
              </div>

              <div className="relative shrink-0">
                <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md group-hover:from-blue-700 group-hover:to-purple-700 group-hover:shadow-lg transition-all duration-200">
                  Launch Around World
                  <svg
                    className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Card */}
          <Link href="/about" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transform hover:-translate-y-1">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                About Me
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn about my background, experience, and skills
              </p>
            </div>
          </Link>

          {/* Projects Card */}
          <Link href="/projects" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transform hover:-translate-y-1">
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore my GitHub projects and open source contributions
              </p>
            </div>
          </Link>

          {/* Blog Card */}
          <Link href="/blog" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transform hover:-translate-y-1">
              <div className="text-green-600 dark:text-green-400 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Read my thoughts on travel, books, and life organization
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
