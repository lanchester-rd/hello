export default function MetricBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-semibold">{value}</div>
      <div className="mt-2 text-sm text-gray-600">{label}</div>
    </div>
  )
}
