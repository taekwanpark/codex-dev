import { headers } from 'next/headers';

// Example helper to get user role from a JWT token
export async function getUserRole(): Promise<string | null> {
  const token = headers().get('authorization')?.replace('Bearer ', '');
  if (!token) return null;
  // TODO: decode token and extract role
  return 'admin'; // placeholder
}
