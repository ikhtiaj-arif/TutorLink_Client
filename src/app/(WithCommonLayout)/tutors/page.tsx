// components/AllTutors.tsx

import AllTutors from "@/components/modules/tutors/AllTutors/Index";
import { getAllTutors } from "@/services/Tutor/Index";




const AllTutorsPage = async () => {

    const { data: tutors } = await getAllTutors();
    console.log(tutors);

    return (
        <section className="py-16 bg-background">
            <AllTutors tutors={tutors} />
        </section>
    );
};

export default AllTutorsPage;
