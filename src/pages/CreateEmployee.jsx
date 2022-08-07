import HeadSection from "../components/HeadSection";
import SideNav from "../components/SideNav"
import TopDiv from "../components/TopDiv";

const CreatEmployee = ()=> {
    return(
        <>
            <SideNav />
            <main>
                <TopDiv />
                <HeadSection label={'Create Employee'} />
                <section className="mainsection">
                    <form id="details">

                    </form>
                </section>
            </main>
        </>
    )
}

export default CreatEmployee;