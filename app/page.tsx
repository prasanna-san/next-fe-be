import UserList from '@/components/UserList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-cyan-100 to-white py-12">
  <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
    <div className="text-center mb-10">
      <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-sky-500 to-cyan-400 drop-shadow-lg mb-4">
        User Management Portal
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 font-light mb-2">
        Effortlessly manage your users with a sleek, modern interface.
      </p>
    </div>

    <div className="bg-white/80 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-16 border border-slate-100 transition hover:scale-[1.01] hover:shadow-3xl">
      {/* UserList Component Placeholder */}
      <UserList />
    </div>

    <div className="mt-10 text-center text-base font-medium text-gray-500">
      <div className="inline-flex flex-col gap-0.5 items-center">
        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 shadow-inner">
          Built with Next.js, TypeScript & Tailwind CSS
        </span>
        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 shadow-inner">
          Features: Add, Edit & Delete Users
        </span>
      </div>
    </div>
  </div>
</div>

  );
}
