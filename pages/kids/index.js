import AssessmentFlow from '@/components/AssessmentFlow';
import { questions } from '@/data/questions';

export default function KidsAssessment() {
    return (
        <AssessmentFlow
            questions={questions.kids}
            type="kids"
            title="Online Safety Quiz for Kids"
        />
    );
}
