# REST API Daftar Barang Cuci Sepatu

## Deskripsi Umum

Proyek ini merupakan **tugas responsi Praktikum Pemrograman Perangkat Bergerak (PPB)** mencakup *Pembuatan REST API menggunakan JavaScript seperti Node.js dan Express.js*.
API ini memungkinkan layanan **cuci sepatu** untuk mengelola data cucian, termasuk pencatatan, pembaruan status, dan penghapusan.
API ini sudah dapat dideploy di **Vercel** karena **Supabase** diintegrasikan sebagai database utama.

---

## Tujuan

1. Mengimplementasikan konsep **CRUD (Create, Read, Update, Delete)** dalam REST API.
2. Meningkatkan pemahaman penggunaan **Express.js** sebagai framework backend.
3. Mengelola data menggunakan format **JSON** dengan **Supabase** sebagai penyimpanan data cloud.
4. Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata.

---

## Fitur Utama API

| Metode   | Endpoint          | Deskripsi                                                                    |
| -------- | ----------------- | ---------------------------------------------------------------------------- |
| `GET`    | `/api/sepatu`     | Menampilkan seluruh daftar sepatu yang sedang dicuci.                        |
| `POST`   | `/api/sepatu`     | Menambahkan data sepatu baru ke dalam daftar.                                |
| `PUT`    | `/api/sepatu/:id` | Memperbarui status sepatu (misalnya dari *Sedang Dicuci* menjadi *Selesai*). |
| `DELETE` | `/api/sepatu/:id` | Menghapus data sepatu yang sudah selesai dicuci.                             |

---

## Struktur Data

Contoh struktur data sepatu di database Supabase:

```json
{
  "id": 1,
  "nama": "Nike Air Force 1",
  "jenis_sepatu": "Sneakers",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": null
}
```

### Keterangan:

1. **id** → Nomor unik sepatu
2. **nama** → Nama sepatu atau pelanggan
3. **jenis_sepatu** → Jenis sepatu (Sneakers, Boots, Slip-on, dll)
4. **status** → Status proses cuci (*Sedang Dicuci / Selesai*)
5. **tanggalMasuk** → Tanggal sepatu diterima
6. **tanggalSelesai** → Tanggal sepatu selesai dicuci (boleh kosong/null)

---

## Bonus Fitur

API ini mendukung *filter* berdasarkan status:

```
GET /api/sepatu?status=Selesai
```

Akan menampilkan hanya data sepatu yang statusnya `Selesai`.

---

## Alur Kerja API

1. Pengguna mengirim permintaan HTTP (GET, POST, PUT, DELETE) ke server.
2. Server memproses permintaan menggunakan **Express.js**.
3. Data sepatu disimpan atau diambil dari **Supabase**.
4. Server mengembalikan respons dalam format **JSON**.

---

## Teknologi yang Digunakan

1. **Node.js** – runtime JavaScript untuk backend
2. **Express.js** – framework REST API
3. **Supabase** – penyimpanan data berbasis PostgreSQL
4. **Vercel** – hosting serverless untuk API
5. **JSON** – format pertukaran data antar sistem

---

---

## Hasil Akhir

Dengan adanya API Cuci Sepatu REST ini, manajemen data cucian sepatu menjadi lebih mudah dan sistematis. Jenis sepatu, data pelanggan, dan status pencucian sekarang dapat diakses dan diperbarui secara digital melalui API yang terhubung ke database Supabase.

 API ini juga tersedia di Vercel, sehingga dapat digunakan secara publik dan mudah diintegrasikan dengan dashboard web atau aplikasi mobile. Struktur kodenya yang modular memudahkan pengembangan lebih lanjut sesuai kebutuhan layanan.

---

## Contoh Request dan Response

### GET `/api/sepatu`

**Response:**

```json
[
  {
    "id": 1,
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-01",
    "tanggalSelesai": "2025-10-03"
  }
]
```

---

### POST `/api/sepatu`

**Body:**

```json
{
  "nama": "Nike Air Max",
  "jenis_sepatu": "Sneakers",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": null
}
```

**Response:**

```json
{
  "message": "Data sepatu berhasil ditambahkan."
}
```

---

### PUT `/api/sepatu/:id`

**Body:**

```json
{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-09"
}
```

**Response:**

```json
{
  "message": "Status sepatu berhasil diperbarui."
}
```

---

### DELETE `/api/sepatu/:id`

**Response:**

```json
{
  "message": "Data sepatu berhasil dihapus."
}
```

---

## Deployment URL

🔗 **API Online:**
[[https://cuci-sepatu-nine.vercel.app](https://vercel.com/bams-zzzzs-projects/ngumbah_sepatu)

Contoh akses:

```
GET https://cuci-sepatu-nine.vercel.app/api/sepatu
```

---

## Struktur Folder Project

```
api/
 ┃ ┗ index.js
src/
 ┣ config/
 ┃ ┗ supabaseClient.js
 ┣ controllers/
 ┃ ┗ sepatuController.js
 ┣ models/
 ┃ ┗ sepatuModel.js
 ┣ routes/
 ┃ ┗ sepatuRoutes.js
 ┗ index.js
.env
package.json
package-lock.json
README.md
vercel.json
```

---

