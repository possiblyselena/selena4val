
export default function ThankYou({ setPageNumber }: { setPageNumber: (page: number) => void }) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-center items-center gap-4">
                <div className="bg-seashell rounded-xl px-2 py-4 text-center text-lg m-4">
                    <p>Voting takes place during the Grad Brunch on Thursday, May 6th in the Cafeteria during 2nd period of the day.</p>
                    <p>Students are allowed to vote for more than one candidate, and they must rank them in order of preference.</p>
                    <p>Superlative voting is also happening during the Grad Brunch, vote for Chun Han for brightest smile!</p>
                </div>
                 <div>
                    <p className="text-lg text-center animate-bounce">I also want to congratulate Manya, Sanjay, Milanjeet, Prisha, and Hailey for their outstanding achievements and being a valedictorian candidate with me!</p>
                </div>
            </div>
            <hr className="border-dashed border-4 m-4 border-gray-300"></hr>
            <p className="text-lg text-center bg-border m-6 rounded-lg text-white">Thank you for taking the time to read a bit more about me, and I hope I can find a way onto your ballot 💙 </p>
            
            <div className="flex flex-col items-center justify-center">
                <a className="text-2xl text-center bg-highlight p-5 m-6 rounded-lg text-white transition hover:scale-110" href="https://instagram.com/s_nguyen080">Let's Keep in Touch!</a>
            </div>

            <div className="flex gap-4 justify-center m-8">
                    <button className="bg-black text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(1)}>Intro</button>
                    <button className="bg-border text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(2)}>Community</button>
                    <button className="bg-highlight text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(3)}>Valedictorian</button>
                    <button className="bg-black text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(4)}>Vote!</button>
                </div>
        </div>
    );
}