import AssessmentFlow from '@/components/AssessmentFlow';
import { questions } from '@/data/questions';

export default function CompanyAssessment() {
    return (
        <AssessmentFlow
            questions={questions.company}
            type="company"
            title="Head of Security Assessment"
        />
    );
}
