import { PlayerList } from "@/components/Lobby/PlayerList";
import Head from "next/head";

export default function Lobby() {
   return (
      <>
         <Head>
            <title>Reversi | Lobby</title>
            <meta name="description" content="Generated by create next app" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold my-8">Lobby</h1>
            <PlayerList />
         </main>
      </>
   );
}
