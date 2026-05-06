export default function Valedictorian({ setPageNumber }: { setPageNumber: (page: number) => void }) {
    return (
        <div>
            <h1>Why Vote for Me?</h1>
            <div className="flex gap-4 justify-center">
                    <button className="bg-border text-foreground px-15 py-2 rounded-lg" onClick={() => setPageNumber(1)}>Intro</button>
                    <button className="bg-border text-foreground px-15 py-2 rounded-lg" onClick={() => setPageNumber(2)}>Community</button>
                    <button className="bg-highlight text-foreground px-15 py-2 rounded-lg" onClick={() => setPageNumber(4)}>Vote!</button>
            </div>
        </div>
    );
}