import React from "react"

function Loading() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center">
            <div className="flex space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full animate-[pulse_1s_infinite]"></span>
                <span className="w-3 h-3 bg-orange-500 rounded-full animate-[pulse_2s_infinite_1s]"></span>
                <span className="w-3 h-3 bg-orange-500 rounded-full animate-[pulse_1s_infinite_2s]"></span>
            </div>
            <p className="mt-5 text-lg font-semibold animate-pulse">Loading HomeVerse...</p>
        </div>
    )
}

export default Loading
