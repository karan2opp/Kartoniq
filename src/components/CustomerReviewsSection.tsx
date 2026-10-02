import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, MapPin, MessageCircle, ChevronDown, Filter, PenLine, X, CheckCircle2, Sparkles } from 'lucide-react';
import { INITIAL_CUSTOMER_REVIEWS, CustomerReview } from '../data/reviews';
import { getWhatsAppUrl } from '../utils/whatsapp';

const LOCAL_STORAGE_KEY = 'kartoniq_submitted_reviews';

export const CustomerReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(INITIAL_CUSTOMER_REVIEWS);
  const [selectedFilter, setSelectedFilter] = useState<'all' | '5' | '4' | '3' | '2' | '1'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  // Form State
  const [formRating, setFormRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [formName, setFormName] = useState<string>('');
  const [formLocation, setFormLocation] = useState<string>('');
  const [formBoxType, setFormBoxType] = useState<string>('Medium Carton (5-Ply)');
  const [formReview, setFormReview] = useState<string>('');
  const [formPurpose, setFormPurpose] = useState<string>('Home Relocation');

  // Load custom user reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CustomerReview[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...INITIAL_CUSTOMER_REVIEWS]);
        }
      }
    } catch (e) {
      console.error('Error loading saved reviews', e);
    }
  }, []);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formLocation.trim() || !formReview.trim()) return;

    const newReview: CustomerReview = {
      id: `user-rev-${Date.now()}`,
      name: formName.trim(),
      location: formLocation.trim(),
      rating: formRating,
      date: 'Just now',
      review: formReview.trim(),
      verified: true,
      boxTypeUsed: formBoxType,
      purpose: formPurpose.trim() || 'House Shifting'
    };

    const updatedList = [newReview, ...reviews];
    setReviews(updatedList);

    // Save to localStorage
    try {
      const existingSaved = localStorage.getItem(LOCAL_STORAGE_KEY);
      const parsedExisting: CustomerReview[] = existingSaved ? JSON.parse(existingSaved) : [];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newReview, ...parsedExisting]));
    } catch (e) {
      console.error('Error saving review to local storage', e);
    }

    setSubmittedSuccess(true);
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setSubmittedSuccess(false);
    setFormName('');
    setFormLocation('');
    setFormReview('');
    setFormRating(5);
  };

  const filteredReviews = reviews.filter(r => {
    if (selectedFilter === 'all') return true;
    return r.rating === Number(selectedFilter);
  });

  const displayedReviews = filteredReviews.slice(0, visibleCount);

  // Stats calculation
  const totalReviews = reviews.length;
  const sumRatings = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = (sumRatings / totalReviews).toFixed(1); // e.g., 4.4
  const fiveStarCount = reviews.filter(r => r.rating === 5).length;
  const fourStarCount = reviews.filter(r => r.rating === 4).length;
  const threeStarCount = reviews.filter(r => r.rating === 3).length;
  const twoStarCount = reviews.filter(r => r.rating === 2).length;
  const oneStarCount = reviews.filter(r => r.rating === 1).length;

  const ratingLabelMap: Record<number, string> = {
    5: '5 - Excellent Quality & Service',
    4: '4 - Very Good Experience',
    3: '3 - Average / Satisfactory',
    2: '2 - Below Expectations',
    1: '1 - Disappointed / Needs Improvement'
  };

  return (
    <section id="customer-reviews" className="py-14 sm:py-18 bg-[#FAF7F2] border-t border-[#E6D8C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6D8] border border-[#D4BEA1] text-xs font-bold uppercase tracking-wider text-[#7F613D] mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291D11] tracking-tight font-display">
            Real Reviews From Noida & Gr. Noida Movers
          </h2>
          <p className="text-sm sm:text-base text-[#61482D] mt-2">
            Transparent ratings and honest experiences from residents who ordered shifting cartons with KARTONIQ.
          </p>
        </div>

        {/* Rating Breakdown & Action Card */}
        <div className="bg-white border border-[#E6D8C5] rounded-3xl p-6 sm:p-8 shadow-xs mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Main Score */}
            <div className="md:col-span-4 text-center md:text-left md:border-r md:border-[#E6D8C5] md:pr-6">
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-4xl sm:text-5xl font-black text-[#291D11] font-display">
                  {averageRating}
                </span>
                <span className="text-sm font-semibold text-[#8C6D46]">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 my-2">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
                {/* 5th partial/dimmed star */}
                <div className="relative">
                  <Star className="w-5 h-5 text-[#E6D8C5] fill-[#E6D8C5]" />
                  <div className="absolute inset-0 overflow-hidden w-[40%]">
                    <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#61482D]">
                Based on <span className="font-bold text-[#291D11]">{totalReviews} verified ratings</span> across Noida sectors
              </p>
            </div>

            {/* Star Distribution Bars (5 down to 1) */}
            <div className="md:col-span-5 space-y-1.5">
              {/* 5 Stars */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-12 font-semibold text-[#42301D] text-right">5 Stars</span>
                <div className="flex-1 bg-[#FAF7F2] border border-[#E6D8C5] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#F59E0B] h-full rounded-full transition-all" 
                    style={{ width: `${(fiveStarCount / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="w-8 font-medium text-[#7F613D] text-right">{fiveStarCount}</span>
              </div>

              {/* 4 Stars */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-12 font-semibold text-[#42301D] text-right">4 Stars</span>
                <div className="flex-1 bg-[#FAF7F2] border border-[#E6D8C5] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#F59E0B] h-full rounded-full transition-all" 
                    style={{ width: `${(fourStarCount / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="w-8 font-medium text-[#7F613D] text-right">{fourStarCount}</span>
              </div>

              {/* 3 Stars */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-12 font-semibold text-[#42301D] text-right">3 Stars</span>
                <div className="flex-1 bg-[#FAF7F2] border border-[#E6D8C5] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#D97706] h-full rounded-full transition-all" 
                    style={{ width: `${(threeStarCount / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="w-8 font-medium text-[#7F613D] text-right">{threeStarCount}</span>
              </div>

              {/* 2 Stars */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-12 font-semibold text-[#42301D] text-right">2 Stars</span>
                <div className="flex-1 bg-[#FAF7F2] border border-[#E6D8C5] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#EA580C] h-full rounded-full transition-all" 
                    style={{ width: `${(twoStarCount / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="w-8 font-medium text-[#7F613D] text-right">{twoStarCount}</span>
              </div>

              {/* 1 Star */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-12 font-semibold text-[#42301D] text-right">1 Star</span>
                <div className="flex-1 bg-[#FAF7F2] border border-[#E6D8C5] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#DC2626] h-full rounded-full transition-all" 
                    style={{ width: `${(oneStarCount / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="w-8 font-medium text-[#7F613D] text-right">{oneStarCount}</span>
              </div>
            </div>

            {/* Write a Review Button + WhatsApp Action */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#291D11] hover:bg-[#42301D] text-white text-xs sm:text-sm font-extrabold py-3 px-4 rounded-xl shadow-xs transition-all uppercase tracking-wide cursor-pointer w-full active:scale-[0.98]"
              >
                <PenLine className="w-4 h-4 text-[#E6D8C5] shrink-0" />
                <span>Write a Review</span>
              </button>

              <a
                href={getWhatsAppUrl('Hi Team KARTONIQ, I want to order cartons for shifting.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-extrabold py-2.5 px-4 rounded-xl shadow-xs transition-all uppercase tracking-wide w-full"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white shrink-0" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Filter Pills with Counts */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#61482D] mr-1">
            <Filter className="w-3.5 h-3.5 text-[#8C6D46]" />
            <span>Filter:</span>
          </div>

          <button
            type="button"
            onClick={() => { setSelectedFilter('all'); setVisibleCount(6); }}
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all border cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#291D11] text-white border-[#291D11]'
                : 'bg-white text-[#61482D] border-[#E6D8C5] hover:border-[#D4BEA1]'
            }`}
          >
            All ({totalReviews})
          </button>

          <button
            type="button"
            onClick={() => { setSelectedFilter('5'); setVisibleCount(6); }}
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all border cursor-pointer ${
              selectedFilter === '5'
                ? 'bg-[#291D11] text-white border-[#291D11]'
                : 'bg-white text-[#61482D] border-[#E6D8C5] hover:border-[#D4BEA1]'
            }`}
          >
            5★ ({fiveStarCount})
          </button>

          <button
            type="button"
            onClick={() => { setSelectedFilter('4'); setVisibleCount(6); }}
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all border cursor-pointer ${
              selectedFilter === '4'
                ? 'bg-[#291D11] text-white border-[#291D11]'
                : 'bg-white text-[#61482D] border-[#E6D8C5] hover:border-[#D4BEA1]'
            }`}
          >
            4★ ({fourStarCount})
          </button>

          <button
            type="button"
            onClick={() => { setSelectedFilter('3'); setVisibleCount(6); }}
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all border cursor-pointer ${
              selectedFilter === '3'
                ? 'bg-[#291D11] text-white border-[#291D11]'
                : 'bg-white text-[#61482D] border-[#E6D8C5] hover:border-[#D4BEA1]'
            }`}
          >
            3★ ({threeStarCount})
          </button>

          <button
            type="button"
            onClick={() => { setSelectedFilter('2'); setVisibleCount(6); }}
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all border cursor-pointer ${
              selectedFilter === '2'
                ? 'bg-[#291D11] text-white border-[#291D11]'
                : 'bg-white text-[#61482D] border-[#E6D8C5] hover:border-[#D4BEA1]'
            }`}
          >
            2★ ({twoStarCount})
          </button>

          <button
            type="button"
            onClick={() => { setSelectedFilter('1'); setVisibleCount(6); }}
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all border cursor-pointer ${
              selectedFilter === '1'
                ? 'bg-[#291D11] text-white border-[#291D11]'
                : 'bg-white text-[#61482D] border-[#E6D8C5] hover:border-[#D4BEA1]'
            }`}
          >
            1★ ({oneStarCount})
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#E6D8C5] rounded-2xl p-5 flex flex-col justify-between hover:border-[#D4BEA1] hover:shadow-xs transition-all"
            >
              <div>
                {/* Header with stars & date */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= review.rating
                            ? review.rating >= 4
                              ? 'fill-[#F59E0B] text-[#F59E0B]'
                              : review.rating === 3
                              ? 'fill-[#D97706] text-[#D97706]'
                              : 'fill-[#EA580C] text-[#EA580C]'
                            : 'fill-transparent text-[#E6D8C5]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#A07E54] font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#42301D] leading-relaxed mb-4">
                  "{review.review}"
                </p>
              </div>

              {/* Author & Verified Tag Footer */}
              <div className="pt-3 border-t border-[#F2E8DC]">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xs font-extrabold text-[#291D11]">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-[#7F613D] mt-0.5">
                      <MapPin className="w-3 h-3 text-[#A07E54] shrink-0" />
                      <span>{review.location}</span>
                    </div>
                  </div>

                  {review.verified && (
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded-full shrink-0">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {review.boxTypeUsed && (
                  <div className="mt-2 text-[10px] text-[#8C6D46] bg-[#FAF7F2] px-2 py-1 rounded-md border border-[#EFE6D8] inline-block font-medium">
                    Order: {review.boxTypeUsed}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredReviews.length && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredReviews.length))}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF7F2] text-[#291D11] border border-[#D4BEA1] font-bold text-xs sm:text-sm py-2.5 px-6 rounded-xl transition-all shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <span>View More Reviews ({filteredReviews.length - visibleCount} remaining)</span>
              <ChevronDown className="w-4 h-4 text-[#8C6D46]" />
            </button>
          </div>
        )}

      </div>

      {/* Customer Write Review Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FAF7F2] text-[#291D11] rounded-3xl max-w-lg w-full p-6 sm:p-7 relative shadow-2xl border border-[#E6D8C5] my-8 max-h-[90vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={resetAndCloseModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#E6D8C5] hover:bg-[#D4BEA1] flex items-center justify-center text-[#291D11] transition-colors cursor-pointer"
              aria-label="Close review dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {!submittedSuccess ? (
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-5 h-5 text-[#D97706]" />
                  <h3 className="text-xl font-bold text-[#291D11] font-display">
                    Share Your Experience
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#61482D] mb-5">
                  Help fellow Noida & Greater Noida residents make informed shifting decisions.
                </p>

                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  {/* Interactive Star Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#7F613D] mb-1.5">
                      Your Overall Rating *
                    </label>
                    <div className="flex items-center gap-1.5 bg-white p-3 rounded-xl border border-[#E6D8C5]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 hover:scale-110 transition-transform cursor-pointer"
                          aria-label={`${star} star rating`}
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= (hoverRating || formRating)
                                ? 'fill-[#F59E0B] text-[#F59E0B]'
                                : 'fill-transparent text-[#D4BEA1]'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-[#291D11] ml-2">
                        {ratingLabelMap[hoverRating || formRating]}
                      </span>
                    </div>
                  </div>

                  {/* Name and Location row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#7F613D] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Rahul Verma"
                        className="w-full bg-white border border-[#E6D8C5] rounded-xl px-3.5 py-2.5 text-sm text-[#291D11] placeholder:text-[#A07E54]/60 focus:outline-none focus:border-[#291D11]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#7F613D] mb-1">
                        Society / Sector *
                      </label>
                      <input
                        type="text"
                        required
                        value={formLocation}
                        onChange={(e) => setFormLocation(e.target.value)}
                        placeholder="e.g. Sector 76, Noida"
                        className="w-full bg-white border border-[#E6D8C5] rounded-xl px-3.5 py-2.5 text-sm text-[#291D11] placeholder:text-[#A07E54]/60 focus:outline-none focus:border-[#291D11]"
                      />
                    </div>
                  </div>

                  {/* Carton Type Ordered */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#7F613D] mb-1">
                        Carton Type Used
                      </label>
                      <select
                        value={formBoxType}
                        onChange={(e) => setFormBoxType(e.target.value)}
                        className="w-full bg-white border border-[#E6D8C5] rounded-xl px-3.5 py-2.5 text-sm text-[#291D11] focus:outline-none focus:border-[#291D11] cursor-pointer"
                      >
                        <option value="Medium Carton (5-Ply)">Medium Carton (24×18×18", 5-Ply)</option>
                        <option value="Small Carton (3-Ply)">Small Carton (12×12×18", 3-Ply)</option>
                        <option value="Cartons + Brown Tapes">Cartons + Brown Tapes (2"x65m)</option>
                        <option value="Full Pack (Cartons + Tape + Bubble Wrap)">Full Pack (Cartons + Tape + Bubble Wrap)</option>
                        <option value="Bulk Supplies Order">Bulk Order (15+ Items)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#7F613D] mb-1">
                        Moving Purpose
                      </label>
                      <input
                        type="text"
                        value={formPurpose}
                        onChange={(e) => setFormPurpose(e.target.value)}
                        placeholder="e.g. 2BHK Shifting / Storage"
                        className="w-full bg-white border border-[#E6D8C5] rounded-xl px-3.5 py-2.5 text-sm text-[#291D11] placeholder:text-[#A07E54]/60 focus:outline-none focus:border-[#291D11]"
                      />
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#7F613D] mb-1">
                      Your Detailed Review *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formReview}
                      onChange={(e) => setFormReview(e.target.value)}
                      placeholder="How was the strength of the boxes? Was the WhatsApp coordination and doorstep delivery timely?"
                      className="w-full bg-white border border-[#E6D8C5] rounded-xl p-3.5 text-sm text-[#291D11] placeholder:text-[#A07E54]/60 focus:outline-none focus:border-[#291D11] leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#291D11] hover:bg-[#42301D] text-white font-extrabold py-3.5 px-4 rounded-xl shadow-md transition-all text-sm uppercase tracking-wide cursor-pointer active:scale-[0.98]"
                  >
                    Submit Customer Review
                  </button>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#291D11] font-display mb-2">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-xs sm:text-sm text-[#61482D] mb-6 max-w-sm mx-auto">
                  Your review has been added to the KARTONIQ community reviews list. We appreciate your support!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={resetAndCloseModal}
                    className="w-full sm:w-auto bg-[#291D11] text-white text-xs font-bold py-2.5 px-6 rounded-xl hover:bg-[#42301D] transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hi Team KARTONIQ, I just submitted a ${formRating}-star review for my carton order in ${formLocation || 'Noida'}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold py-2.5 px-5 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
