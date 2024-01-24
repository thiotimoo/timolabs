import { MainContent } from '@/components/layout';
import { authUserSession } from '@/lib/auth-libs';
import React from 'react'


const ProfilePage = async () => {
  const user = await authUserSession();
  return (
    <MainContent>{JSON.stringify(user)}</MainContent>
  )
}

export default ProfilePage