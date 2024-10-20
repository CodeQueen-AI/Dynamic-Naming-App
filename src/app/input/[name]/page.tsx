import { Metadata } from 'next';

const NamePage = ({ params }: { params: { name: string } }) => {
  const { name } = params;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-green-400">
      <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
        🎉 Hello, {name}! 🎉
      </h1>
      <p className="text-xl text-white font-medium text-center drop-shadow-md">
        Welcome to your personalized page! 🌟
      </p>
    </div>
  );
};

export default NamePage;
