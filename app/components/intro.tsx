

export default function Introduction({ setPageNumber }: { setPageNumber: (page: number) => void }) {
    
    return (
        <div>
            <div className="grid grid-cols-2 justify-center items-center gap-4 font-black">
                <img src="/pfp.png" alt="Profile Picture" className="w-50 h-50 rounded-full" />
                <h1 className="font-normal text-black text-xl">
                    Hi there I"m Selena, and if you're reading this, you're probably a graduating student at Orchard Park! Congratulations for making it this far and thank you so much for trusting this link. Anywho, I made this website as a mini-portfolio onto who I am as it's really hard to express if I've never met/speak to you before. Hopefully that changes soon.
                </h1>
            </div>
            <hr className="border-dashed border-4 m-4 border-gray-300"></hr>

            <div>s
                <h1>Counter of my supporters!</h1>
            </div>
            <div>
                <div className="flex gap-4 justify-center">
                    <button className="bg-border text-foreground px-15 text-white py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(2)}>Community</button>
                    <button className="bg-highlight text-foreground px-15 text-white py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(3)}>Valedictorian</button>
                    <button className="bg-black text-foreground px-15 text-white py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(4)}>Vote!</button>
                </div>
            </div>
    
        </div>
    );
}
  
