import React from 'react';
import Head from 'next/head';
import { TITLE } from 'app/config';

// сделано перенаправление на in_dev

export default function Pay() {
  return (
    <>
      <Head>
        <title>Оплата | {TITLE}</title>
      </Head>
      <div>Оплата</div>
    </>
  );
}
