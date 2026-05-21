import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Mohon isi kolom Nama, Email, dan Pesan Anda.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
    // Mock clearing form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-natural-sec border-t border-natural-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-natural-brand">
            Hubungi Tim Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-natural-dark">
            Ada Pertanyaan? Kami Siap Membantu
          </h3>
          <p className="text-natural-text text-lg leading-relaxed font-light">
            Tim layanan pelanggan kami selalu siap mendampingi Anda merancang alur kerja konten digital terbaik.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Contact Details Column - 5/12 */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-[2.5rem] border border-natural-border custom-shadow text-left">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-natural-dark">Saluran Komunikasi</h4>
              <p className="text-xs text-natural-muted font-light leading-relaxed">
                Silakan hubungi kami melalui channels berikut atau kunjungi workspace fisik kami.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-natural-brand/10 border border-natural-brand/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-natural-brand" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-natural-muted uppercase tracking-wider">Email Layanan</h5>
                  <p className="text-sm font-semibold text-natural-dark mt-0.5">support@creatorflow.io</p>
                  <p className="text-[11px] text-natural-muted font-light">Respon dalam kurun 12-24 Jam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-natural-brand/10 border border-natural-brand/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-natural-brand" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-natural-muted uppercase tracking-wider">Layanan Telepon</h5>
                  <p className="text-sm font-semibold text-natural-dark mt-0.5">+62 21-5088-2931</p>
                  <p className="text-[11px] text-natural-muted font-light">Hari Kerja (Senin - Jumat, 09.00 - 17.00 WIB)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-natural-brand/10 border border-natural-brand/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-natural-brand" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-natural-muted uppercase tracking-wider">Kantor Pusat</h5>
                  <p className="text-sm font-semibold text-natural-dark mt-0.5">Menara Digital Karya, Lantai 18</p>
                  <p className="text-xs text-natural-text font-light">Kuningan, Jakarta Selatan, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column - 7/12 */}
          <div className="lg:col-span-7 bg-white p-8 rounded-[2.5rem] border border-natural-border custom-shadow text-left">
            {isSubmitted ? (
              <div className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-natural-dark">Pesan Anda Berhasil Terkirim!</h4>
                <p className="text-sm text-natural-text max-w-md leading-relaxed">
                  Terima kasih telah menghubungi CreatorFlow. Tim Support Spesialis kami akan membalas pesan Anda ke alamat email dalam waktu maksimal 24 jam.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-natural-sec hover:bg-natural-brand/10 text-natural-dark rounded-full text-xs font-semibold cursor-pointer transition-colors"
                >
                  Kirim Pesan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-natural-dark">Sampaikan Keinginan Anda</h4>
                  <p className="text-xs text-natural-muted font-light">
                    Kirimkan draf masukan atau tawaran kerja sama kemitraan secara langsung.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs text-rose-800 text-center font-medium font-sans">
                    ⚠️ {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-natural-dark">Nama Lengkap *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama Anda..."
                      required
                      className="w-full px-4 py-3 bg-natural-sec border border-natural-border rounded-xl text-xs text-natural-dark placeholder-natural-muted focus:outline-none focus:ring-1 focus:ring-natural-brand focus:border-natural-brand focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-natural-dark">Alamat Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Masukkan email Anda..."
                      required
                      className="w-full px-4 py-3 bg-natural-sec border border-natural-border rounded-xl text-xs text-natural-dark placeholder-natural-muted focus:outline-none focus:ring-1 focus:ring-natural-brand focus:border-natural-brand focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-natural-dark">Topik / Subjek</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Mengenai rencana uji coba, kerja sama..."
                    className="w-full px-4 py-3 bg-natural-sec border border-natural-border rounded-xl text-xs text-natural-dark placeholder-natural-muted focus:outline-none focus:ring-1 focus:ring-natural-brand focus:border-natural-brand focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-natural-dark">Isi Pesan Anda *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tulis pesan lengkap Anda di sini..."
                    required
                    className="w-full px-4 py-3 bg-natural-sec border border-natural-border rounded-xl text-xs text-natural-dark placeholder-natural-muted focus:outline-none focus:ring-1 focus:ring-natural-brand focus:border-natural-brand focus:bg-white transition-all resize-none animate-duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold text-white bg-natural-brand hover:bg-natural-hover shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
