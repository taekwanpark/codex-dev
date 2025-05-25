import { prisma } from '../lib/prisma';

async function main() {
  await prisma.payment.deleteMany();
  await prisma.reservation.deleteMany();
  await prisma.car.deleteMany();
  await prisma.user.deleteMany();

  const admin = await prisma.user.create({
    data: { name: 'Admin', email: 'admin@example.com', role: 'admin' },
  });

  const staff = await prisma.user.create({
    data: { name: 'Staff', email: 'staff@example.com', role: 'staff' },
  });

  const customers = [] as const;
  for (let i = 1; i <= 5; i++) {
    customers.push(
      await prisma.user.create({
        data: {
          name: `Customer${i}`,
          email: `customer${i}@example.com`,
          role: 'customer',
        },
      })
    );
  }

  const cars = [] as const;
  for (let i = 1; i <= 10; i++) {
    cars.push(
      await prisma.car.create({
        data: {
          brand: `Brand${i}`,
          model: `Model${i}`,
          plate: `00가${1000 + i}`,
          status: i % 3 === 0 ? 'maintenance' : 'available',
          dailyRate: 30000 + i * 1000,
        },
      })
    );
  }

  for (let i = 0; i < 10; i++) {
    const car = cars[i % cars.length];
    const customer = customers[i % customers.length];
    const reservation = await prisma.reservation.create({
      data: {
        carId: car.id,
        userId: customer.id,
        startDate: new Date(),
        endDate: new Date(Date.now() + 86400000),
        totalPrice: car.dailyRate,
        status: 'confirmed',
      },
    });
    await prisma.payment.create({
      data: {
        reservationId: reservation.id,
        method: 'card',
        amount: reservation.totalPrice,
      },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
