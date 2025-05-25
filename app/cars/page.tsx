const cars = [
  {
    id: 1,
    brand: 'Hyundai',
    model: 'Sonata',
    plate: '12가3456',
    status: 'available',
    dailyRate: 50000,
  },
];

export default function CarsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">차량 목록</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">브랜드</th>
            <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">모델</th>
            <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">번호판</th>
            <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">상태</th>
            <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">일일 요금</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cars.map((car) => (
            <tr key={car.id}>
              <td className="px-3 py-2 whitespace-nowrap">{car.brand}</td>
              <td className="px-3 py-2 whitespace-nowrap">{car.model}</td>
              <td className="px-3 py-2 whitespace-nowrap">{car.plate}</td>
              <td className="px-3 py-2 whitespace-nowrap">{car.status}</td>
              <td className="px-3 py-2 whitespace-nowrap">{car.dailyRate.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
