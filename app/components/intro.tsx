

export default function Introduction({ setPageNumber }: { setPageNumber: (page: number) => void }) {
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 font-black">
                <img src="/pfp.png" alt="Profile Picture" className="w-40 h-40 md:w-50 md:h-50 rounded-full mx-auto" />
                <h1 className="font-normal text-black text-base md:text-xl">
                    Hi there I"m Selena, and if you're reading this, you're probably a graduating student at Orchard Park! Congratulations for making it this far and thank you so much for trusting this link. Anywho, I made this website as a mini-portfolio onto who I am as it's really hard to express if I've never met/speak to you before. Hopefully that changes soon.
                </h1>
            </div>
            <hr className="border-dashed border-4 m-4 border-gray-300"></hr>
            <div className="text-center">
                <h1 className="text-lg">Click on the Buttons Below to Learn more about me!</h1>
                <p className="font-bold text-sm">I coded this website by scratch btw</p>
            </div>
            <div>
                <div className="flex gap-4 justify-center m-8">
                    <button className="bg-black text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(1)}>Intro</button>
                    <button className="bg-border text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(2)}>Community</button>
                    <button className="bg-highlight text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(3)}>Valedictorian</button>
                    <button className="bg-black text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(4)}>Vote!</button>
                </div>
            </div>
    
        </div>
    );
}
  
