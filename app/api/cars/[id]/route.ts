import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserRole } from '@/lib/auth';

type Params = { params: { id: string } };

export async function PUT(request: Request, { params }: Params) {
  const role = await getUserRole();
  if (role !== 'admin' && role !== 'staff') {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const data = await request.json();
  const car = await prisma.car.update({
    where: { id: Number(params.id) },
    data,
  });
  return NextResponse.json(car);
}

export async function DELETE(request: Request, { params }: Params) {
  const role = await getUserRole();
  if (role !== 'admin' && role !== 'staff') {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  await prisma.car.delete({ where: { id: Number(params.id) } });
  return new NextResponse(null, { status: 204 });
}
