export default function Home() {
    return (
        <div className="w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center flex-col gap-3">
            <h1 className="text-2xl md:text-6xl font-bold text-center animate-fade-in-up">
                WD Compiler
            </h1>
            <p className="text-gray-500 text-center animate-fade-in">
                Compile HTML, CSS, and JavaScript code on the go and share it with your friends
            </p>
        </div>
    );
}
