import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

const Hero = () => {
    return (
        <section
            id='home'
            className='w-full flex md:flex-row flex-col justify-center min-h-screen gap-10 max-container'
        >
            <div>

                <LeftHeroSection />
            </div>
            <div>
                <RightHeroSection />
            </div>
        </section>
    )
}
//talhazulf4163@gmail.com
export default Hero;