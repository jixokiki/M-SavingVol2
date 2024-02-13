import PlanCard from "@/components/PlanCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden flex justify-center mb-2">
        <Image
          src={"/assets/plan1.jpg"}
          width={1200}
          height={1200}
          alt={"plan"}
          className="object-cover"
          priority
        />
      </div>
      <h2 className="text-5xl text-center font-bold mb-2">PLAN</h2>
      <p className="text-center">M-SAVING</p>
      <div className="flex flex-col gap-8 mb-10">
        <PlanCard
          image={"/assets/plan2.jpg"}
          title={"11 Cara Mengatur Keuangan Pribadi dengan Baik"}
          content={
            "Mengatur keuangan memang membutuhkan usaha. Akan tetapi, akan timbul lebih banyak masalah jika Anda tidak melakukannya, baik bagi diri Anda sendiri maupun orang-orang di sekitar. Agar itu tidak terjadi, terapkan cara-cara mengatur keuangan pribadi dengan gaji kecil berikut."
          }
          link={"/plan/1"}
        />
        <PlanCard
          image={"/assets/plan3.jpg"}
          title={"Apa Itu Tabungan Berjangka?"}
          content={
            "Tabungan berjangka adalah jenis tabungan di mana nasabah menyetorkan sejumlah uang ke dalam rekening bank dan menentukan jangka waktu simpanan. Biasanya, dana yang disetorkan dalam jumlah yang tetap selama jangka waktu antara satu bulan hingga beberapa tahun. Selama jangka waktu tersebut, nasabah tidak dapat melakukan penarikan dana atau pengambilan uang dari rekening tabungan berjangka tersebut. Produk ini juga dikenal sebagai tabungan rencana."
          }
          link={"/plan/2"}
        />
        <PlanCard
          image={"/assets/plan4.jpg"}
          title={"6 keuntungan menabung"}
          content={
            "Jika saat ini kamu belum mempunyai motivasi menabung, maka jadikan beberapa manfaat menabung berikut ini sebagai pemicu untuk kamu melakukan aktivitas tersebut."
          }
          link={"/plan/3"}
        />
      </div>
    </div>
  );
}
