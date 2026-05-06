export default function Valedictorian({ setPageNumber }: { setPageNumber: (page: number) => void }) {
    return (
        <div>
            <h1 className="font-bold text-2xl mb-4">Why Vote for Me?</h1>
            <p className="text-base leading-relaxed">At this point, you've probably have a candidate lined up. I don't blame you, everyone is really impressive. How voting works is that you have an option to vote for multiple candidates and rank them. Even if you have someone lined up, I would heavily appreciate if I could be someone on that list!</p>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <h1 className="font-bold text-xl mb-2">Went Global!</h1>
                    <ul>
                        <li className="list-disc ml-5">I've placed in 3 hackathons and flew all the way to Texas, Chicago, and San Francisco to attend!</li>
                        <li className="list-disc ml-5">I've been featured on Hack Club (100k+ followers) and CBS News - pretty much a celebrity right?</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-xl mb-2">Experience</h1>
                    <ul>
                        <li className="list-disc ml-5">I'm working 2 part-time jobs in events! I set up decor at a banquet hall and a ticket scanner/usher for a local theater.</li>
                        <li className="list-disc ml-5">I was also contracted by Hack Club to help teens in 20+ cities run their own hackathons.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-xl mb-2">Awards</h1>
                    <ul>
                        <li className="list-disc ml-5">Nominated as OP Robotics Leadership Semi-Finalist and OP's Schulich Leader</li>
                        <li className="list-disc ml-5">I've recieved over 20,000$ in scholarships across all schools and organizations to support my education!</li>
                    </ul>
                </div>
            </div>
            <div className="bg-seashell rounded-xl px-2 py-4 text-center m-4 transition duration-300 ease-in-out hover:scale-105">
                <p className="text-lg ">I've raised over <a className="text-highlight underline">$25,000 </a>in monetary and in-kind support for initiatives like hackathons!</p>
            </div>
            <div className="flex gap-4 justify-center mt-8">
                    <button className="bg-border text-foreground px-15 py-2 rounded-lg text-white transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(1)}>Intro</button>
                    <button className="bg-highlight text-foreground px-15 py-2 rounded-lg text-white transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(2)}>Community</button>
                    <button className="bg-black text-foreground px-15 py-2 rounded-lg text-white transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(4)}>Vote!</button>
            </div>
        </div>
    );
}