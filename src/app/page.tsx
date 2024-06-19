'use client';
import {useEffect} from 'react';
import Image from 'next/image';

import {doc, getDoc} from '@firebase/firestore';
import fireStore from '@/firebase/firestore';

const onClickUpLoadButton = async () => {
  const query = await getDoc(doc(fireStore, 'test', 'RisNxptnXAzDqzsGxIMx'));
  console.log(query.data());
};

export default function Home() {
  useEffect(() => {
    onClickUpLoadButton();
  }, []);
  return <div>테스트</div>;
}
