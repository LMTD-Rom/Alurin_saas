export default function Loading() {
  return (
    <div className="min-h-screen p-4 flex flex-col gap-4 animate-pulse">
      {/* Hero Skeleton */}
      <div className="bg-gray-200/50 rounded-[40px] w-full min-h-[620px] relative">
        <div className="absolute top-8 left-8 w-24 h-8 bg-gray-300/50 rounded-full" />
        <div className="absolute top-8 right-8 w-32 h-10 bg-gray-300/50 rounded-full hidden md:block" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <div className="w-48 h-8 bg-gray-300/50 rounded-full" />
          <div className="w-3/4 max-w-[600px] h-16 bg-gray-300/50 rounded-2xl" />
          <div className="w-1/2 max-w-[400px] h-16 bg-gray-300/50 rounded-2xl" />
          <div className="w-[500px] h-12 bg-gray-300/50 rounded-full mt-4" />
        </div>
      </div>
      
      {/* Features Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-64 bg-gray-200/40 rounded-3xl" />
        ))}
      </div>
    </div>
  );
}