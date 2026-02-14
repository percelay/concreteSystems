export default function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="aspect-video bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-400 rounded">
      <p className="text-gray-500 italic text-sm text-center px-4">
        Image here
      </p>
    </div>
  );
}
