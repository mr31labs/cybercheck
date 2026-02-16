import AssessmentFlow from '@/components/AssessmentFlow';
import { questions } from '@/data/questions';

export default function EmployeeAssessment() {
    return (
        <AssessmentFlow
            questions={questions.employee}
            type="employee"
            title="Employee Security Check"
        />
    );
}
