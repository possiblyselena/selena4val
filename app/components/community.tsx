'use client';

import { useEffect } from 'react';

export default function Community({ setPageNumber }: { setPageNumber: (page: number) => void }) {

    let slideIndex = 1; 

    useEffect(() => {
        showSlides(slideIndex);
    }, []);


    function plusSlides(n: number) {
        slideIndex += n;
        showSlides(slideIndex);
    }

    function currentSlide(n: number) {
        slideIndex = n;
        showSlides(slideIndex);
    }

    function showSlides(n: number) {
        let i;
        let slides = document.getElementById("slideshow");
        let children = slides!.querySelectorAll(':scope > div');
        if (n > children.length) {slideIndex = 1}
        if (n < 1) {slideIndex = children.length}
        for (i = 0; i < children.length; i++) {
           children[i].classList.add("hidden");
        }
       children[slideIndex-1].classList.remove("hidden");

       slideIndex++;
       if (slideIndex > children.length) {slideIndex = 1}
       children[slideIndex-1].classList.remove("hidden");
       setTimeout(showSlides, 5000); 

    }

    return (
        <div className="w-full h-screen bg-white-100 flex flex-col items-center justify-start p-8 gap-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">My Community Involvement</h1>
                <p>My extracurriculars were based on STEM education and how much I lacked of it throughout my childhood is what motivated me to get involved. Not to brag, but I've done too much stuff to write on this tiny website, so please look at the slideshow below to see the stuff I did in high school!</p>
            </div>
            <div className="w-full h-full relative overflow-hidden" id="slideshow">
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/daydream.jpg" alt="Game Jam" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Ran a 24h Game Jam in Hamilton - Sept 2025</div>
                </div>
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/flagship.jpg" alt="Another Image" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Went to Austin, TX to Win a Hackathon! - March 2025</div>
                </div>
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/fll.jpg" alt="Third Image" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Organized HWDSB's FIRST Lego League Tournament x2 - 2024/2025</div>
                </div>
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/hammerhacks.jpg" alt="Hackathon" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Organized Hamilton's Biggest Hackathon - 2024</div>
                </div>
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/impactaward.jpg" alt="Impact Award" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Won the Impact Award at Niagara College - 2026</div>
                </div>
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/scrapyard.jpg" alt="Scrapyard" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Ran Hamilton's First 24h High School Hackathon - March 2025</div>
                </div>
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/shad.jpg" alt="UBC Vancouver" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Stayed at UBC Vancouver for a month to do STEM stuff - July 2024</div>
                </div>
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/stemleypit.jpg" alt="Drive Team" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Competed in an all-girls drive team and won! - Nov 2024</div>
                </div>
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/underground.jpg" alt="Cohere AI" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Organized an all-girls coding event at Cohere AI - May 2025</div>
                </div>
                <div className="absolute inset-0 hidden">
                    <img src="/slideshow/wistemdinner.jpg" alt="Mayor's Dinner" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">Also Organized a WiSTEM dinner with those in the industry - May 2025</div>
                </div>
                <a className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white flex items-center justify-center cursor-pointer z-10" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white flex items-center justify-center cursor-pointer z-10" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <div className="flex gap-4 justify-center text-white">
                <button className="bg-border text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(1)}>Intro</button>
                <button className="bg-highlight text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(3)}>Valedictorian</button>
                <button className="bg-black text-foreground text-white px-15 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(4)}>Vote!</button>
            </div>
        </div>
    );
}