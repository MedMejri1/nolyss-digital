import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import CaseStudy1 from "@/components/sections/CaseStudy1"
import Hero1 from "@/components/sections/Hero1"
import Offer1 from "@/components/sections/Offer1"
import Product1 from "@/components/sections/Product1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import TextSLider1 from "@/components/sections/TextSLider1"
import TextSLider2 from "@/components/sections/TextSLider2"
import TextSLider3 from "@/components/sections/TextSLider3"
import TextSLider4 from "@/components/sections/TextSLider4"
import Watch1 from "@/components/sections/Watch1"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <Hero1 />
                    <TextSLider4 />
                   <About1 />
                   <Offer1 />
                     <TextSLider1 />
                    {/* <CaseStudy1 />
                    <Watch1 />
                    <Team1 />
                    <TextSLider2 /> */}
                    <Testimonial1 />
                     {/* <Blog1 />
                    <TextSLider3 /> */}
                </div>
            </Layout>
        </>
    )
}