type props = {
    body: string
    id: string
}

export const EditMode = ({ body, id }: props) => {
    return (
        <>
            <div
                key={id}
                className="flex items-center justify-center text-black"
            >
                <input
                    value={body}
                    type="text"
                    className="w-11/12 border-b-2 border-gray-400 p-2"
                />
                <button className="bg-green-500 p-2 text-white">Save</button>
                <button className="bg-red-500 p-2 text-white">Cancel</button>
            </div>
        </>
    )
}
