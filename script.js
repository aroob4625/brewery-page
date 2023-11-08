let selectedRating = 0;
let reviews = [];

function handleRating(radio) {
    selectedRating = parseInt(radio.value);
}

function submitReview() {
    const reviewText = document.getElementById('review').value;
    console.log(reviewText);
    console.log(selectedRating);
    if (reviewText && selectedRating !== 0) {
        reviews.push({ rating: selectedRating, review: reviewText });
        displayReviews();
        selectedRating = 0;
        document.getElementById('review').value = '';
    } else {
        alert('Please provide a rating and a review text.');
    }
}

function displayReviews() {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = '';
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.innerHTML = `<p>Rating: ${review.rating}</p><p>Review: ${review.review}</p>`;
        reviewsContainer.appendChild(reviewElement);
    });
}