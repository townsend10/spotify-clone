import SideBar from "@/components/SideBar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import { Figtree } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";
const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify clone",
  description: "Listing music",
};
export const revalidadte = 0;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <SideBar songs={userSongs}>{children}</SideBar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
// 1:48
