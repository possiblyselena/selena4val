
export default function ThankYou({ setPageNumber }: { setPageNumber: (page: number) => void }) {
    return (
        <div>
            <div className="flex gap-4 justify-center">
                    <button className="bg-border text-foreground px-15 py-2 rounded-lg" onClick={() => setPageNumber(1)}>Intro</button>
                    <button className="bg-border text-foreground px-15 py-2 rounded-lg" onClick={() => setPageNumber(2)}>Community</button>
                    <button className="bg-highlight text-foreground px-15 py-2 rounded-lg" onClick={() => setPageNumber(3)}>Valedictorian</button>
                </div>
        </div>
    );
}