import { useState } from 'react';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handlestarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <section className='w-full'>
      <div className='container'>
        
        <form >
          <div className="flex flex-col gap-6 w-1/2">
          <h3 className='text-center text_para'>How would you rate your overall experience?</h3>
            <div className='flex items-center'>
                
               {[1, 2, 3, 4, 5].map((star, index) => (
              <button
              type='button'
                key={index}
                onClick={() => handlestarClick(star)}
                className={`text-2xl ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </button>
            ))} 
            </div>
            
            <div>
                <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
            </div>
            

            {/* Submit button */}
            <div className=''>
                 <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Submit Review
            </button>
            </div>
           
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
