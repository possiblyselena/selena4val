

export default function Introduction() {
    return (
        <div>
            <div className="grid grid-cols-2 justify-center items-center gap-4">
                <img src="/pfp.png" alt="Profile Picture" className="w-50 h-50 rounded-full" />
                <h1 className="text-md font-bold text-center font-">
                    Hi there I"m Selena, and if you're reading this, you're probably a graduating student at Orchard Park! Congratulations for making it this far and thank you so much for trusting this link. Anywho, I made this website as a mini-portfolio onto who I am as it's really hard to express if I've never met/speak to you before. Hopefully that changes soon.
                </h1>
            </div>
            {/* task bar of different sections*/}
            <hr className="border-border"></hr>
            <div>
                <div className="flex gap-4 justify-center">
                    <button className="bg-border text-foreground px-15 py-2 rounded-lg">Community</button>
                    <button className="bg-highlight text-foreground px-15 py-2 rounded-lg">Valedictorian</button>
                    <button className="bg-black text-foreground px-15 py-2 rounded-lg">Vote!</button>
                </div>
            </div>
            <div>
                <h1>Counter of my supporters!</h1>
            </div>
        </div>
    );
}
  
