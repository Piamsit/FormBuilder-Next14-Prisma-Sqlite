'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Label } from './ui/label';
import { Button } from './ui/button';

function Logo() {
  const router = useRouter();

  const redirectToDashboard = async () => {
    router.push('/');
    router.refresh();
  };

  return (
    <Button
      className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
      onClick={() => {
        redirectToDashboard();
      }}
    >
      Form Builder
    </Button>
  );
}

export default Logo;
