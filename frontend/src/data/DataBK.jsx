import kost1 from '../assets/gambar-kost&kontrakan/kost1.svg';
import kost2 from '../assets/gambar-kost&kontrakan/kost2.svg';
import kost3 from '../assets/gambar-kost&kontrakan/kost3.svg';
import kost4 from '../assets/gambar-kost&kontrakan/kost4.svg';
import kipas from '../assets/gambar-barang/kipas.svg';
import ember from '../assets/gambar-barang/ember.svg';
import setrika from '../assets/gambar-barang/setrika.svg';
import sikat from '../assets/gambar-barang/sikat.svg';

const semuadata = {
  DataKost: [
    {
      id: 1,
      title: 'Olive Paragon Mall Tipe A',
      katagori: [{ orang: 'putra', kontrakan: 'kontrakan' }],
      kecamatan: 'Jakarta Pusat',
      fasilitas: 'K.Mandi dalam . Ac . Meja . Kasur ',
      gambar: kost1,
      harga: 'Rp.700.000',
      satuan: 'Bulan',
    },
    {
      id: 2,
      title: 'Gelong Residence 25 Tipe A Grogol',
      katagori: [{ orang: 'putra', kontrakan: 'kontrakan' }],
      kecamatan: ' Jakarta Barat',
      fasilitas: 'K.Mandi dalam . Ac . Meja . Kasur . TV',
      gambar: kost2,
      harga: 'Rp.2.100.000',
      satuan: 'Bulan',
    },
    {
      id: 3,
      title: 'Olive Paragon Mall Tipe A',
      katagori: [{ orang: 'putra', kontrakan: 'kontrakan' }],
      kecamatan: 'Jakarta Pusat',
      fasilitas: 'K.Mandi dalam . Ac . Meja . Kasur ',
      gambar: kost3,
      harga: 'Rp.700.000',
      satuan: 'Bulan',
    },
    {
      id: 4,
      title: 'Olive Paragon Mall Tipe A',
      katagori: [{ orang: 'putra', kontrakan: 'kontrakan' }],
      kecamatan: 'Jakarta Pusat',
      fasilitas: 'K.Mandi dalam . Ac . Meja . Kasur ',
      gambar: kost4,
      harga: 'Rp.700.000',
      satuan: 'Bulan',
    },
  ],
  DataFasilitas: [
    {
      id: 1,
      title: 'Kipas',
      katagori: 'fasilitas rumah',
      katagoriFas: 'elektronik',
      kecamatan: 'Kecamatan Lewiliang',
      gambar: kipas,
      harga: 'Rp.50.000',
      satuan: 'pcs',
    },
    {
      id: 2,
      title: 'Ember',
      katagori: 'fasilitas rumah',
      katagoriFas: 'Kebersihan',
      kecamatan: 'Kecamatan Lewiliang',
      gambar: ember,
      harga: 'Rp.50.000',
      satuan: 'pcs',
    },
    {
      id: 3,
      title: 'Sikat',
      katagori: 'fasilitas rumah',
      katagoriFas: 'Kebersihan',
      kecamatan: 'Kecamatan Lewiliang',
      gambar: sikat,
      harga: 'Rp.50.000',
      satuan: 'pcs',
    },
    {
      id: 4,
      title: 'Setrika',
      katagori: 'fasilitas rumah',
      katagoriFas: 'eletronik',
      kecamatan: 'Kecamatan Lewiliang',
      gambar: setrika,
      harga: 'Rp.50.000',
      satuan: 'pcs',
    },
  ],
};

export default semuadata;
