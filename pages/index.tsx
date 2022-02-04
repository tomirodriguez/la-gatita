import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Todes por la gatita</title>
        <meta name="description" content="Platita para la gatita plz" />
      </Head>

      <main className="flex flex-col items-center">
        <h1 className="font-bold my-5 text-xl md:text-4xl">
          LA GATITA QUIERE PLATITA
        </h1>
        <Image
          className="rounded-full"
          src={"/imgs/gatita.jpeg"}
          width={300}
          height={300}
          alt="La gatita"
        />
        <div className="my-5">
        {/* <script
          src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
          data-preference-id="108610056-3463bf8e-6c7b-4e4c-8a3b-da1421ccb8a9"
          data-source="button"
          defer
        />   */}
        </div>
      </main>
    </div>
  );
};

export default Home;
