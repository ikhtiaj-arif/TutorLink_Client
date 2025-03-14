import UpdateTutorProfileForm from '@/components/modules/tutors/UpdateProfile/Index';
import { getTutorOwnInfo } from '@/services/Tutor/Index';

const TutorProfile = async () => {
    const { data } = await getTutorOwnInfo()


    return (
        <div>
            <UpdateTutorProfileForm tutorData={data} />
        </div>
    );
};

export default TutorProfile;