import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-100 to-white text-gray-800 px-6 md:px-16 py-12">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Selamat Datang di PT Imah Teuweul Indonesia</h1>
        <p className="text-lg md:text-xl mb-8">
          Produsen madu asli Kuningan dengan program reseller dan sistem poin pembelian.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="#produk" className="px-6 py-3 rounded-2xl bg-amber-500 shadow-md font-semibold hover:scale-105 transition">Lihat Produk</Link>
          <Link href="#reseller" className="px-6 py-3 rounded-2xl bg-orange-600 text-white shadow-md font-semibold hover:scale-105 transition">Gabung Reseller</Link>
        </div>
      </section>

      <section id="produk" className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Produk Unggulan Kami</h2>
        <p className="mb-6">Berbagai pilihan madu berkualitas dengan manfaat kesehatan terbaik.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Madu Mellifera','Madu Odeng','Madu Teuweul','Madu Habbatussauda'].map((madu) => (
            <div key={madu} className="p-4 border rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="font-bold mb-2 text-xl">{madu}</h3>
              <p className="text-sm">Kualitas terbaik, dipanen langsung dari peternakan lebah.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reseller" className="max-w-4xl mx-auto mt-20 text-center bg-white rounded-2xl py-10 px-6 shadow-md">
        <h2 className="text-3xl font-bold mb-4">Program Reseller</h2>
        <p className="mb-8">Dapatkan keuntungan dan poin pembelian untuk setiap transaksi minimal Rp50.000</p>
        <Link href="https://wa.me/6280000000?text=Halo,%20saya%20ingin%20bergabung%20sebagai%20reseller" className="px-6 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow hover:scale-105 transition inline-block">Hubungi via WhatsApp</Link>
      </section>
    </main>
  );
}
