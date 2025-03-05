import StepCard from "./StepCard";




export default function StepsContainer() {
    return (
        <div className="flex space-x-6 justify-center">
            {/* First step */}
            <StepCard
                stepNumber={1}
                title="Find your tennis coach"
                description="Consult tutor profiles freely and contact your ideal tutor according to your needs (prices, qualifications, reviews, home or webcam lessons)."
                icon="search"
            />

            {/* Second step */}
            <StepCard
                stepNumber={2}
                title="Arrange your lessons"
                description="Exchange with your tutor, explain your needs and discuss availabilities. Schedule your lessons and pay them securely, all from your inbox."
                icon="message"
            />

            {/* Third step */}
            <StepCard
                stepNumber={3}
                title="Discover new experiences"
                description="The incredible Student Pass gives you unlimited access to all tutors, coaches, and masterclasses. Discover new passions with fabulous people."
                icon="users"
            />
        </div>
    );
}
