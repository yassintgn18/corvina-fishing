function SkeletonCard() {
  return (
    <div className="bg-[var(--surface)] rounded-2xl overflow-hidden shadow-md animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
      
      {/* Content skeleton */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
        
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;