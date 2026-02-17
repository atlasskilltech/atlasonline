import LearnHeader from "./LearnHeader";
import LearnFeatures from "./LearnFeatures";

export default function LearnSection() {
    return (
        <section
            className="   w-full   px-[24px] py-[40px] bg-black small:pl-[60px] small:pr-[40px]    medium:py-[50px]  base:pl-[80px] base:pr-[70px]  base:py-[70px]      large:px-[140px]   large:py-[80px]   ">

            <div
                className="
            w-full
            px-5
            py-10
            bg-gradient-to-b
            from-indigo-900
            via-blue-900
            to-cyan-700
            rounded-[30px]
            small:bg-none
            small:py-20
        "
            >

                {/* Desktop Card Wrapper */}
                <div
                    className="
            small:max-w-[1400px]
            small:mx-auto
            small:rounded-[32px]
            small:bg-gradient-to-r
            small:from-indigo-900
            small:via-blue-800
            small:to-cyan-600
            small:px-16
            small:py-20
            small:flex
            small:items-center
            small:gap-20
            "
                >

                    {/* Left - Phone */}
                    <div className="small:flex-1 small:flex small:justify-center">
                        <LearnHeader />
                    </div>


                    {/* Right - Content */}
                    <div
                        className="
                mt-30
                text-left

                small:mt-0
                small:flex-1
            "
                    >

                        {/* Heading */}
                        <h1
                            className="
                text-2xl
                font-bold
                mb-4
                text-white
                small:text-5xl
                small:leading-tight
                "
                        >
                            Learn Anytime,
                            <br />
                            Anywhere
                        </h1>


                        {/* Subtitle */}
                        <p
                            className="
                text-sm
                text-gray-200
                mb-8

                small:text-lg
                small:max-w-[520px]
                "
                        >
                            Seamless Learning on the Go with our AI-Powered LMS App
                        </p>


                        {/* Features */}
                        <LearnFeatures />


                        {/* Button */}
                        <button
                            className="
                w-full
                mt-8
                py-3
                bg-white
                font-semibold
                text-black

                small:w-auto
                small:px-10
                small:mt-10
                small:bg-white
                small:text-black
                "
                        >
                            Apply Now
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}
