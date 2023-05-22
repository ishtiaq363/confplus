import Search from './Search';
import PaperReviewForm from './PaperReviewForm';
function Page() {
  return <>
  <article>
    <h3>Papers to review</h3>
    <Search/>
  </article>
  <PaperReviewForm />
  </>
}
export default Page;