function Note() {
    return (
        <div className="p-4 w-full max-w-md">

            <h2 className="text-lg font-semibold mb-3 text-gray-700">
                Note
            </h2>

            <div className="flex flex-col gap-2">
                {[...Array(3)].map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        className="border-b border-gray-300 focus:border-blue-500 outline-none p-1"
                    />
                ))}
            </div>

        </div>
    );
}

export default Note;