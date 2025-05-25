import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserRole } from '@/lib/auth';

export async function GET() {
  const cars = await prisma.car.findMany();
  return NextResponse.json(cars);
}

export async function POST(request: Request) {
  const role = await getUserRole();
  if (role !== 'admin' && role !== 'staff') {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const data = await request.json();
  const car = await prisma.car.create({ data });
  return NextResponse.json(car, { status: 201 });
}
