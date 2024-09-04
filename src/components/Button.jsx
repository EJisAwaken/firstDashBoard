export default function Button({value}) {
    return <button
        className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out w-[150px]">
        {value}
    </button>
}