import { StyleReview } from '@/components/ReviewForm/style.review'
import CreateReviewComponent from '@/components/CreateReviewComponent'

const DumbForm = ({MyCustomComponent}: any) => (
    <StyleReview>
        <CreateReviewComponent>
            <MyCustomComponent />
        </CreateReviewComponent>
    </StyleReview>
)

export default DumbForm