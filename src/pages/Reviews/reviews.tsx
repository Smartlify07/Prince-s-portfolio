import { reviews } from '@/lib/data/reviews';
import QuoteIcon from '@/../public/assets/icons/quote.svg';

const ReviewsPage = () => {
  return (
    <main className="grid min-h-screen font-geist bg-sidebar-bg py-8 px-4 lg:px-0 pt-[126px] lg:pt-0 lg:py-0 gap-9 lg:gap-14">
      <div className="flex flex-col gap-5">
        <h1 className="gradient-text font-medium -tracking-smaller text-[40px]/[52px]">
          Reviews
        </h1>
        <p className="text-base/[150%] lg:w-9/12 text-grey-9">
          Hear from people I’ve worked with about how my designs helped them
          create scalable products and achieve real results.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-[20px] relative p-4 lg:p-6 bg-[#171721] card-stroke flex min-h-[322px] flex-col lg:gap-5 lg:min-h-[340px] justify-between"
          >
            <div className="flex flex-col gap-5">
              <h1 className="gradient-text -tracking-smaller min-h-[36px] font-normal text-2xl">
                {review.title}
              </h1>
              <p className="text-base/[150%] text-grey-9">
                {review.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={review.author.image}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-base/[150%] font-medium text-grey-9">
                    {review.author.name}
                  </h3>
                  <h4 className="text-sm/[150%] font-normal text-grey-9">
                    {review.author.position}
                  </h4>
                </div>
              </div>
            </div>
            <img
              src={QuoteIcon}
              className="absolute bottom-7 right-10 lg:right-10 lg:bottom-10"
            />
          </div>
        ))}
      </div>
    </main>
  );
};
export default ReviewsPage;
