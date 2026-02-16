import AssessmentFlow from '@/components/AssessmentFlow';
import { questions } from '@/data/questions';

export default function IndividualAssessment() {
    return (
        <AssessmentFlow
            questions={questions.individual}
            type="individual"
            title="Personal Cybersecurity Check"
        />
    );
}
