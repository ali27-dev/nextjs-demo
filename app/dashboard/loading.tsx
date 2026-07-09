export default function Loading() {
  return (
    <div className="animate-pulse space-y-4">
      <p>Loading Bank Details....</p>
      <div className="h-64 bg-gray-200 rounded" />       {/* image placeholder */}
      <div className="h-6 bg-gray-200 rounded w-3/4" />   {/* title placeholder */}
      <div className="h-4 bg-gray-200 rounded w-1/2" />   {/* price placeholder */}
    </div>
  );
}